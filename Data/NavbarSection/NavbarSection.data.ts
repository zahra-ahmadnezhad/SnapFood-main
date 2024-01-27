import { StaticImageData } from "next/image"
import bakery from "../../Assets/Images/navbar/bakery.png"
import cafe from "../../Assets/Images/navbar/cafe.png"
import fruit from "../../Assets/Images/navbar/fruit.png"
import icecream from "../../Assets/Images/navbar/icecream.png"
import meat from "../../Assets/Images/navbar/meat.png"
import nut from "../../Assets/Images/navbar/nut.png"
import restoren from "../../Assets/Images/navbar/restoren.png"
import sweet from "../../Assets/Images/navbar/sweet.png"

export interface NavbarSectionType{
    id:number
    title:string,
    image:StaticImageData | string,
    href:string
}



export const NavbarSectionItem:NavbarSectionType[]=[
    {id:1 ,href:'resturant', image:restoren , title:"رستوران "},
    {id:2 ,href:'cafe', image:cafe , title:"کافه "},
    {id:3 ,href:'confectionery', image:sweet , title:"شیرینی  "},
    {id:4 ,href:'bakery', image:bakery , title:"نانوا "},
    {id:5 ,href:'fruit', image:fruit , title:"میوه "},
    {id:6 ,href:'protein', image:meat , title:"پروتئین "},
    {id:7 ,href:'juice', image:icecream , title:"بستنی "},
    {id:8 ,href:'nuts', image:nut , title:"آجیل "},

]


