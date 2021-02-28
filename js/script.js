let configurationListModalWrapper = document.querySelector('.modal-wrapper')
let startBtn = document.querySelector('#send')
let stopBtn = document.querySelector('#stop')
let connectInternetBtn = document.querySelector('#connectToInternet')
let shutdownBtn = document.querySelector('#shutdown-button')

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

let displayOperationTypes=(()=>{
    let operationType = document.querySelector('.operationType');
    let operationValue = document.querySelector('.operationType .value-span')
    let operationTypes = operationType.querySelectorAll('.menu li')

        
        operationType.addEventListener('click', ()=>{
            if(checkOpenDropdown()){
                closeOpenDropdown()
            }
            else{
                displayDropdowns(operationType)
            }
        })

        getSelectChoice(operationTypes, operationValue);
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
        alert('Operation Started, thanks')
    })
})()

let stopOperation =(()=>{
    stopBtn.addEventListener('click', ()=>{
        alert('Operation Stopped, thanks')
    })
})()

let systemShutdown =(()=>{
    shutdownBtn.addEventListener('click', ()=>{
        alert('System Shutting Down, bye')
    })
})()

let connectToInternet =(()=>{
    connectInternetBtn.addEventListener('click', ()=>{
        alert('Internet Connection Initialized, thanks')
    })
})()