import {createAppSlice} from "../../createAppSlice";
import type {WeatherAppData, WeatherAppSliceState} from "./types";
import axios from "axios";


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



        fetchWeather: create.asyncThunk(async (citeName:string, thunkAPI) => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citeName}&appid=${APP_ID}&units=metric`);
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
            }

        }, {
            pending:(state:WeatherAppSliceState)=>{
                state.status='loading'
                state.error=undefined
            },
            fulfilled:(state:WeatherAppSliceState ,action:any) =>{
                state.status='success'
                const {main:{temp,feels_like},weather:[{description,icon}],name}=action.payload
                state.data= {
                    temperature:temp,
                    names: name,
                    feelsLikes:feels_like,
                    descriptions:description,
                    icons:icon
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







