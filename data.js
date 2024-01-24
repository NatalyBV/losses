let equipments = [ 
        {
            "type": "Tank",
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
            "type": "Helicopter",
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

    // Функція для перевірки, чи дропдаун містить певне значення
    function dropdownContainsValue(dropdown, value) {
        for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === value) {
            return true; // Значення вже існує
        }
        }
        return false; // Значення не знайдено
    }

    document.getElementById("myButton").onclick = function() {
        const amount = equipments.filter(tech => tech.type === "BMP" && tech.side === 'Russia').length;
        document.getElementById("contentContainer").innerText = `Russian losses of BMP in January 2024 were: ${amount}.`;

    }

    // Отримуємо елементи дропдаунів з DOM
    const typeDropdown = document.getElementById('typeDropdown');
    const modelDropdown = document.getElementById('modelDropdown');

    // Функція для додавання унікальних типів/моделей техніки
    function addUniqueOptions(dropdown, defaultValue, options) {
    // Очищаємо поточні опції
    dropdown.innerHTML = '';
  
    // Додаємо дефолтне значення дропдауну
    const defaultOption = document.createElement('option');
    defaultOption.value = defaultValue;
    defaultOption.text = 'All';
    dropdown.appendChild(defaultOption);
  
    // Додаємо унікальні типи/моделі
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;

    // Перевіряємо, чи дропдаун не містить вже такого значення
    if (!dropdownContainsValue(dropdown, option)) {
        // Якщо значення не існує, додаємо його до дропдауну
        dropdown.appendChild(optionElement);
    }
    });
  }


  // Оновлюємо дропдаун з моделями на основі вибраного типу
    function updateModelDropdown(selectedType) {
        const models = equipments
        .filter(equipment => selectedType === 'All' || equipment.type === selectedType)
        .map(equipment => equipment.model);
    
        addUniqueOptions(modelDropdown, 'All', models);
    }

    // Ініціалізуємо дропдаун типів
    addUniqueOptions(typeDropdown, 'All', equipments.map(equipment => equipment.type));
    

    // Ініціалізуємо дропдаун з усіма моделями
    addUniqueOptions(modelDropdown, 'All', equipments.map(equipment => equipment.model));

    // Додаємо обробник події для дропдауну типів
    typeDropdown.addEventListener('change', function () {
    const selectedType = this.value;
    updateModelDropdown(selectedType);
    });

    // Додаємо обробник події для дропдауну моделей
    modelDropdown.addEventListener('change', function () {
    // Обробник події, якщо потрібен
    });
