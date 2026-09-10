import { test } from '@playwright/test'
import { hrm_url,username,password }  from '../../docs/resource/orange_hrm'
import { loginpage1 }  from '../OrangeHrm/login_page'
import{Adminpage} from '../OrangeHrm/admin_page'
import{PageManager} from '../Pagemenger1'
//test.describe("orange",()=>{
//test("login feature",async({page})=>{
  //  const ab= new loginpage1(page)
//await ab.navigatetologinpage(hrm_url)
  //  await ab.Login(username,password)
//const cd= new Adminpage(page)
//await cd.navigatetoadminpage()

//})
test("login pageof",async({page})=>{
    const nm=new PageManager(page)
    await  nm.loginpage1.navigatetologinpage(hrm_url)
    await  nm.loginpage1.Login(username,password)
    await nm.Adminpage.navigatetoadminpage()
})
