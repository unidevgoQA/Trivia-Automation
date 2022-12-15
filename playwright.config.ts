import type { PlaywrightTestConfig } from '@playwright/test';
const { publish, defineConfig } = require('test-results-reporter');
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // testDir: './tests',
  testMatch: [
    "001Login.test.ts",
     // "002MobileDesign.test.ts",
      //"003Language.test.ts",
     // "004Menu.test.ts",
    //  "005SignUp.test.ts",
     // "006GlobalPrizing.test.ts",
    //  "007PrizeDrop.test.ts",
     // "008TugOfWar.test.ts",
     // "009LiveWall.test.ts",    
    //  "010Arcade.test.ts",
     // "011AddNewExperiences.test.ts",  
     // "012Trivia.test.ts"
    
  ],
  timeout: 1 * 30 * 10000,
  expect: {
    timeout: 6000
  },
  fullyParallel: !true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  // reporter: [['test-results-reporter',  {outputFile: "results.xml"}]],
  
  // reporter: process.env.CI
  // ? [[
  //     {
  //     "targets": [
  //       {
  //         "name": "teams",
  //         "inputs": {
  //           "url": "https://transportedlabs.webhook.office.com/webhookb2/1af1ca62-123b-4948-9a2f-f84e4cb589e6@fee95589-ad46-417d-9636-8b4078359ad9/IncomingWebhook/dbccaaa1799743e38ed4d57ba2b562bc/a6b92662-3ec5-443a-8d4e-10db06594a3c"
  //         }
  //       }
  //     ],
  //     "results": [
  //       {
  //         "type": "testng",
  //         "files": ["./results.xml"]
  //       }
  //     ]
  //   }
  // ]],
    
  reporter: process.env.CI
  ? [
      [
        "node_modules/playwright-slack-report/dist/src/SlackReporter.js",
        {
          channels: ["slack-testing"], // provide one or more Slack channels
          sendResults: "always", // "always" , "on-failure", "off"
        },
      ],
      ["dot"],
      ["list"],
      ["html"],
    ]
  : [["dot"], ["list"], ["html"]],
  
  // reporter: [["junit", {
  //   outputFile: "results.xml"
  // }]],



  
  

  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: "https://qa-1.testingdxp.com/",

    launchOptions: {
      // args: ["--start-maximized"],
      slowMo: 100
      
  },
  permissions: ["microphone","camera"],
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1700, height: 920 },
    ignoreHTTPSErrors: true,
    
  
  // permissions: ["camera"],
  

    // actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "off",
    video: process.env.CI ? "off" : "off",
    screenshot: process.env.CI ? "off" : "on",
  },



  
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     },
  //   },

  //   // {
  //   //   name: 'firefox',
  //   //   use: {
  //   //     ...devices['Desktop Firefox'],
  //   //   },
  //   // }
  // ]
};

export default config;