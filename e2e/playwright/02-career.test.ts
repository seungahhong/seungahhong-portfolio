import { expect, test } from '@playwright/test';

test.describe('포트폴리오 Career 홈', () => {
	test.beforeEach(async ({ page, isMobile }) => {
		await page.goto('/');

		if (isMobile) {
			await page.locator('[aria-label="navigation-button"]').click();
			await page.locator('[aria-label="Career Link"]:visible').click();
		} else {
			await page
				.locator(
					'[aria-label="desktop-navigation"] [aria-label="Career Link"]:visible',
				)
				.click();
		}
	});

	test('02-1. career url을 검사한다.', async ({ page }) => {
		await expect(page).toHaveURL(/\/career/);
	});

	test('02-2. 제목이 노출됨을 확인한다.', async ({ page }) => {
		await expect(page.getByRole('heading', { name: '경력' })).toBeVisible();
	});

	test('02-3. 카드가 노출됨을 확인한다.', async ({ page }) => {
		const element = await page.locator('main > section > ul > li a').first();
		await expect(element).toBeVisible();
	});

	test('02-4. 카드를 클릭해서 상세화면을 로딩을 확인한다.', async ({
		page,
	}) => {
		const element = await page.locator('main > section > ul > li a').first();
		const href = (await element.getAttribute('href')) as string;

		element.click();

		await expect(page).toHaveURL(href);
	});

	test('02-5. Carrer 상세 화면에 대한 검증을 한다.', async ({ page }) => {
		const element = await page.locator('main > section > ul > li a').first();
		const href = (await element.getAttribute('href')) as string;

		element.click();

		await expect(page).toHaveURL(href);

		const subElement = await page.locator('main section > div').first();
		await expect(subElement).toBeVisible();
	});
});
