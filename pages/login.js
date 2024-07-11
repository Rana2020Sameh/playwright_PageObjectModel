exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.getByLabel('Username')
        this.passWord = page.getByLabel('Password')
        this.loginButton=page.getByRole('button', { name: 'Login' })
    }


    async gottoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.userName.fill(username)
        await this.passWord.fill(password)
        await this.loginButton.click();
    }

}