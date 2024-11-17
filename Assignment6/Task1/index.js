function redirectToCityPage() {
    const cityName = document.getElementById("cityName").value.trim();


    if (!cityName) {
        alert("Please enter a city name.");
        return;
    }

    window.location.href = `?city=${encodeURIComponent(cityName)}`;
}


async function getWeather() {
    const urlParams = new URLSearchParams(window.location.search);
    const cityName = urlParams.get("city");
    const resultDiv = document.querySelector(".result");



    if (!cityName) {
        resultDiv.innerHTML = "<p>Enter a city name above to get the weather forecast.</p>";
        return;
    }

    try {
        const response = await fetch(`https://wttr.in/${cityName}?format=j1`);

        if (!response.ok) {
            throw new Error("City not found or service unavailable");
        }

        const weatherData = await response.json();

        // Display weather information
        resultDiv.innerHTML = `
        <h3>Weather in ${cityName}</h3>
        <p><strong>Temperature:</strong> ${weatherData.current_condition[0].temp_C}°C</p>
        <p><strong>Condition:</strong> ${weatherData.current_condition[0].weatherDesc[0].value}</p>
        <p><strong>Humidity:</strong> ${weatherData.current_condition[0].humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weatherData.current_condition[0].windspeedKmph} km/h</p>
      `;
    } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

// Run the getWeather function when the page loads
window.onload = getWeather;
