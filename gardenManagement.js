const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


//Watering Control
if (temperature>80) {console.log("Watering on");}
else {console.log("Watering off");}
//Garden Lights Control
if (timeOfDay=== "evening"|"night"){console.log("Lights on.");}
else {console.log("Lights off")}
//Soil Moisture Adjustment

while (soilMoisture<41){
    console.log(soilMoisture);
    soilMoisture+=5;
}