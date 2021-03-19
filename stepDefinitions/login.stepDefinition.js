import {Given, When, Then} from 'cucumber';
import loginPage from "../pageObject/login.page";
import {standardUser, lockedOutUser, urlPage, errorMessage} from "../data/data";

Given(/^I am on the Sauce Demo Login Page$/, function () {
    loginPage.open();
});

When(/^I fill the account information for account StandardUser into the Username field and the Password field$/, function () {
    loginPage.fillCredentials(standardUser);
});

When(/^I click the Login Button$/, function () {
    loginPage.loginBtnClick();
});

Then(/^I am redirected to the Sauce Demo Main Page$/, function () {
    expect(browser).toHaveUrl(urlPage.urlMainPage);
});

Then(/^I verify the App Logo exists$/, function () {
    expect(loginPage.logo).toBeExisting();
});

When(/^I fill the account information for account LockedOutUser into the Username field and the Password field$/, function () {
    loginPage.fillCredentials(lockedOutUser);
});

Then(/^I verify the Error Message contains the text `Sorry, this user has been banned\.`$/, function () {
    expect(loginPage.getMessage()).toContain(errorMessage.errorMessageText);
});
