import { LightningElement } from 'lwc';
const API_KEY = '422336ee0e72ac783393c3393bd4a281'
//  chave de api gerada pelo site https://home.openweathermap.org/

export default class WeatherApp extends LightningElement {

    cityName = ''
    loadingText = ''
    isError = false

    get loadingClasses() {
        return this.isError ? 'error-msg':'success-msg'
    }

    searchHandler(event) {
        this.cityName = event.target.value
    }

    submitHandler(event) {
        event.preventDefault() 
        this.fetchData()     
    }

    fetchData() {
        this.isError = false
        this.loadingText = 'Fetching weather details...'
        console.log("cityName", this.cityName)
        // chamada da api

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`
        fetch(URL).then(res=>res.json()).then(result=>{
            console.log(JSON.stringify(result))
           
            this.weatherDetails(result)
        }).catch((error)=> {
            console.error(error)
            this.loadingText = "something went wrong"
            this.isError = true
        })   
    }
    weatherDetails(info) {
        if(info.cod === "404") {
            this.isError = true
            this.loadingText = `${this.cityName} isn't a valid city name` 
        } else {
            this.loadingText = ''
        }
    }
}