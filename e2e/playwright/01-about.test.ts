import { expect, test } from '@playwright/test';

test.describe('포트폴리오 About 홈', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      await page.locator('[aria-label="navigation-button"]').click();
      await page.locator('[aria-label="About Link"]:visible').click();
    } else {
      await page
        .locator(
          '[aria-label="desktop-navigation"] [aria-label="About Link"]:visible'
        )
        .click();
    }
  });

  test('01-1. about url을 검사한다.', async ({ page }) => {
    await expect(page).toHaveURL(/\/about/);
  });

  test('01-2. profile 존재 여부를 검사한다.', async ({ page }) => {
    await expect(page.getByAltText('프로필 로고')).toBeVisible();
  });
});
