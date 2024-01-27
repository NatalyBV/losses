let equipments = [ 
        {
            "type": "Tanks",
            "model": "T-62MV",
            "state": "Destroyed",
            "date": "January 2024",
            "side":"Russia"
        },
        {
            "type": "BMP",
            "model": "BMP-2",
            "state": "Abandoned",
            "date": "January 2024",
            "side":"Russia"
        },
        {
            "type": "BMP",
            "model": "BMP-4M",
            "state": "Destroyed",
            "date": "January 2024",
            "side":"Russia"
        },
        {
            "type": "Helicopters",
            "model": "Mi-24",
            "state": "Destroyed",
            "date": "January 2023",
            "side":"Russia"
        },
        {
            "type": "BTR",
            "model": "BTR-82A",
            "state": "Damaged",
            "date": "January 2024",
            "side":"Ukraine"
        },
        {
            "type": "BMP",
            "model": "BMP-90",
            "state": "Destroyed",
            "date": "January 2024",
            "side":"Russia"
        },
        {
            "type": "Planes",
            "model": "A-50",
            "state": "Destroyed",
            "date": "January 2024",
            "side":"Russia"
        }
    ]

    // Function to check if the dropdown contains a specific value
    function dropdownContainsValue(dropdown, value) {
        for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === value) {
            return true; // The value is found
        }
        }
        return false; // The value is not found
    }

    // Getting dropdown elements from the DOM
    const typeDropdown = document.getElementById('typeDropdown');
    const modelDropdown = document.getElementById('modelDropdown');
    const countryDropdown = document.getElementById('countryDropdown');

    // Function for adding unique types/models of equipment
    function addUniqueOptions(dropdown, defaultValue, options) {
    // Очищаємо поточні опції
    dropdown.innerHTML = '';
  
    // Adding a default value to the dropdown
    const defaultOption = document.createElement('option');
    defaultOption.value = defaultValue;
    defaultOption.text = 'All';
    dropdown.appendChild(defaultOption);
  
    // Adding unique types/models
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;

    // Checking if the dropdown does not contain such a value
    if (!dropdownContainsValue(dropdown, option)) {
        // If the value does not exist, add it to the dropdown
        dropdown.appendChild(optionElement);
    }
    });
  }

    // Updating the dropdown with models based on the selected type
    function updateModelDropdown(selectedType) {
        const models = equipments
        .filter(equipment => selectedType === 'All' || equipment.type === selectedType)
        .map(equipment => equipment.model);
    
        addUniqueOptions(modelDropdown, 'All', models);
    }

    // Initializing the dropdown for equipment types
    addUniqueOptions(typeDropdown, 'All', equipments.map(equipment => equipment.type));
    

    // Initializing the dropdown with all models
    addUniqueOptions(modelDropdown, 'All', equipments.map(equipment => equipment.model));

    // Adding an event handler for the dropdown of equipment types
    typeDropdown.addEventListener('change', function () {
    const selectedType = this.value;
    updateModelDropdown(selectedType);
    });

    // Adding an event handler for the dropdown of equipment models
    modelDropdown.addEventListener('change', function () {
    // Event handler is here, if needed
    });


    document.getElementById("checkLosses").onclick = function() {
        let amount1;
        let amount2;
        if(typeDropdown.value === 'All') {
            amount1 = equipments.filter(tech => tech.side === 'Russia').length;
            amount2 = equipments.filter(tech => tech.side === 'Ukraine').length;
        } else {
            amount1 = equipments.filter(tech => tech.type === typeDropdown.value && tech.side === 'Russia').length;
            amount2 = equipments.filter(tech => tech.type === typeDropdown.value && tech.side === 'Ukraine').length;
        }
        document.getElementById("rusLosses").innerText = `${typeDropdown.value} : ${amount1}`;
        document.getElementById("ukrLosses").innerText = `${typeDropdown.value} : ${amount2}`;    
    }
