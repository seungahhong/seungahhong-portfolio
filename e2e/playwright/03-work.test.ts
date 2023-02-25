import { expect, Page, test, BrowserContext } from '@playwright/test';

test.describe('포트폴리오 Work 홈', () => {
  let browserContext: BrowserContext;
  let page: Page;

  // beforeAll hook은 최초 딱 한번 실행. initialize 작업 등을 수행
  test.beforeAll(async ({ browser, contextOptions }) => {
    browserContext = await browser.newContext(contextOptions);
  });

  test.beforeEach(async ({ isMobile }) => {
    // 페이지 생성
    page = await browserContext.newPage();

    await page.goto('/');

    if (isMobile) {
      await page.locator('[aria-label="navigation-button"]').click();
      await page.locator('[aria-label="work-link"]:visible').click();
    } else {
      await page
        .locator(
          '[aria-label="desktop-navigation"] [aria-label="work-link"]:visible'
        )
        .click();
    }
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browserContext.close();
  });

  test('03-1. work url을 검사한다.', async () => {
    await expect(page).toHaveURL(/\/work/);
  });

  test('03-2. 제목이 노출됨을 확인한다.', async () => {
    await expect(page.getByRole('heading', { name: '작업' })).toBeVisible();
  });

  test('03-3. 카드가 노출됨을 확인한다.', async () => {
    const element = await page.locator('main > section > ul > li').first();
    await expect(element).toBeVisible();
  });

  test('03-4. 카드를 클릭해서 상세화면을 로딩을 확인한다.', async () => {
    const element = await page
      .locator('main > section > ul > li > div')
      .first();
    const href = (await element.locator('a').getAttribute('href')) as string;

    element.click();

    await expect(page).toHaveURL(href);
  });

  test('03-5. Work 상세 화면에 대한 검증을 한다.', async () => {
    const element = await page
      .locator('main > section > ul > li > div')
      .first();
    const href = (await element.locator('a').getAttribute('href')) as string;

    element.click();

    await expect(page).toHaveURL(href);

    const subElement = await page.locator('main section > div').first();
    await expect(subElement).toBeVisible();
  });
});
