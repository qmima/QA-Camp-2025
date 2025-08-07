import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: "./tests",

  /* Maximum time one test can run for. */
  timeout: 5 * 60 * 1000,
  globalTimeout: 10 * 60 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30 * 1000,
  },

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 3 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI
    ? Number.parseInt(process.env.WORKERS ? process.env.WORKERS : "1")
    : 3,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html"]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    launchOptions: {
        slowMo: 300
    },
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
    screenshot: process.env.CI ? "off" : "only-on-failure",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    headless: true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Google Chrome",
      use: {
        channel: "chrome",
      },
    },

    // {
    //     name: 'firefox',
    //     use: {
    //         ...devices['Desktop Firefox']
    //     }
    // },
    // {
    //     name: 'Microsoft Edge',
    //     use: {
    //         channel: 'msedge'
    //     }
    // },
    // {
    //     name: 'webkit',
    //     use: {
    //         ...devices['Desktop Safari']
    //     }
    // }
  ],

  });