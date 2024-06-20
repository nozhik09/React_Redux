export interface WeatherAppData {
    temperature: string,
    names: string,
    countries: string,
    timezones:string
}


export interface WeatherAppSliceState {
    data: WeatherAppData | null,
    status: 'default' | 'loading' | 'success' | 'error',
    error: any
}