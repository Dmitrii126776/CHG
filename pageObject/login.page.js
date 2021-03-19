import Page from "./page";

class LoginPage extends Page {
    get userNameInput() {
        return $('#user-name')
    };

    get passwordInput() {
        return $('#password')
    };

    get loginBtn() {
        return $('#login-button')
    };

    get logo() {
        return $('.app_logo')
    };

    get errorMessage() {
        return $('h3')
    };

    fillCredentials(user) {
        this.userNameInput.setValue(user.username);
        this.passwordInput.setValue(user.password);
    }

    loginBtnClick() {
        if (this.loginBtn.isClickable()) {
            this.loginBtn.click();
        }
    }

    getMessage() {
        return this.errorMessage.getText();
    }

    open() {
        return super.open('/');
    }
}

export default new LoginPage();
