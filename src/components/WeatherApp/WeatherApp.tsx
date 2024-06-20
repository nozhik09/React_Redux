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
                <Input name='Your City' placeholder='Your City' onChange={(event) => setCityName(event.target.value)}/>
                <Button name='Get Weather' onClick={getWeathers}/>
            </SearchContainer>


            <WeatherBoxInfo>
                {status === 'loading' && <Spinner/>}

                {status==='success' && <WeatherDataCity>
                    <WeatherData>
                        Температура: {data?.temperature}
                        Страна: {data?.countries}
                       Временная зона: {data?.timezones}
                    </WeatherData>
                    <CityName>
                        {city}
                    </CityName>
                </WeatherDataCity>}
                <AddImage
                    src='https://s3-alpha-sig.figma.com/img/876e/dcf3/34c1662b5278253a69ea033623646204?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCn9rl2JrVpj9hbV4TZRtjR0knD1PLxCWiSb3SFECps7xARpAImkqwewQFcU7SuR5vEJFyj1-~FbOKXjWVUdyU784ewVpV10FW5tZn-m0OnW5ly4~rmnceBypZ5Vpabn4y5v9L7LY8euatAxIzF69fHIEJdAteUnWS1vj2~nKM3EYQ33pG528g5hcduypWvAnClWSKjWUjfzErRyVNm8kwXclGuhMAfkyfobzdC8E0qCy0r9tLFuUJLdj4VGs7zXcTZxc5~HTz6KYiMPyNzkKVFj~AOfSslfZguzImEyQ4BmfM3Vv0fzV~aXUG-HOfSyA45V2Rn~P9kzrpOgzoh2sQ__'/>
            </WeatherBoxInfo>

        </WeatherInfoWrapper>


    )


}

export default WeatherApp