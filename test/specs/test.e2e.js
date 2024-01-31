const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
//const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('Admin', 'admin123')
        expect(browser).toHaveValue('dashboard');
    })
})

