import { Page } from '@playwright/test'

import{ Orange } from  './0pm_orange'
import{ Teja } from './teja_object'

export class PageManager{
    private page:Page
    readonly Orange:Orange
    readonly Teja:Teja


    constructor(page:Page){
        this.page=page
        this.Orange=new Orange(this.page)
        this.Teja=new Teja(this.page)
    }
}