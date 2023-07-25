import { LightningElement } from 'lwc';
const API_KEY = '422336ee0e72ac783393c3393bd4a281'
//  chave de api gerada pelo site https://home.openweathermap.org/
export default class WeatherApp extends LightningElement {
    cityName = ''
    searchHandler(event) {
        this.cityName = event.target.value
    }

    submitHandler(event) {
        event.preventDefault() 
        this.fetchData()     
    }

    fetchData() {
        console.log("cityName", this.cityName)
        // chamada da api
    }
}