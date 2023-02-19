import { defineConfig, devices } from '@playwright/test';

const isVideoRecord =
  process.env.PLAYWRIGHT_VIDEO === 'true' ||
  process.env.PLAYWRIGHT_VIDEO === undefined;

export default defineConfig({
  timeout: 60 * 1000 * 30,
  use: {
    baseURL: 'https://seungahhong-portfolio.vercel.app',
    headless: true,
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
    video: 'off',
    ...(isVideoRecord
      ? {
          video: 'retain-on-failure',
          contextOptions: {
            recordVideo: {
              dir: './e2e/playwright/videos',
            },
          },
        }
      : {}),
  },
  // reporter: [['html', { open: 'neer' }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  testDir: 'e2e/playwright',
  testMatch: '*.test.ts',
});
