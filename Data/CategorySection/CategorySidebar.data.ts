import { StaticImageData } from "next/image"
import pizza from "../../Assets/Images/HomeImages/CategoryImages/pizza.jpg";
import burger from "../../Assets/Images/HomeImages/CategoryImages/berger.jpg";
import sandwitch from "../../Assets/Images/HomeImages/CategoryImages/sandwitch.jpg";
import fried from "../../Assets/Images/HomeImages/CategoryImages/sokhary.jpg";
import salad from "../../Assets/Images/HomeImages/CategoryImages/salad.jpg";
import pasta from "../../Assets/Images/HomeImages/CategoryImages/pasta.jpg";

export interface CategorySidebarType{
    id:number
    title:string,
    image:StaticImageData
}


export const CategorySidebarData:CategorySidebarType[]=[
    {id:1 , image:pizza , title:"پیتزا"},
    {id:2 , image:burger , title:"برگر"},
    {id:3 , image:sandwitch , title:"ساندویچ"},
    {id:4 , image:fried , title:"سوخاری"},
    {id:5 , image:pasta , title:"پاستا"},
    {id:6 , image:salad , title:"سالاد"}
]