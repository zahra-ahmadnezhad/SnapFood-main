import { MainData } from "../Data/Main/MainData"

export const getFoodMarket = (market: string | string[]) => {
    return new Promise((resolve, reject)=>{
        resolve(MainData.filter(rest => rest.name === market))
    })
}