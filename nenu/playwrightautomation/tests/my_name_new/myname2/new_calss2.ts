import{Page, test} from '@playwright/test'
 export class New1{

private page:Page
constructor(page:Page){
this.page=page
}

async Amazonportal(){

    await this.page.goto("https://www.primevideo.com/offers/nonprimehomepage/ref_=nav_dvm_crs_in_s_gw_bt_dk_p_hamburgr?ref_=avod_desktop_topnav")
        await this.page.locator("//a[text()='Prime Video']").click()
        //await this.page.locator("//span[text()='Dummy ticket for visa application – $200 ']/preceding-sibling::input[@value='radio_123']").check()
    
}



 }