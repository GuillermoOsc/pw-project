const { devices } = require('playwright');

module.exports = {
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
  ],
};
