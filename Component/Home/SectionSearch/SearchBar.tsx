import Grid from "@mui/material/Grid";
import StorefrontIcon from '@mui/icons-material/Storefront';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import NavbarSearch from "./NavbarSearch";
import HeaderSearch from "./HeaderSearch";
import ProductDetailCardSearch from "./ProductDetailCardSearch";
import {useMemo, useState} from "react";
import {StyledTextField} from "../../../Styled/StyledTextField";
import {IconButton} from "@mui/material";
import {MainData} from "../../../Data/Main/MainData";

const SearchBar = () => {
    // const theme = useTheme()
    const [valueSearch, setValueSearch] = useState('')
    const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value)
    }

    const filterMarket = useMemo(() => MainData.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase())), [valueSearch])
    const filterFood = useMemo(() => MainData.map((item: any) => item.foods.filter((food: any) => food.name.toLowerCase().includes(valueSearch.toLowerCase()))), [valueSearch])

    return (
        <Grid display={'flex'} justifyContent={'center'}>
            <Grid position={'relative'} mt={2} width={{xs: '90%', sm: '45vw', md: '29vw'}}>
                <StyledTextField
                    onChange={handleInputSearch}
                    value={valueSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={'start'}>
                                {valueSearch.length === 0 ?
                                    <SearchIcon sx={{color: 'black'}}/> :
                                    <IconButton onClick={() => (setValueSearch(''))}>
                                        <HighlightOffIcon sx={{color: 'black'}}/>
                                    </IconButton>
                                }
                            </InputAdornment>
                        ),
                    }}/>
            </Grid>
            {(() => {
                if (valueSearch === '') {
                    return (
                        <Grid display={{xs: 'none', sm: 'flex'}} width={{xs: '90%', sm: '45vw', md: '29vw'}} p={2}
                              borderRadius={2} position={'absolute'} bgcolor={'white'}
                              top={{xs: '20%', sm: '12%', md: '11%'}}>
                            <Typography variant="subtitle1" color={'rgb(83, 86, 92)'}>عبارت مورد نظر خود را وارد
                                کنید</Typography>
                        </Grid>
                    )

                } else if (valueSearch.length <= 2) {
                    return (
                        <Grid display={{xs: 'none', sm: 'flex'}} width={{xs: '90%', sm: '45vw', md: '29vw'}}
                              position={'absolute'} bgcolor={'white'} top={{xs: '20%', sm: '12%', md: '11%'}} p={2}
                              borderRadius={2}>
                            <Typography ml={0.5} variant="subtitle2" fontWeight={300}
                                        fontSize={'0.87rem'}>جستجوی</Typography>
                            <Typography variant="subtitle2" fontSize={'0.87rem'}>{valueSearch.valueOf()}</Typography>
                        </Grid>
                    )
                } else {
                    return (
                        <Grid sx={{bgcolor: 'background.paper', boxShadow: 2, borderRadius: 2}}
                              top={{xs: '20%', sm: '12%', md: '11%'}} width={{xs: '95%', sm: '45vw', md: '29vw'}}
                              position={'absolute'}>
                            {/*<HeaderSearch/>*/}
                            <Divider/>
                            <Grid display={'flex'} flexDirection={'column'} p={2}>
                                <NavbarSearch num={filterMarket.length ?? 0} title={'فروشگاه‌ها'}/>
                                {filterMarket.map((FM,index) => (
                                    <Grid key={index} display={'flex'} alignItems={'center'} height={60}>
                                        <StorefrontIcon fontSize="small"/>
                                        <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'}
                                                    color={'rgb(58, 61, 66)'}>{FM.name}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider/>
                            <Grid display={'flex'} flexDirection={'column'} p={2}>
                                <NavbarSearch num={filterFood.length ?? 0}
                                              title={'محصولات'}/>
                                {filterFood.map(market => market.map((food: any,index:any) => (
                                    <ProductDetailCardSearch key={index} food={food} market={market}/>
                                )))}
                            </Grid>
                        </Grid>
                    )
                }
            })()}

        </Grid>
    )
}

export default SearchBar;

