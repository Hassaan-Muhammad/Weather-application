function getWeatherData() {

    let city = document.querySelector("#city").value
    axios.get(` https://api.weatherapi.com/v1/current.json?key=c55f495eefb8474bbfa102111220107&q=${city}`)
        .then(function (response) {
            // handle success
            const data = response.data
            console.log(data);

            let picture = data.current.condition.icon
            document.querySelector("#logo").src = picture;

            document.querySelector("#tempC").innerText = data.current.temp_c + "C";
            document.querySelector("#cityName").innerText = data.location.name;
            document.querySelector("#mostly").innerText = data.current.condition.text;
            document.querySelector("#feels").innerText = "Feels like " + data.current.feelslike_c + "C";
            document.querySelector("#pressure").innerText = "Pressure in inches " + data.current.pressure_in + " inch";
            document.querySelector("#humidity").innerText = "Humidity " + data.current.humidity;
            document.querySelector("#wind").innerText = "Wind " + data.current.wind_kph + " kph";
            document.querySelector("#winddir").innerText = "Wind direction " + data.current.wind_dir;
            document.querySelector("#visible").innerText = "Visiblity " + data.current.vis_km + " km";


        })
}
