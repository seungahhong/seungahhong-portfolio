import { expect, Page, test, BrowserContext } from '@playwright/test';

test.describe('포트폴리오 Main 홈', () => {
  let browserContext: BrowserContext;
  let page: Page;

  // beforeAll hook은 최초 딱 한번 실행. initialize 작업 등을 수행
  test.beforeAll(async ({ browser, contextOptions }) => {
    browserContext = await browser.newContext(contextOptions);
  });

  test.beforeEach(async () => {
    // 페이지 생성
    page = await browserContext.newPage();

    await page.goto('/');
  });

  test('00-1. document title이 올바르다', async () => {
    // document.title이 올바른지 확인
    await expect(page).toHaveTitle('홍승아 포트폴리오');
  });

  test('00-2. Navigation 존재하는지를 확인한다.', async () => {
    await expect(page.locator('header ul > li')).toHaveCount(4);
  });

  test('00-3. 소셜 버튼이 존재하는지를 확인한다.', async () => {
    const element = page
      .locator('div > a[title="핸드폰번호"]')
      .first()
      .locator('xpath=..') // 부모 컴포넌트를 검색한다.
      .locator('a');

    await expect(element).toHaveCount(4);
  });

  test('00-4. footer가 존재하는지를 확인한다.', async () => {
    await expect(page.locator('footer')).toBeVisible();
  });
});
