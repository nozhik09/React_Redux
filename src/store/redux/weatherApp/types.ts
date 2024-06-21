export interface WeatherAppData {
    temperature: number,
    names: string,
    feelsLikes: number,
    descriptions:string
    icons:string
}


export interface WeatherAppSliceState {
    data: WeatherAppData | null,
    status: 'default' | 'loading' | 'success' | 'error',
    error: any
}