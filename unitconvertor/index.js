let number = document.getElementById("number")
let button = document.getElementById("button")
let lenEl = document.getElementById("length-el")
let volEl = document.getElementById("volume-el") 
let massEl = document.getElementById("mass-el") 



button.addEventListener("click", function() {
    if (number.value.length > 0 && number.value > 0) {
    let feetOut = ((3.281) * number.value)
    let meterOut = (number.value / (3.281))
    let gallonOut = (number.value * (0.264))
    let literOut = (number.value / (0.264))
    let poundOut = (number.value * (2.204))
    let kiloOut = (number.value / (2.204))
    lenEl.textContent = `${number.value} meters = ${feetOut.toFixed(3)} feet | ${number.value} feet = ${meterOut.toFixed(3)} meters`  
    volEl.textContent = `${number.value} liters = ${gallonOut.toFixed(3)} gallons | ${number.value} gallons = ${literOut.toFixed(3)} liters` 
    massEl.textContent = `${number.value} kilos = ${poundOut.toFixed(3)} pounds | ${number.value} pounds = ${kiloOut.toFixed(3)} kilos` 
}
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/