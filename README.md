# Appium Mobile Automation

## Required Software
 - Node version 16
 - Java JDK
 - Android Studio
 - Appium Inspector
 - Appium
 - Javascript
 - WebdriverIO

### Installation
Run appium doctor command to make sure all pre-requisite are installed
```sh
appium-doctor --android
```

### Run Test with a browser
To run a test from a browserstack
add .env file containing your browserstack user and key
```sh
BROWSERSTACK_USER=username key
BROWSERSTACK_KEY=access key
```
Then run 
```sh
npx wdio config/wdio.android.bs.conf.js
```
### Run Test with local machine
Configure wdio.android.conf.js file containing your emulator name and platformversion
```sh
    platformName: 'Android',
    'appium:platformVersion': "12",
    'appium:deviceName': 'Pixel 5',
    'appium:automationName': 'UIAutomator2',
    'appium:app': path.join(process.cwd(), 'app/android/app-dev-release.apk'),
    'appium:autoGrantPermissions': true
```
Then run
```sh
npx wdio config/wdio.android.conf.js
```
