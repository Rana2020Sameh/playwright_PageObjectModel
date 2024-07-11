import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/login'

test('Login Test',async({page})=>{
const Login=new LoginPage(page)
await Login.gottoLoginPage()
await Login.login('tomsmith','SuperSecretPassword!')
})