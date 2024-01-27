import { ReactNode } from "react"

interface FooterItemsType{
    id:number
    title:string,
}
interface FooterSocialsType{
    id:number,
    icon:ReactNode
}

export const footerItems1:FooterItemsType[]=[
    {id:1,title:'درباره اسنپ فود'},
    {id:2,title:'همکاری با ما'},
    {id:3,title:'وبلاگ'},
    {id:4,title:'قوانین سایت'},
    {id:5,title:'حریم خصوصی '},
    {id:6,title:'ثبت نام فروشندگان'},
]
export const footerItems2:FooterItemsType[]=[
    {id:1,title:'  تماس با اسنپ فود'},
    {id:2,title:'پرسش های متداول '},
    {id:3,title:'ثبت شکایات'},
    {id:4,title:' اپلیکشن موبایل'},

]