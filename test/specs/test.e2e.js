const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const AddEmployeePage = require('../pageobjects/employee.page')
//const AddAdminPage = require('../pageobjects/admin.page')
//const SecurePage = require('../pageobjects/secure.page')
const BuzzPage = require('../pageobjects/buzz.page')
const TimePage = require('../pageobjects/time.page')
const LogoutPage = require('../pageobjects/logout.page')
const SearchPage = require('../pageobjects/search.page')

describe('My OrangeHRM Application', () => {
    it('Login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin123')
        expect(browser).toHaveValue('dashboard');
    })

    // it('Create Employee', async () => {
    //     await AddEmployeePage.open()
    //     await AddEmployeePage.create('Jane', 'Aisha', 'Ashley')
    // })

    // it('Add Admin', async () => {
    //     await AddAdminPage.open()
    //     await AddAdminPage.create('Admin','Jadine  Jackie', 'Enabled', 'Hiya', 'Jane2012!', 'Jane2012!');
    // })

    // it('Post a comment', async () => {
    //     await BuzzPage.open()
    //     await BuzzPage.post('Hi, I am new here')
    //     //expect(browser).toHaveValue('dashboard');
    // })

    it('Timesheet', async () => {
        await TimePage.open()
        await TimePage.view('Aliyah Haq')
        expect(browser).toHaveValue('Aliyah Haq');
    })

    it('Search', async () => {
        await SearchPage.open()
        await SearchPage.search('Admin')
        expect(browser).toHaveValue('Admin');
    })

    it('Logout', async () => {
        //await LogoutPage.open()
        await LogoutPage.logout()
        expect(browser).toHaveElementClass('.oxd-text oxd-text--h5 orangehrm-login-title')
    })
})

