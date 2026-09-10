import{Page} from '@playwright/test'
import{ New} from '../myname2/newclass_create'
import { New1 } from '../myname2/new_calss2'


 export class Export1{

private page:Page
readonly new:New
readonly new1:New1
constructor(page:Page){
    this.page= page

    this.new= new New(this.page)
this.new1=new New1(this.page)

}

 }