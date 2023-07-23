let inputValue = document.getElementById("inputValue");

let inputBtn = document.getElementById("inputBtn");

let city = document.getElementById("city");

let temp = document.getElementById("temp");

let speed = document.getElementById("speed");

let humidityId = document.getElementById("humidity");

let weatherIcon = document.getElementById("weatherIcon");

let error = document.getElementById("error");

let onClickFetchWatherData = async () => {
	let inputElementValue = inputValue.value;
	let apiKey = "d8c904999b19f6404262351b97697577";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputElementValue}`;

	let fetchData = await fetch(apiUrl + `&appid=${apiKey}`);
	if (fetchData.ok) {
		let data = await fetchData.json();
		let cityName = data.name;
		let windSpeed = data.wind.speed;
		let cityTemp = data.main.temp;
		let humidity = data.main.humidity;
		let weatherImage = data.weather[0].main;

		city.textContent = cityName;
		temp.textContent = cityTemp + "°C";
		speed.textContent = windSpeed + "Km/h";
		humidityId.textContent = humidity + "%";

		switch (weatherImage) {
			case "Rain":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093520/rain_dvhmxh.png";
				break;
			case "Clouds":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093522/clouds_ducstb.png";
				break;
			case "Drizzle":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093521/drizzle_o2edwu.png";
				break;

			case "Mist":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093522/mist_m9uvnq.png";
				break;

			case "Mist":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093522/mist_m9uvnq.png";
				break;

			case "Snow":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093522/snow_lk3nsw.png";
				break;
			case "Clear":
				weatherIcon.src =
					"https://res.cloudinary.com/dnmaskg3n/image/upload/v1690093520/clear_o8ywwr.png";
				break;

			default:
				break;
		}
		document.querySelector(".current-weather").style.display = "block";
		error.style.display = "none";
	} else {
		error.textContent = fetchData.statusText + " " + inputElementValue;
		error.style.display = "block";
		document.querySelector(".current-weather").style.display = "none";
	}
};
inputBtn.addEventListener("click", onClickFetchWatherData);
