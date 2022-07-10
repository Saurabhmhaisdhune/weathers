let button1=document.querySelector(".button");
let data=document.querySelector(".data");

button1.addEventListener("click",async function(){
   data.innerHTML="Loading weather...";
    try{
       let countryInp=document.getElementById("searchbar").value;
       const url=`https://api.weatherapi.com/v1/current.json?key=23b278c44ea94cd08f560917221007&q=${countryInp}`;
        let result=await fetch(url);
        let obj=await result.json();
        data.innerHTML=
        `<h2>Country:${obj.location.country}</h2>
        <h2>Region:${obj.location.name}</h2>
        <h2>longitude:${obj.location.lon}</h2>
        <h2>latitude:${obj.location.lat}</h2>
        <h2>zone:${obj.location.tz_id}</h2>
        <h2>Temperature in degree:${obj.current.temp_c}</h2>
        <h2>Temperature in Fahrenheit:${obj.current.temp_f}</h2>
        <h2>Weather Condition:${obj.current.condition.text}</h2>
        <h2>Date & Time:${obj.location.localtime}</h2>
        <h2>Wind:${obj.current.wind_kph} kph</h2>
        <h2>Pressure:${obj.current.pressure_in} in</h2>
        <h2>Humidity:${obj.current.humidity} </h2>
        <h2>Cloud:${obj.current.cloud}</h2>`
    }catch(error) {alert('country not found');
    }
});
