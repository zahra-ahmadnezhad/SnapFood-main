import {Grid, IconButton, Typography, Divider, Button, TextField} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Image from "next/image";
import DeliveryTime from "../../../Assets/Icons/DeliveryTime.svg";
import CartDownArrow from "../../../Assets/Icons/CartDownArrow.svg";
import Deliveryman from '../../../Assets/Icons/Deliveryman.svg';
import Delete from "../../../Assets/Icons/Delete.svg";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import add from '../../Assets/Icons/add.svg'
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {handleTotalExpense} from "../../../utils/handleTotalExpense";
import {deleteAll, decreaseItem, deleteItem, increaseItem} from "../../../Redux/slice/cartSlice";


const Cart = () => {
    const cart = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()
    const totalExpense = useMemo(() => handleTotalExpense(cart), [cart])


    return (
        <Grid display={'flex'} flexDirection={'column'}
              gap={1}
              p={2}
              item
              xs={12}
              md={3}>
            {/*<Grid*/}
            {/*    display={'flex'}*/}
            {/*    alignItems='center'*/}
            {/*    justifyContent={'space-between'}*/}
            {/*    sx={{*/}
            {/*        height: '50px',*/}
            {/*        bgcolor: 'white',*/}
            {/*        borderRadius: '0.5rem',*/}
            {/*        px: 1*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Grid display={'flex'}>*/}
            {/*        <Image src={DeliveryTime} alt=''/>*/}
            {/*        <Typography variant="subtitle1" sx={{pr: '5px'}}>دریافت در سریع‌ترین زمان ممکن</Typography>*/}
            {/*    </Grid>*/}
            {/*    <Grid>*/}
            {/*        <Image src={CartDownArrow} alt=''/>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}

            <Grid
                display={'flex'}
                alignItems='center'
                justifyContent={'space-between'}
                sx={{
                    height: '50px',
                    bgcolor: 'white',
                    borderRadius: '0.5rem',
                    px: 1
                }}
            >
                <Grid display={'flex'} alignItems={'center'}>
                    <Image src={Deliveryman} alt=''/>
                    <Typography variant="subtitle1" sx={{pr: '5px'}}>پیک فروشنده رایگان</Typography>
                </Grid>
            </Grid>
            <Grid
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                gap={1.5}
                sx={{
                    height: 'auto',
                    borderRadius: '0.5rem',
                    py: 1,
                    px: 1.5
                }}
            >
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{width: '100%'}}>
                    <Typography variant="subtitle1">سبد خرید</Typography>
                    <IconButton onClick={() => dispatch(deleteAll('deleteAll'))}>
                        <DeleteOutlineOutlinedIcon sx={{color: '#FA284B'}} fontSize={'small'}/>
                    </IconButton>
                </Grid>
                <Grid>
                    {cart.map((item: any,index:any) => (
                        <Grid key={index} display={'flex'} flexDirection={'column'} gap={1.5} sx={{width: '100%'}}>
                            <Typography variant="subtitle1">{item.name}</Typography>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant="subtitle1">{item.price}تومان</Typography>
                                <Grid display={'flex'} alignItems={'center'} gap={2}>
                                    {item.count === 1 ?
                                        <IconButton onClick={() => dispatch(deleteItem(item.name))} sx={{
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 50
                                        }}>
                                            <DeleteOutlineOutlinedIcon fontSize={'small'}/>
                                        </IconButton>
                                        :
                                        <IconButton onClick={() => dispatch(decreaseItem(item.name))} sx={{
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            border: '0.09375rem solid rgba(255, 0, 166, 0.06)',
                                            borderRadius: 50,
                                            color: '#FF00A6'
                                        }}>
                                            <RemoveRoundedIcon fontSize={'small'}/>
                                        </IconButton>
                                    }
                                    <Typography variant="subtitle1">{item.count}</Typography>
                                    <IconButton onClick={() => dispatch(increaseItem(item.name))} sx={{
                                        width: '24px',
                                        height: '24px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '0.09375rem solid rgba(255, 0, 166, 0.06)',
                                        borderRadius: 50,
                                        color: '#FF00A6'
                                    }}>
                                        <AddRoundedIcon fontSize={'small'}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Divider sx={{color: 'black', width: '100%'}}/>
                <Grid display={'flex'} flexDirection={'column'} gap={1} sx={{width: '100%'}}>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="subtitle1">مجموع</Typography>
                        <Typography variant="subtitle1">{totalExpense}تومان</Typography>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="subtitle1">مالیات</Typography>
                        <Typography variant="subtitle1">رایگان</Typography>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="subtitle1">هزینه ارسال</Typography>
                        <Typography variant="subtitle1">رایگان</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{color: 'black', width: '100%'}}/>
                <Grid display={'flex'} justifyContent={'space-between'} sx={{width: '100%'}}>
                    <Typography variant="subtitle1"> قابل پرداخت</Typography>
                    <Typography variant="subtitle1">{totalExpense}تومان</Typography>
                </Grid>
                <Grid>
                    <TextField rows={6} multiline fullWidth placeholder="توضیحات سفارش..."/>
                </Grid>
                {/*<TextareaAutosize placeholder="توضیحات سفارش..." style={{*/}
                {/*    backgroundColor: 'white',*/}
                {/*    color: 'black',*/}
                {/*    minWidth: '95%',*/}
                {/*    maxWidth: '95%',*/}
                {/*    minHeight: '7rem',*/}
                {/*    marginTop: 12*/}
                {/*}}/>*/}
                <Button sx={{my: 2}}><Typography>ثبت سفارش</Typography></Button>
            </Grid>
        </Grid>

    )

}

export default Cart