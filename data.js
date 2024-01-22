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

    
    document.getElementById("myButton").onclick = function() {
        const amount = technics.filter(tech => tech.type === "BMP" && tech.side === 'Russia').length;
        document.getElementById("contentContainer").innerText = `Russian losses of BMP in January 2024 were: ${amount}.`;

    }

    // Populate the type drop-down with unique values
    var typeDropdown = document.getElementById("typeDropdown");
    addUniqueOptions(typeDropdown, "all", "All", equipments.map(equipment => technic.type));

    function updateModels() {
        var typeDropdown = document.getElementById("typeDropdown");
        var modelDropdown = document.getElementById("modelDropdown");

        // Clear existing options
        modelDropdown.innerHTML = "";

        // Get the selected type
        var selectedType = typeDropdown.value;

        // Add "All" option to the model drop-down
        addOption(modelDropdown, "all", "All");

        // Extract unique models based on the selected type
        var uniqueModels = [...new Set(equipments.filter(equipment => selectedType === "all" || equipment.type === selectedType).map(equipment => equipment.model))];

        // Add unique models to the model drop-down
        addUniqueOptions(modelDropdown, uniqueModels, uniqueModels);
    }

    function addUniqueOptions(selectElement, values, texts) {
        values.forEach((value, index) => {
            addOption(selectElement, value, texts[index]);
        });
    }

    function addOption(selectElement, value, text) {
        var option = document.createElement("option");
        option.value = value

    }