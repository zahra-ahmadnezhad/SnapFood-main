import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
interface LayoutPropsType{
    children:ReactNode
}
const Layout = ({children}:LayoutPropsType) => {
    return ( 
        <>
        <Header/>
        {children}
        <Footer/>
        </>
        
     );
}
 
export default Layout;