import Cart from "./Cart/Cart";
import CommentDes from "./Comment/CommentDes";
import Comment from "./Comment/Comment";
import Rec from "./rectangular/Rec";
import SectionPopular from "./SectionPopular/SectionPopular";
interface MarketSectionType {
  market:{}
}

const MarketSection=({market}:MarketSectionType)=>{
  console.log(market)

  return(
     <>
          <Rec/>
           <SectionPopular  market={market}/>
           <Cart />
           <Comment/>
          <CommentDes/>
     </>
  )
}
export default MarketSection;