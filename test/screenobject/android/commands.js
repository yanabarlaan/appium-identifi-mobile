class customCommands {
  // get skipBtn() {
  //   return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
  // }

  // get addNoteTxt() {
  //   return $('//*[@text="Add note"]')
  // }

  async userLogin() {
    // click skip button
    await $('android.widget.Button').click();

    // click get started
    await $('//*[@content-desc="Get Started"]').click();
    await $('//*[@text="Enter your email"]').click();
    await $('//*[@text="Enter your email"]').addValue("hovsqa@gmail.com");
    await $('~Log in').click();
    await $('//*[@password="true"]').click();
    await $('//*[@password="true"]').addValue("password");
    await $('~Log in').click();

    // assertion
    await expect($('~View company mood')).toBeDisplayed();
  }
}

//module.exports = new customCommands();
 export default new customCommands();