import Club from '../../Assets/Svgs/ProfileMobileSvg/club.svg'
import wallet from '../../Assets/Svgs/ProfileMobileSvg/wallet.svg'
import ap from '../../Assets/Svgs/ProfileMobileSvg/ap.svg'
import prize from '../../Assets/Svgs/ProfileMobileSvg/prize.svg'
import invite from '../../Assets/Svgs/ProfileMobileSvg/invite.svg'
import massage from '../../Assets/Svgs/ProfileMobileSvg/massage.svg'
import coment from '../../Assets/Svgs/ProfileMobileSvg/coment.svg'
import favourit from '../../Assets/Svgs/ProfileMobileSvg/favourit.svg'
import list from '../../Assets/Svgs/ProfileMobileSvg/list.svg'
import exit from '../../Assets/Svgs/ProfileMobileSvg/exit.svg'
import { ReactNode } from "react";
import { StaticImageData } from 'next/image'

export interface ProfileMobileTypes{
    id:number,
    icon:StaticImageData,
    title:string
}
export const ProfileMobileData:ProfileMobileTypes[]=[
    {id:1,icon:Club,title:'اسنپ! کلاب'},
    {id:2,icon:wallet,title:'کیف پول آپ'},
    {id:3,icon:ap,title:'فعال سازی پرداخت مستقیم آپ'},
    {id:4,icon:prize,title:'تخفیف ها و جایزه ها'},
    {id:5,icon:invite,title:'دعوت از دوستان'},
    {id:6,icon:massage,title:'پیام ها'},
    {id:7,icon:coment,title:'نظرات من'},
    {id:8,icon:favourit,title:'رستوران های مورد علاقه'},
    {id:9,icon:list,title:'لیست پرداخت ها'},
    {id:10,icon:exit,title:'خروج'},
]