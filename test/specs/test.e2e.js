const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const AddEmployeePage = require('../pageobjects/employee.page')
const employeePage = require('../pageobjects/employee.page')
//const SecurePage = require('../pageobjects/secure.page')

describe('My OrangeHRM Application', () => {
    it('Login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin123')
        expect(browser).toHaveValue('dashboard');
    })

    it('Create Employee', async () => {
        await AddEmployeePage.open()
        await AddEmployeePage.create('Jane', 'Aisha', 'Ashley')
    })
})

