// initialize: call checkAirQuality() manually
checkAirQuality();

function checkAirQuality() {

    let aqi = document.getElementById("aqiRange").value;
    document.getElementById("aqiIndex").innerHTML = aqi;

    // normally
    let healthConcern;
    let healthEffect;
    let bgColor;
    let fgColor;
    if (aqi <= 50) {
        healthConcern = "good";
        healthEffect = "Little or no risk";
        bgColor = "green";
        fgColor = "white";
    } else if (aqi > 50 && aqi <= 100) {
        healthConcern = "Moderate";
        healthEffect = "Acceptable quality";
        bgColor = "yellow";
        fgColor = "black";
    } else if (aqi > 100 && aqi <= 150) {
        healthConcern = "Unhealthy for sensitive groups";
        healthEffect = "General publics not likely affected";
        bgColor = "orange";
        fgColor = "black";
    } else {
        healthConcern = "Lethal for sensitive groups";
        healthEffect = "General publics likely affected";
        bgColor = "red";
        fgColor = "white";
    }

    document.getElementById("healthConcern").innerHTML = healthConcern;
    document.getElementById("healthEffect").innerHTML = healthEffect;
    document.body.style.background = bgColor;
    document.body.style.color = fgColor;
}