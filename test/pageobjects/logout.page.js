const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hamburg () {
        return $('.oxd-userdropdown-tab');
    }

    get selLogout () {
        return $('a[href="/web/index.php/auth/logout"]');
    }

    get btnSubmit () {
        return $('[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout () {
        await this.hamburg.click();
        await this.selLogout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LogoutPage();
