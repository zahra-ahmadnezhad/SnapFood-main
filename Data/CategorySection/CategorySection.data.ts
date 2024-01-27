import pizza from "../../Assets/Images/HomeImages/CategoryImages/pizza.jpg";
import berger from "../../Assets/Images/HomeImages/CategoryImages/berger.jpg";
import sandwitch from "../../Assets/Images/HomeImages/CategoryImages/sandwitch.jpg";
import sokhary from "../../Assets/Images/HomeImages/CategoryImages/sokhary.jpg";
import salad from "../../Assets/Images/HomeImages/CategoryImages/salad.jpg";
import pasta from "../../Assets/Images/HomeImages/CategoryImages/pasta.jpg";


import { StaticImageData } from "next/image";

export interface CategoryTypes {
    id: number;
    pic: StaticImageData;
    title: string;
  }

export  const categorydata: CategoryTypes[] = [
    { id: 1, pic: pizza, title: "پیتزا" },
    { id: 2, pic: berger, title: "برگر" },
    { id: 3, pic: sandwitch, title: "ساندویچ" },
    { id: 4, pic: sokhary, title: "سوخاری" },
    { id: 5, pic: pasta, title: "پاستا" },
    { id: 6, pic: salad, title: "سالاد" },
  ];