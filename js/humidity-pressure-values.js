let dDuctTemp = document.querySelector('#dDuctTemp')
let dDuctHumi = document.querySelector('#dDuctHumi')
let materialTemp = document.querySelector('#materialTemp')
let materialHumi = document.querySelector('#materialHumi')
let hexchangerTemp = document.querySelector('#hexchangerTemp')
let burnerTemp = document.querySelector('#burnerTemp')
let panelTemp = document.querySelector('#panelTemp')
let panelDoor = document.querySelector('#panelDoor')
let materialPresence = document.querySelector('#materialPresence')
let burnerStatus = document.querySelector('#burnerStatus')
let doorIcon = document.querySelector('#door-icon')
let burnerIcon = document.querySelector('#burner-icon')


// Get Drying Duct Details
setInterval(() => {
    let temperature = Math.round(Math.random()*1000);
    let humidity = Math.round(Math.random()*1000);
    
    dDuctTemp.innerText = temperature;
    dDuctHumi.innerText = humidity
}, 5000);

// Get Material Input Details
setInterval(() => {
    let temperature = Math.round(Math.random()*1000);
    let humidity = Math.round(Math.random()*1000);
    
    materialTemp.innerText = temperature;
    materialHumi.innerText = humidity
}, 5000);

// Get Heat Source Details
setInterval(() => {
    let temperature = Math.round(Math.random()*1000);
    let burnertemp = Math.round(Math.random()*1000);
    
    hexchangerTemp.innerText = temperature;
    burnerTemp.innerText = burnertemp;
}, 5000);

// Get Panel Details
setInterval(() => {
    let temperature = Math.round(Math.random()*1000);
    
    panelTemp.innerText = temperature;

    
    // let doorstatus = Math.round(Math.random());
    // if(doorstatus === 1){
    //     panelDoor.innerText = 'Opened'
    //     doorIcon.src = './assets/icons/door-open.svg'
    // }
    // else{
    //     panelDoor.innerText = 'Closed'
    //     doorIcon.src = './assets/icons/door-close.svg'
    // }

}, 5000);

// Get Other Info Details
setInterval(() => {
    let value = Math.round(Math.random());
    if(value === 1){
        materialPresence.innerText = 'YES'
    }
    else{
        materialPresence.innerText = 'NO'
    }
        
    // let burnerState = Math.round(Math.random());
    // if(burnerState === 1){
    //     burnerStatus.innerText = 'ON'
    //     burnerIcon.src = './assets/icons/burner-on.svg'

    // }
    // else{
    //     burnerStatus.innerText = 'OFF'
    //     burnerIcon.src = './assets/icons/burner-off.svg'
    // }
}, 5000);


// Panel Door Status
setInterval(() => {
        let doorstatus = Math.round(Math.random());

        if(doorstatus === 1){
            panelDoor.innerText = 'Opened'
            doorIcon.src = './assets/icons/door-open.svg'
        }
        else{
            panelDoor.innerText = 'Closed'
            doorIcon.src = './assets/icons/door-close.svg'
        }
}, 1000);

// Burner Status
setInterval(() => {
        let burnerState = Math.round(Math.random());

        if(burnerState === 1){
            burnerStatus.innerText = 'ON'
            burnerIcon.src = './assets/icons/burner-on.svg'
        }
        else{
            burnerStatus.innerText = 'OFF'
            burnerIcon.src = './assets/icons/burner-off.svg'
        }
}, 1000);