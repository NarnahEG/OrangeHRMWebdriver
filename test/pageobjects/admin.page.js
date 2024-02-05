const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddAdminPage extends Page {
    get admin () {
        return $('a[href="/web/index.php/admin/viewAdminModule"]');
    }

    get add () {
        return $('.orangehrm-header-container .oxd-button--secondary');
    }

    get userRole () {
        return $('.oxd-form > div:nth-child(1)');
    }

    // get role () {
    //     return $('option[value="Admin"]');
    // }
    
    get hint () {
        return $('.oxd-autocomplete-text-input > input[placeholder="Type for hints..."]');
    }
    
    get status () {
        return $('.oxd-form .oxd-grid-item--gutters:nth-of-type(3) [tabindex]');
    }

    get enabled () {
        return $('option[value="Enabled"]');
    }
    
    get username () {
        return $('.oxd-input.oxd-input--error');
    }

    get pwd () {
        return $('.user-password-cell [type]');
    }

    get confpwd () {
        return $('.oxd-grid-item--gutters:nth-of-type(2) [type]');
    }


    get btnSave () {
        return $('.oxd-button--secondary');
    }
 
    async create (role, empname,stats,user,pwd,confpwd) {
        await this.admin.click();
        await this.add.click({force:true});
        await this.userRole.click().setValue(role);
        //await this.role.click;
        await this.hint.setValue(empname);
        //await this.status.selectByAttribute('value', 'Enabled');
        //await this.enabled.click();
        await this.username.setValue(user);
        await this.pwd.setValue(pwd);
        await this.confpwd.setValue(confpwd);
        await this.btnSave.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new AddAdminPage();
