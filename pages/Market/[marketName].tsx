import {Grid} from "@mui/material"
import {GetStaticPropsContext} from "next"
import SectionPopular from "../../Component/Market/SectionPopular/SectionPopular"
// import Rec from "../../Component/Market/rectangular/Rec"
import Cart from "../../Component/Market/Cart/Cart"
import {getFoodMarket} from "../../API/getFoodMarket"
import {MainData} from "../../Data/Main/MainData"
import Comment from "../../Component/Market/Comment/Comment"
// import CommentDes from "../../Component/Market/Comment/CommentDes"
// import MarketSection from "../../Component/Market/MarketSection"

interface MarketNameProps {
    market: any[]
}


const MarketName = ({market}: MarketNameProps) => {
    return (

        <Grid display={'flex'} pt={10} container sx={{backgroundColor:'#F9FAFB'}}>
             {/*<Rec/>*/}
            <Comment market={market[0]}/>
            {/*<CommentDes/>*/}
            <SectionPopular market={market}/>
            <Cart/>
        </Grid>

    )

}

export async function getStaticProps(context: GetStaticPropsContext) {
    const market = await getFoodMarket(context?.params?.marketName ?? [])
    return {
        props: {
            market
        },
    }
}


export async function getStaticPaths() {
    return {
        paths: MainData.map(item => ({params: {marketName: item.name}})),
        fallback: 'blocking',
    }
}

export default MarketName;