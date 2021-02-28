// Table Generator

let createAlarmTable=(tableData)=>{

let table = new Tabulator("#alarms-display-div", {
    data:tableData,
    autoResize: true,
      // height: 400,
      virtualDomBuffer:300,
      placeholder: 'Data Loading',
      layout:"fitColumns",
      columnMinWidth:160, //Minimum column width in px (default = 40)

    
    columns:[
      {title:"TimeStamp", field:"createdAt", sorter: 'string', editor:"false", frozen:true},
      {title:"Operation Name", field:"operationName", sorter: 'string', editor:"false", },
      {title:"Alarm Name", field:"alarmName", sorter: 'string', editor:"false"},
      {title:"Severity", field:"severity", sorter: 'string', editor:"false"},
    ],
    });

    window.addEventListener('resize', function(){
      table.redraw(true); //trigger full rerender including all data and rows
  });
  }

setTimeout(() => {
  let tabledata = [
    {createdAt: "88888888  8888888888888", operationName:"Operation 1", alarmName:"alarm 1", severity: "high", },
    {createdAt: "8899999  9999999", operationName:"Operation 2", alarmName:"alarm 2", severity: "high", },
    {createdAt: "11111111  22222222", operationName:"Operation 3", alarmName:"alarm 3", severity: "medium", },
    {createdAt: "3333333  666666666", operationName:"Operation 4", alarmName:"alarm 4", severity: "high", },
    {createdAt: "111111111  99887776", operationName:"Operation 5", alarmName:"alarm 5", severity: "low", },
  ];

  createAlarmTable(tabledata)

  

}, 1000);

// setInterval(() => {
//   $('#alarmTable tbody').empty();
//   let alarmArray = [];
//   $.getJSON("/api/activeAlarms")
//       .then(data => {
//           console.log(data);
//           alarmArray = data;
//           if (alarmArray.length > 0) {
//               alarmArray.forEach((alarm, idx) => {
//                   let alarmN = $(`<tr>
//                               <td>${idx+1}</td>
//                               <td>${alarm}</td>
//                               </tr>`)
//                   $('.list').append(alarmN);
//               })
//           }
//       })
//       .catch((err) => {
//           console.log(err);
//       }) 
// }, 3000);

