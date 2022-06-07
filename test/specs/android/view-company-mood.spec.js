//const customCommands = require("../../screenobject/android/commands");
import customCommands from '../../screenobject/android/commands';

describe('View Company Mood Feature', () => {
  it('User clicks “+” icon in mood tracker feed', async () => {
    // Given user is on mood tracker feed
    await customCommands.userLogin();

    // click login
    await $('~View company mood').click();

    // When user clicks "follow" icon
    await $('//android.view.View[@index="5"]').click();

    //  Then "Follow People" screen should appear
    await expect($('~Follow People')).toExist();
  });

  it('User views followed member first in the list', async () => {
    //  Then followed member should be first in the list to show
    await expect($('//android.widget.Button[@content-desc="￼ Following"]')).toExist();
  });

  it('User follows other member', async () => {
    //  When user clicks “Follow” button in members name
    await $('(//android.widget.Button[@content-desc="Follow"])[1]').click();

    // Then Following should be displayed
    await expect($('(//android.widget.Button[@content-desc="￼ Following"])').toEqual(2));
  });

  it('User unfollows other member', async () => {
    //  user clicked following
    await $('(//android.widget.Button[@content-desc="￼ Following"])[1]').click();

    // Then user should be able to unfollow people.
    await expect($('(//android.widget.Button[@content-desc="￼ Following"])').toEqual(4));
  });

  it('User search people', async () => {
    //  When user enters the name he/she wants to follow in "search" bar
    await $('//android.widget.ImageView[@text="Search"]').click();
    await $('//android.widget.ImageView[@text="Search"]').addValue("Angelica");

    //
    await driver.back();

    // Then the person should appear appear below
    //await expect($('//android.view.View[@content-desc="A Abraham LINKcon HR"]')).toHaveTextContaining("Abraham LINKcon");
  });
})