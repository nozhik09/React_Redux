import styled from "@emotion/styled";

export const WeatherInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 800px;
    height: 600px;
    top: -283px;
    left: -298px;
    gap: 120px;
    background: url("https://s3-alpha-sig.figma.com/img/c990/71c2/4b93b35c82a32f3c77dfbb82bc069c03?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnvV6psrOF147o42NzCalEFaOw8M5b7A1ToYQtI6OahqHzrkOJbkeNF2wyV2hYgXAFAety7zdSwHsRnApkr22VaMmPmm~MbN4WVhYJRo73J9EzKiOyGPp1J9s4nPo6VSL7LKcWIbCFZ6imaQlizL1rnLm-8go~qYdwbfYqehMqBkKbLWvuKXTSrpW5vNQtwwBwpfBHGVu4XizRHToBrYBX~ZUjr-MbYvUuL50mvPZjveJ03BM~Zy8crxGAbmQbmqftDUuomoMVlxoyeicUZvTnRTDju6u455u87OHOILpSEDiidom0QdMGdK3zXoFH3lfh7paNRQ3lr2O3YrDTlaQw__");
    background-size: cover;


`

export const WeatherTitle = styled.header`
text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
    background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
    border-bottom: 1px solid #D2D2D2;
    color: white;


`



export const SearchContainer = styled.div`
    width: 310px;
    height: 48px;
    gap: 14px;
    margin-left: 220px;
    
`


export const WeatherBoxInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 400px;
    height: 100px;
    margin-bottom: 200px;
    color: white;
    background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
    margin-left: 220px;
    border-radius: 6px;
   
`

export const CityName = styled.div`
  grid-area: cityName; 
  font-size: 24px; 
  font-weight: bold;
`;

export const WeatherData = styled.div`
    grid-area: weatherData;
    display: flex;
    flex-direction: column;
    gap: 10px;
   
`;


export const AddImage = styled.img`
    height: 50px;
    width: 170px;
    
`

export const WeatherDataCity = styled.div`
  

`

export const ErrorData = styled.div`
font-size: 50px;

`










