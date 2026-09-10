import{Page} from "@playwright/test"
import{alm} from "../pagemanger_ravi_singletimeitmeans/alm_object"

import{Yum} from "../pagemanger_ravi_singletimeitmeans/yum"

export class pppppmanager1{
    private page:Page
    readonly alm:alm
    readonly Yum:Yum
    
    constructor(page:Page){
        this.page=page
        this.alm=new alm(this.page)
        this.Yum=new Yum(this.page)
    }



}