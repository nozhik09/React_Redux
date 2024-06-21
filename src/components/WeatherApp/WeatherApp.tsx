import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    fetchWeather,
    weatherAppSliceSelectors
} from "../../store/redux/weatherApp/weatherAppSlice";
import {
    AddImage,
    CityName, ErrorData,
    SearchContainer,
    WeatherBoxInfo,
    WeatherData,
    WeatherDataCity,
    WeatherInfoWrapper,
    WeatherTitle
} from "./styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useState} from "react";
import Spinner from "../Spinner/Spiner";


function WeatherApp() {

    const {data, status, error} = useAppSelector(weatherAppSliceSelectors.weatherAppData)

    const [city, setCity] = useState('');
    const [cityName, setCityName] = useState('');
    const dispatch = useAppDispatch()


    const getWeathers = () => {
        dispatch(fetchWeather(cityName));
        setCity(cityName)
        setCityName(' ')
    };


    return (
        <WeatherInfoWrapper>

            <WeatherTitle>Weather</WeatherTitle>

            <SearchContainer>
                <Input name='Your City' placeholder='Введіть ваше місто' onChange={(event) => setCityName(event.target.value)}/>
                <Button name='Отримати погоду' onClick={getWeathers}/>
            </SearchContainer>


            <WeatherBoxInfo>
                {status === 'loading' && <Spinner/>}

                {status === 'success' && <WeatherDataCity>
                    <CityName>
                       Місто: {city}
                    </CityName>
                    <WeatherData>
                        Температура: {data?.temperature}°C
                        <WeatherData>
                            Відчуваеться як : {data?.feelsLikes}°C
                        </WeatherData>
                        <WeatherData>
                            Опис погоди: {data?.descriptions}
                        </WeatherData>
                    </WeatherData>

                </WeatherDataCity>}
                {status === 'error' && error && <ErrorData>ERROR</ErrorData>}

                <AddImage src={`https://openweathermap.org/img/wn/${data?.icons}.png`}/>


            </WeatherBoxInfo>
        </WeatherInfoWrapper>
    )
}
export default WeatherApp