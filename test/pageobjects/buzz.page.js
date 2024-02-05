const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BuzzPage extends Page {
    /**
     * define selectors using getter methods
     */
    get viewBuzz () {
        return $('a[href="/web/index.php/buzz/viewBuzz"]');
    }

    get inputComment () {
        return $('.oxd-buzz-post > .oxd-buzz-post-input');
    }

    get btnSubmit () {
        return $('.oxd-button--main');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async post (Comment) {
        await this.viewBuzz.click();
        await this.inputComment.setValue(Comment);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new BuzzPage();
