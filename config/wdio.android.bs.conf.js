require('dotenv').config();
const {config} = require('./wdio.shared.conf');

//
// ============
// Browserstack
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
config.specs = [
  //'./test/specs/**/android-native*.js'
  './test/specs/android/*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'Android',
    'appium:platformVersion': "10.0",
    'appium:deviceName': 'Google Pixel 3',
    'appium:automationName': 'UIAutomator2',
    'appium:app': "bs://9966fbcd19371acc9e5028b9a431d7aeefb0674d",
    'appium:autoGrantPermissions': true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'],

exports.config = config;