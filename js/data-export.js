// Table Generator

let dataDisplay = document.querySelector('#displaySearchData')
let getDataBtn = document.querySelector('#getData')
let startDate = document.querySelector('#startDatePicker')
let endDate = document.querySelector('#endDatePicker')


const createTable=(tableData)=>{

  let table = new Tabulator("#displaySearchData", {
      data: tableData,
      autoResize: true,
      // height: 400,
      virtualDomBuffer:300,
      virtualDomHoz:true,
      placeholder: 'Data Loading',
      // layout:"fitColumns",
      layout:"fitDataStretch",
  
      columns:[
        {title:"Created At", field:"createdAt", sorter: 'string', editor:"false", frozen:true},
        {title:"Operation Name", field:"operationName", sorter: 'string', editor:"false"},
        {title:"HeatExchanger Temp", field:"heatExchangerTemp", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Burner Temp", field:"burnerTemp", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Drying DuctExhaust Temp", field:"dDuctExhaustTemp", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Drying DuctExhaust Humidity", field:"dDuctExhaustHumi", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Material Temp", field:"materialTemp", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Material Humidity", field:"materialHumi", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Drying Duct Air Velocity", field:"dDuctAirVelocity", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Drying Duct Air Pressure", field:"dDuctAirPressure", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Feeder Motor Speed Command", field:"feederMotorSpeedCommand", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Blower Motor Speed Command", field:"blowerMotorSpeedCommand", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Extractor Motor Speed", field:"extractorMotorSpeed", align:"center", sorter: 'number', editor:false, formatter:"money", formatterParams:{thousand:",", precision:false}},
        {title:"Panel Temperature", field:"panelTemp", align:"center", sorter: 'string', editor:false},
        {title:"Material Presence", field:"materialPresence", align:"center", sorter: 'string', editor:false},
        {title:"Burner Start", field:"burnerStart", align:"center", sorter: 'string', editor:false},
        {title:"Blower Start", field:"blowerStart", align:"center", sorter: 'string', editor:false},
        {title:"Feeder Start", field:"feederStart", align:"center", sorter: 'string', editor:false},
        {title:"Extractor Start", field:"extractorStart", align:"center", sorter: 'string', editor:false},
        {title:"Feeder Status", field:"feederStatus", align:"center", sorter: 'string', editor:false},
        {title:"Blower Status", field:"blowerStatus", align:"center", sorter: 'string', editor:false},
        {title:"Extractor Status", field:"extractorStatus", align:"center", sorter: 'string', editor:false},
        {title:"Burner Status", field:"burnerStatus", align:"center", sorter: 'string', editor:false},
        {title:"Feeder Man Operation", field:"feederManOperation", align:"center", sorter: 'string', editor:false},
        {title:"Feeder Auto Operation", field:"feederAutoOperation", align:"center", sorter: 'string', editor:false},
        {title:"Blower Man Operation", field:"blowerManOperation", align:"center", sorter: 'string', editor:false},
        {title:"Blower Auto Operation", field:"blowerAutoOperation", align:"center", sorter: 'string', editor:false},
        {title:"Burner Man Operation", field:"burnerManOperation", align:"center", sorter: 'string', editor:false},
        {title:"Burner Auto Operation", field:"burnerAutoOperation", align:"center", sorter: 'string', editor:false},
      ],
      
    });
    $("#downloadDataButton").click(function(){
      table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
    });
}

$(window).resize(function(){
  $("#displaySearchData").tabulator("redraw", true); //trigger full rerender including all data and rows
});


let addSpinnerDiv =()=>{
  let spinnerDiv = document.createElement('div')
      spinnerDiv.classList = 'flex-col spinner-div'
    
  let spinnerImage = document.createElement('img')
      spinnerImage.classList = 'spinner-image'
      spinnerImage.src = './assets/images/spinner.gif'

  let spinnerText = document.createElement('p')
      spinnerText.classList = 'spinner-text'
      spinnerText.innerText = 'Fetching Data, please wait'
    
  spinnerDiv.appendChild(spinnerImage)
  spinnerDiv.appendChild(spinnerText)

  dataDisplay.appendChild(spinnerDiv)
}

let removeSpinnerDiv =()=>{
    let spinnerDiv = document.querySelector('.spinner-div')
    spinnerDiv.remove();
}

let checkDateValue=(start, end)=>{
    if ((start.value === "") || (end.value === "")){
      alert('Please select a valid start and/or end date')
      return false;
    }
    else{
      return true;
    }
}

let compareDateValue =(start, end)=>{
    if (start.value > end.value){
      alert('Your start date is ahead of the end date, kindly correct this and try again')
      return false;
    }
    else{
      return true;
    }
}

getDataBtn.addEventListener('click', ()=>{
    
    if((checkDateValue(startDate, endDate)) && (compareDateValue(startDate, endDate))){
      console.log('calculation can proceed')

      setTimeout(() => {

        dataDisplay.innerText = ''
    
        addSpinnerDiv()  
    
      let tabledata = [
        {createdAt:"Date", operationName:"blower", New_Cases: "4343434343", Total_Deaths: "88888888", New_Deaths:"8778767898", Total_Recovered:"8790", Active_Cases:"87876000909", Serious_Critical:"787877666" },
        {createdAt:"Date", operationName:"blower", New_Cases: "4343434343", Total_Deaths: "88888888", New_Deaths:"8778767898", Total_Recovered:"8790", Active_Cases:"87876000909", Serious_Critical:"787877666" },
        {createdAt:"Date", operationName:"blower", New_Cases: "4343434343", Total_Deaths: "88888888", New_Deaths:"8778767898", Total_Recovered:"8790", Active_Cases:"87876000909", Serious_Critical:"787877666" },
        {createdAt:"Date", operationName:"blower", New_Cases: "4343434343", Total_Deaths: "88888888", New_Deaths:"8778767898", Total_Recovered:"8790", Active_Cases:"87876000909", Serious_Critical:"787877666" },
    ];
    
    setTimeout(() => {
      removeSpinnerDiv()
      createTable(tabledata)
    
    }, 4000);
    
    
    }, 1000);
    }
})

// USING FETCH METHOD
// var myHeaders = new Headers();
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };
  
// fetch(url, requestOptions)
// .then(resp=>resp.json())
// .then(data=>(
//   console.log(data)
// ))
// .catch(error =>(
//   console.log(error)
// ))


// USING AXIOS METHOD
// axios({
//   method: 'post',
//   url: "/api/exportData",
//   crossdomain: true,
//   data: {
//     startDate: startDate.value,
//     endDate: endDate.value
//   }
// })
//   .then((response) => {
//     console.log(response);
//     console.log(response.data);
//     createTable(response.data)
//   })
//   .catch((error) => {
//     console.log(">>>>>.....>>>>: " + error.message)
//   });