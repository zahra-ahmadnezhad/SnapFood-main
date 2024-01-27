import sib from '.../../../Assets/Images/ImageDatabase/Sib/sib-image.jpeg'
import sibLogo from '.../../../Assets/Images/ImageDatabase/Sib/sib-logo.png'
import sibPiz1 from '.../../../Assets/Images/ImageDatabase/Sib/sib-piz1.jpg'
import sibPiz2 from '.../../../Assets/Images/ImageDatabase/Sib/sib-piz2.jpg'
import sibPiz3 from '.../../../Assets/Images/ImageDatabase/Sib/sib-piz3.jpg'
import sibPiz4 from '.../../../Assets/Images/ImageDatabase/Sib/sib-piz4.jpg'
import sibPiz5 from '.../../../Assets/Images/ImageDatabase/Sib/sib-piz5.jpg'
import sibPiz6 from '.../../../Assets/Images/ImageDatabase/Sib/sib-piz6.jpg'
import sibDri1 from '.../../../Assets/Images/ImageDatabase/Sib/sib-drink1.jpeg'
import sibDri2 from '.../../../Assets/Images/ImageDatabase/Sib/sib-drink2.jpeg'
import sibDri3 from '.../../../Assets/Images/ImageDatabase/Sib/sib-drink3.jpg'
import sibFri1 from '.../../../Assets/Images/ImageDatabase/Sib/sib-fries1.jpg'
import sibFri2 from '.../../../Assets/Images/ImageDatabase/Sib/sib-fries2.jpeg'
import sibFri3 from '.../../../Assets/Images/ImageDatabase/Sib/sib-fries3.jpg'
import sibBur1 from '.../../../Assets/Images/ImageDatabase/Sib/sib-burger1.jpg'
import sibBur2 from '.../../../Assets/Images/ImageDatabase/Sib/sib-burger2.jpg'
import sibBur3 from '.../../../Assets/Images/ImageDatabase/Sib/sib-burger3.jpg'
import sibChi from '.../../../Assets/Images/ImageDatabase/Sib/sib-child.jpg'

import viaLogo from '.../../../Assets/Images/ImageDatabase/Viana/viana-logo.jpeg'
import via from '.../../../Assets/Images/ImageDatabase/Viana/viana-image.jpg'
import viaPiz1 from '.../../../Assets/Images/ImageDatabase/Viana/viana-piz1.jpeg'
import viaPiz2 from '.../../../Assets/Images/ImageDatabase/Viana/viana-piz2.jpeg'
import viaPiz3 from '.../../../Assets/Images/ImageDatabase/Viana/viana-piz3.jpeg'
import viaFri1 from '.../../../Assets/Images/ImageDatabase/Viana/viana-fied1.jpeg'
import viaFri2 from '.../../../Assets/Images/ImageDatabase/Viana/viana-fied2.jpg'
import viaFri3 from '.../../../Assets/Images/ImageDatabase/Viana/viana-fied3.jpg'
import viaDri1 from '.../../../Assets/Images/ImageDatabase/Viana/viana-drink1.jpg'
import viaDri2 from '.../../../Assets/Images/ImageDatabase/Viana/viana-drink2.jpg'
import viaSal1 from '.../../../Assets/Images/ImageDatabase/Viana/viana-salad1.jpeg'
import viaSal2 from '.../../../Assets/Images/ImageDatabase/Viana/viana-salad2.jpeg'
import viaSta1 from '.../../../Assets/Images/ImageDatabase/Viana/viana-stake1.jpeg'
import viaSta2 from '.../../../Assets/Images/ImageDatabase/Viana/viana-stake2.jpeg'
import viaSta3 from '.../../../Assets/Images/ImageDatabase/Viana/viana-stake3.jpeg'
import viaSan1 from '.../../../Assets/Images/ImageDatabase/Viana/viana-sand1.jpeg'
import viaSan2 from '.../../../Assets/Images/ImageDatabase/Viana/viana-sand2.jpeg'
import viaSan3 from '.../../../Assets/Images/ImageDatabase/Viana/viana-sand3.jpeg'














export const MobinData = [
    { id: 16, 
      name: "پیتزا سیب ۳۶۰", 
      star:3.9,
      score:1485,
      address:'چهارراه یافت آباد، بالاتر از بازار مبل ایران ۳، جنب بوستان جوان، پلاک ۶۸۷، پیتزا سیب ۳۶۰ (یافت آباد)',
      delivery:5000,
      logo:sibLogo,
      picture:sib,
      coupon:false,
      discount:true,
      categories: ["پیتزا آمریکایی", "برگر",'نوشیدنی','پیش غدا','غذای کودک','پیتزا ایتالیایی '] ,
      foods:[
          {id:1,category:'پیتزا آمریکایی',name:'  پیتزا میکس (آمریکایی)',images:sibPiz1,price:149000,material:'خمیر پیتزا آمریکایی مثلثی، مرغ گریل شده، گوشت قرمز پروسس، سس مخصوص ،سس بیانز، ژامبون، فلفل دلمه ای، زیتون، قارچ، گوجه، پنیر پیتزای...'},
          {id:2,category:'پیتزا آمریکایی',name:'پیتزا مکزیکو (آمریکایی)',images:sibPiz2,price:147000,material:'خمیر پیتزای آمریکایی مثلثی، مرغ گریل شده تند ، ژامبون مرغ، فلفل هالوپینو، گوجه، فلفل دلمه ای سس مخصوص، پنیر پیتزای مخصوص'},
          {id:3,category:'پیتزا آمریکایی',name:'پیتزا میکس کالزون (آمریکایی)',images:sibPiz3,price:139000,material:'خمیر پیتزای آمریکایی مثلثی، مرغ گریل شده، مخلوط ژامبون مرغ و پپرونی، فلفل دلمه ای، کنجد، سس سیر ایتالیایی، پنیر پیتزای مخصوص '},
          {id:4,category:'پیتزا ایتالیایی',name:'پیتزا چهارفصل (ایتالیایی)',images:sibPiz4,price:172000,material:'چهار پیتزای کنی باله، چیکن گورمه، سبزیجات و پپرونی (به صورت تفکیک شده)، ادویه مخصوص    '},
          {id:5,category:'پیتزا ایتالیایی',name:'پیتزا بیکن (ایتالیایی)',images:sibPiz5,price:172000,material:'خمیر نازک ایتالیایی، سس سیر مخصوص، بیکن، اسفناج، قارچ، پیاز، پنیر پیتزای مخصوص'},
          {id:6,category:'پیتزا ایتالیایی',name:'پیتزا کاپریچیوزا (ایتالیایی)',images:sibPiz6,price:154000,material:'خمیر نازک ایتالیایی، سس مخصوص، ژامبون مرغ ، قارچ، زیتون، گوجه، فلفل دلمه ای، سس بیانز، پنیر پیتزای مخصوص، ادویه مخصوص'},
          {id:7,category:'نوشیدنی',name:'دوغ قوطی خوشگوار',images:sibDri1,price:12845,material:'۳۳۰ میلی لیتر، هی دی'},
          {id:8,category:'نوشیدنی',name:'آب معدنی کوچک',images:sibDri2,price:2981,material:'۰.۵ لیتر '},
          {id:9,category:'نوشیدنی',name:'نوشابه قوطی',images:sibDri3,price:12000,material:'۳۳۰ میلی لیتر'},
          {id:10,category:'پیش غذا',name:'میکس فرایز',images:sibFri1,price:78000,material:'سیب زمینی سوپر فرایز، بیکن، پپرونی، پنیر دیپ چدار، ادویه سیب زمینی'},
          {id:11,category:'پیش غذا',name:'پاپ فرایز',images:sibFri2,price:78000,material:'سیب زمینی سوپر فرایز، چیکن پاپ کورن پنیری، پنیر دیپ چدار، مخلوط کرانچی و ادویه سیب زمینی  '},
          {id:12,category:'پیش غذا',name:'سیب زمینی پنیری ویژه',images:sibFri3,price:62000,material:'۱۸۰ گرم سیب زمینی سرخ کرده، پنیر دیپ چدار'},
          {id:13,category:' برگر',name:'چیکوچی',images:sibBur1,price:96000,material:'شنیسل مرغ ویژه، بیکن، سبزیجات معطر، پنیر چدار، کاهو، گوجه، خیارشور، سس مخصوص، سس سالسا، نان مک'},
          {id:14,category:' برگر',name:'هالوپینو برگر',images:sibBur2,price:114000,material:'گوشت برگر مخصوص، کاهو، گوجه، فلفل هالوپینو، پنیر دیپ چدار، خیارشور، سس مخصوص ، نان مک'},
          {id:15,category:' برگر',name:'ماشروم برگر',images:sibBur3,price:119000,material:'گوشت برگر مخصوص، پنیر پروسس، قارچ، کاهو، گوجه، خیارشور، سس مخصوص ، نان مک'},
          {id:16,category:' غذای کودک',name:'غذای کودک (پسرانه)',images:sibChi,price:162000,material:'خمیر پیتزا آمریکایی مثلثی، مرغ گریل شده، قارچ، گوجه، زیتون،  فلفل دلمه ای، ذرت، سس مخصوص، پنیر پیتزای مخصوص، ۱۲۰ گرم سیب زمینی سرخ...'},
          {id:17,category:' غذای کودک',name:'غذای کودک (دخترانه)',images:sibChi,price:162000,material:'خمیر پیتزا آمریکایی مثلثی، مرغ گریل شده، قارچ، گوجه، زیتون،  فلفل دلمه ای، ذرت، سس مخصوص، پنیر پیتزای مخصوص، ۱۲۰ گرم سیب زمینی سرخ...'},

        ]
      },
      { id: 17, 
        name: "فست فود ویانا", 
        star:4.2,
        score:8963,
        address:'یافت آباد، بلوار معلم، میدان معلم، خیابان تختی، نبش کوچه توحید، پلاک ۱۱/۲ و ۱۱/۳، فست فود ویانا',
        delivery:6000,
        logo:viaLogo,
        picture:via,
        coupon:true,
        discount:true,
        categories: ["پیتزا", "سوخاری",'نوشیدنی',' سالاد','ساندویچ',' منوی پرسی'] ,
        foods:[
            {id:1,category:'پیتزا',name:'پیتزا کالزونه ',images:viaPiz1 ,price:129000,material:'سس گوجه فرنگی، سس مخصوص، ژامبون گوشت و مرغ ۷۰%، قارچ، پنیر گودا، پنیر پیتزا '},
            {id:2,category:'پیتزا',name:'پیتزا سیر و استیک',images:viaPiz2,price:169000,material:'خمیر پیتزا کلاسیک ایرانی، گوشت راسته گوساله تکه ای، پنیر پیتزا، روغن زیتون، سیر تازه، سس ویانا'},
            {id:3,category:'پیتزا',name:'پیتزا میکس',images:viaPiz3,price:119000,material:'خمیر پیتزا کلاسیک ایرانی، سس گوجه فرنگی، مخلوط گوشت گوساله و گوسفندی چرخ شده، ژامبون گوشت و مرغ ۷۰%، سوسیس دودی، پنیر پیتزا، قارچ،...'},
            {id:4,category:'سوخاری',name:'سبد سوخاری خانواده نرمال  ',images:viaFri1,price:399000,material:'۴ تکه ران مرغ سوخاری، ۴ تکه فیله مرغ سوخاری، ۴ تکه بال سوخاری، ۲ پرس سیب زمینی سرخ شده، قارچ سوخاری، ۴ عدد نان بروتچن، ۳ عدد سالاد...'},
            {id:5,category:'سوخاری',name:'فیله استریپس (دو تکه)',images:viaFri2,price:109000,material:'۲ عدد فیله مرغ سوخاری، سیب زمینی سرخ شده، سالاد کلم، یک عدد نان بروتچن، یه همراه یک عدد سس کچاپ یک نفره'},
            {id:6,category:'سوخاری',name:'مرغ سوخاری نرمال (دو تکه)',images:viaFri3,price:116000,material:'۲ تکه مرغ سوخاری، سیب زمینی سرخ شده، سالاد کلم، یک عدد نان بروتچن، یه همراه یک عدد سس کچاپ یک نفره'},
            {id:7,category:'نوشیدنی',name:'نوشابه قوطی',images:sibDri3,price:12000,material:'۳۳۰ میلی لیتر'},
            {id:8,category:'نوشیدنی',name:'ماءالشعیر خانواده ایستک ',images:viaDri1,price:16000,material:'یک لیتر'},
            {id:9,category:'نوشیدنی',name:'دوغ لیوانی خوشگوار ',images:viaDri2,price:7000,material:'۳۰۰ میلی لیتر '},
            {id:10,category:'سالاد',name:'سالاد کلم ',images:viaSal1,price:34000,material:'کلم سفید، هویج، سس مخصوص، (یک نفره)'},
            {id:11,category:'سالاد',name:'سالاد سزار',images:viaSal2,price:74000,material:''},
            {id:12,category:'منوی پرسی',name:'بشقاب استیک گوشت',images:viaSta1,price:185000,material:'۲ عدد راسته گوساله کبابی، یک عدد کوکو سیب زمینی، سس قارچ، هویج، بروکلی، یک عدد نان بروتچن'},
            {id:13,category:'منوی پرسی',name:'پاستا آلفردو',images:viaSta3,price:185000,material:'پاستا پنه، سس آلفردو، سینه مرغ گریل شده، قارچ، پنیر پارمسان '},
            {id:14,category:'منوی پرسی',name:'بشقاب گریل چیکن',images:viaSta2,price:144000,material:'۲ عدد سینه مرغ کبابی، یک عدد کوکو سیب زمینی، سس قارچ، هویج، بروکلی، یک عدد نان بروتچن'},
            {id:15,category:'ساندویچ',name:'ساندویچ استیک',images:viaSan1,price:115000,material:'۳.۴ ۱۰۰ گرم گوشت راسته گوساله تکه ای، قارچ، پنیر پیتزا، کاهو، گوجه، خیار شور، سس مخصوص، نان باگت، به همراه ۲ عدد سس کچاپ'},
            {id:16,category:' ساندویچ',name:'ساندویچ اسپشیال',images:viaSan2,price:102000,material:'راسته گوساله، سینه مرغ تنوری، پنیر پیتزا، قارچ، کاهو، خیارشور، گوجه، سس مخصوص، نان باگت، به همراه ۲ عدد سس کچاپ'},
            {id:17,category:' ساندویچ',name:'ساندویچ فیله تنوری',images:viaSan3,price:114000,material:'سه عدد فیله مرغ گریل، ۲ ورق پنیر گودا، کاهو، خیارشور، سس مخصوص، نان باگت، به همراه ۲ عدد سس کچاپ'},
]}
  ];  
