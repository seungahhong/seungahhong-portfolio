import { expect, Page, test, BrowserContext } from '@playwright/test';

test.describe('포트폴리오 About 홈', () => {
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

    await page.locator('header ul > li', { hasText: 'About' }).click();
  });

  test('01-1. about url을 검사한다.', async () => {
    await expect(page).toHaveURL(/\/about/);
  });

  test('01-2. profile 존재 여부를 검사한다.', async () => {
    await expect(page.getByAltText('프로필 로고')).toBeVisible();
  });
});
