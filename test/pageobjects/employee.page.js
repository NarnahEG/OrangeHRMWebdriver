const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddEmployeePage extends Page {
    get pim () {
        return $('a[href="/web/index.php/pim/viewPimModule"]');
    }

    get add () {
        //return $('[type="button"]');
        return $('.orangehrm-header-container > .oxd-button');
    }

    get fname () {
        //return $('.oxd-input.oxd-input--active.orangehrm-firstname'); 
        return $('input[name="firstName"]');
    }
    
    get mname () {
        return $('//input[@placeholder="Middle Name"]');
    }

    get lname () {
        return $('//input[@placeholder="Last Name"]');
    }

    get btnSave () {
        return $('.oxd-form-actions > .oxd-button');
        //button[@type="submit"]');
    }
 
    async create (firstname,middlename,lastname, id) {
        await this.pim.click();
        await this.add.click({force:true});
        await this.fname.setValue(firstname);
        await this.mname.setValue(middlename);
        await this.lname.setValue(lastname);
        await this.btnSave.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new AddEmployeePage();
