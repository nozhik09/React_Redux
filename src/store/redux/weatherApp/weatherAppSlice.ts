import {createAppSlice} from "../../createAppSlice";
import type {WeatherAppData, WeatherAppSliceState} from "./types";


const APP_ID = '9de57e16f9a4550e44e9fe4f405218a7'

const initialState:WeatherAppSliceState = {
    data: null ,
    status: 'default',
    error: undefined


}


export const weatherAppSlice = createAppSlice({
    name:'WEATHER_APP',
    initialState,
    reducers: create => ({



        fetchWeather: create.asyncThunk(async (citeName:string, thunkApi) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citeName}&appid=${APP_ID}`)
            const result = await response.json()
            if (!response.ok){
                thunkApi.rejectWithValue(result)
            }else {
                return result
            }

        }, {
            pending:(state:WeatherAppSliceState)=>{
                state.status='loading'
                state.error=undefined
            },
            fulfilled:(state:WeatherAppSliceState ,action:any) =>{
                state.status='success'
                state.data= {
                    temperature: action.payload.main.temp,
                    names: action.payload.name,
                    countries:action.payload.sys.country,
                    timezones:action.payload.timezone
                }
            },
            rejected:(state:WeatherAppSliceState,action:any)=>{
                state.status='error'
                state.error=action.payload
            }
        })

    }),selectors:{
        weatherAppData:(state: WeatherAppSliceState)=> state

    }


})

export const {fetchWeather}= weatherAppSlice.actions;
export const weatherAppSliceSelectors = weatherAppSlice.selectors






