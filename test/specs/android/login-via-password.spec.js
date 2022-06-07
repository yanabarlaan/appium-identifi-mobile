describe('Welcome page', () => {
  it('User redirect to identifi login page', async () => {
    // user navigate thru welcome page 
    await $('//*[@content-desc="Next"]').click();
    await $('//*[@content-desc="Next"]').click();
    await $('//*[@content-desc="Next"]').click();
    await $('//*[@content-desc="Next"]').click();
    await $('//*[@content-desc="Next"]').click();
    await $('//*[@content-desc="Next"]').click();

    // click get started
    await $('//*[@content-desc="Get Started"]').click();

    // assertion
    await expect($('~Identifi Beta')).toBeDisplayed();
  });

  it('User logs in with unregistered email', async () => {
    // enter unregistered email
    await $('//*[@text="Enter your email"]').click();
    await $('//*[@text="Enter your email"]').addValue("test22@getnada.com");

    // click login
    await $('~Log in').click();

    // assertion
    await expect($('//*[@content-desc="Please enter a valid email address"]')).toBeDisplayed();
  });

  it('User logs in with registered email', async () => {
    // enter registered email
    await $('//*[contains(@text,"Enter your email")]').clearValue();
    await $('//*[contains(@text,"Enter your email")]').click();
    await $('//*[contains(@text,"Enter your email")]').addValue("hovsqa@gmail.com");

    // click login
    await $('~Log in').click();

    // assertion
    await expect($('//*[@content-desc="Password"]')).toBeDisplayed();
  });

  it('User logs in with invalid password', async () => {
    // input password
    await $('//*[@password="true"]').click();
    await $('//*[@password="true"]').addValue("invalidpassword");

    // click login
    await $('~Log in').click();

    // assertion
    await expect($('//*[@content-desc="The email or password you entered is incorrect."]')).toBeDisplayed();
  });

  it('User logs in with valid password', async () => {
    // input password
    await $('//*[@password="true"]').clearValue();
    await $('//*[@password="true"]').click();
    await $('//*[@password="true"]').addValue("password");

    // click login
    await $('~Log in').click();

    // assertion
    await expect($('~View company mood')).toBeDisplayed();
  });
});