let configurationListModalWrapper = document.querySelector('.modal-wrapper')
let startBtn = document.querySelector('#send')
let stopBtn = document.querySelector('#stop')
let connectInternetBtn = document.querySelector('#connectToInternet')
let shutdownBtn = document.querySelector('#shutdown-button')

let configurationValue = document.querySelector('#configurationTypeValue');
let configSelectorLabel = document.querySelector('#config-selector-label');
let configSelectorDiv = document.querySelector('#configurationType')

let populateConfigurationList =(list)=>{

    list.map(element=>{
        let configurationItem = document.createElement('li')
   
        let icon = document.createElement('i')
            icon.classList = 'iconify'
            icon.setAttribute('data-icon', 'octicon:check-16')
    
        let iconImage = document.createElement('img')
            iconImage.src = './assets/icons/check.svg'
    
        icon.appendChild(iconImage)
    
        let configurationValue = document.createElement('span')
            configurationValue.classList = 'configuration-value'
            configurationValue.innerText = `${element}`
    
        configurationItem.appendChild(icon)
        configurationItem.appendChild(configurationValue)
        
        configurationListModalWrapper.appendChild(configurationItem)   
    })
}

let getConfigurationList =(()=>{

    // fetch list from backend
    let list = [
        'First', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Operation Toperrrrrrr 555555', 'Operation SK', 'Operation Others', 'Last'
    ]

    populateConfigurationList(list)
})()

let getSelectChoice=(selectType, valueSpan)=>{

    valueSpan.innerText = 'Select Config'

    selectType.forEach(element=>{
        element.addEventListener('click', ()=>{

            selectType.forEach(item=>{
                let icon = item.querySelector('.iconify');
                if(icon.style.visibility === 'visible'){
                    icon.style.visibility = 'hidden'
                }
            })
            let icon = element.querySelector('.iconify')
                icon.style.visibility = 'visible'
                valueSpan.innerText = `${element.innerText}`;
        })
    })
}

let displayDropdowns =(element)=>{ 
    let dropdownMenu = element.querySelector('ul')

        if (dropdownMenu.classList.contains('closed')) {
            dropdownMenu.classList.remove('closed')
            dropdownMenu.classList.add('open-dropdown')
        } 
        else {
            dropdownMenu.classList.remove('open-dropdown')
            dropdownMenu.classList.add('closed')
        }
}

let displayconfigurationTypes=(()=>{
    let configurationType = document.querySelector('.configurationType');
    let operationValue = document.querySelector('.configurationType .value-span')
    let configurationTypes = configurationType.querySelectorAll('.menu li')

        
        configurationType.addEventListener('click', ()=>{
            if(checkOpenDropdown()){
                closeOpenDropdown()
            }
            else{
                displayDropdowns(configurationType)
            }
        })

        getSelectChoice(configurationTypes, operationValue);
})()

let closeOnOutsideClick=(()=>{
    window.addEventListener('click', function(event) {
        let dropdowns = document.querySelectorAll('.dropdown')
            dropdowns.forEach(element=>{
                let dropdownItem = element.contains(event.target);
    
                if (!dropdownItem) {

                    let menu = element.querySelector('ul')

                    menu.classList.remove('open-dropdown')
                    menu.classList.add('closed')
                }
            })
    
    });
})()

let checkOpenDropdown=()=>{
    let dropdowns = document.querySelectorAll('.dropdown')
    let check;
        dropdowns.forEach(element=>{
            let listGroup = element.querySelector('ul')
            if(listGroup.classList.contains('open-dropdown')){  
                check = true;
            }
        })
        return check;
}

let closeOpenDropdown=()=>{
    let dropdown = document.querySelector('.open-dropdown')
    dropdown.classList.remove('open-dropdown')
    dropdown.classList.add('closed')
}

let startOperation =(()=>{
    startBtn.addEventListener('click', ()=>{

        if(configurationValue.textContent === 'Select Config'){
            alert('Kindly make a valid selection')
        }

        else{
            setTimeout(() => {
                // MAKE API CALL TO GET CONFIG SERVED
              let value = 'Current Operation'
              if(value){
                  configSelectorLabel.innerText = 'Running Config:'
                  configurationValue.innerText = value;
                  startBtn.classList.add('disabled');
                  configSelectorDiv.classList.add('disabled');

                //   startBtn.classList.add('disabled');
                //   configSelectorDiv.classList.add('disabled');
                  
                  alert('Operation Started, thanks')
              }
          }, 3000);
        
        }
       
    })
})()

let stopOperation =(()=>{
    stopBtn.addEventListener('click', ()=>{

        if(startBtn.classList.contains('disabled')){
            setTimeout(() => {
                // make api call to get status from the server
                let value = 'true'
    
                if(value){
    
                    configSelectorLabel.innerText = 'Select Config:';
                    configurationValue.innerText = 'Select Config';
                    startBtn.classList.remove('disabled');
                    configSelectorDiv.classList.remove('disabled');
                    alert('Operation Stopped, thanks');
    
                }
            }, 1000);
        }

       else{
           alert('No operation running')
       }


    })
})()

let systemShutdown =(()=>{
    shutdownBtn.addEventListener('click', ()=>{
        alert('System Shutting Down, bye')
    })
})()

let connectToInternet =(()=>{
    connectInternetBtn.addEventListener('click', ()=>{

        let status = Math.round(Math.random())

        if(status === 1){
            alert('Internet Connection Initialized, thanks')
            // connectInternetBtn.innerText = 'Connected'
        }
        else{
            alert('Connection Unsuccessful, kindly try again')
            connectInternetBtn.innerText = "Connect Again"
        }
    })
})()

// Function to check internet connectivity
setInterval(() => {

    let status = Math.round(Math.random())

    // let status = 0;

    if(status === 1){
        // connectInternetBtn.disabled = false;
        connectInternetBtn.innerText = 'Connect To Internet'
        connectInternetBtn.classList.add('enabled')
        connectInternetBtn.classList.remove('disabled')
    }
    else{
        // connectInternetBtn.disabled = true;
        connectInternetBtn.classList.add('disabled')
        connectInternetBtn.classList.remove('enabled')
        connectInternetBtn.innerText = 'No Internet'
    }
    
}, 30000);
