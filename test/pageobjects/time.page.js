const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TimePage extends Page {
    /**
     * define selectors using getter methods
     */
    get viewTimeModule () {
        return $('a[href="/web/index.php/time/viewTimeModule"]');
    }

    get inputEmpName () {
        return $('.oxd-autocomplete-text-input > input[placeholder="Type for hints..."]');
    }

    get btnSubmit () {
        return $('[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async view (employee) {
        await this.viewTimeModule.click();
        await this.inputEmpName.setValue(employee);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new TimePage();
