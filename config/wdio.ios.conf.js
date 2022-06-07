const {config} = require('./wdio.shared.conf');
const path = require('path');

//
// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  //'./test/specs/**/android-native*.js'
  './test/specs/android/delete-note*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'Android',
    'appium:platformVersion': "14.5",
    'appium:deviceName': 'iPhone 12',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'],

exports.config = config;