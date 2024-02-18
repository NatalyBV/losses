// Function to check if the dropdown contains a specific value
function dropdownContainsValue(dropdown, value) {
    for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === value) {
            return true; // The value is found
        }
    }
    return false; // The value is not found
}


function getLastDayOfMonth(month, year) {
    let monthNumber;
    switch (month) {
        case 'January':
            monthNumber = 0;
            break;
        case 'February':
            monthNumber = 1;
            break;
        case 'March':
            monthNumber = 2;
            break;
        case 'April':
            monthNumber = 3;
            break;
        case 'May':
            monthNumber = 4;
            break;
        case 'June':
            monthNumber = 5;
            break;
        case 'July':
            monthNumber = 6;
            break;
        case 'August':
            monthNumber = 7;
            break;
        case 'September':
            monthNumber = 8;
            break;
        case 'October':
            monthNumber = 9;
            break;
        case 'November':
            monthNumber = 10;
            break;
        case 'December':
            monthNumber = 11;
            break;
    }

    // Creating a new date from the first day of the current year's month.
    let lastDay = new Date(year, monthNumber + 1, 0);
    // Getting the last day of the month
    return lastDay.getDate();
}



// Checks if a given date is within a specified date range.
function dateCheck(from, to, check) {
    const parseFromToDate = (dateString) => {
        const [year, month, day] = dateString.split(' ');
        return new Date(`${month} ${day}, ${year}`);
    };

    const parseItemDateIfEndDateFilterIsNotSet = (dateString) => {
        const [year, month, day] = dateString.split(' ');
        if (day) {
            // Use the specified day if exists
            return new Date(`${month} ${day}, ${year}`);
        } else {
            // If the day for the item is not specified and only the 'start date' filter set by a user, 
            // set it to the last day of the month to include this item in the results.
            const lastMonthDay = getLastDayOfMonth(month, year);
            return new Date(`${month} ${lastMonthDay}, ${year}`);
        }
    };

    const parseItemDateIfEndDateFilterIsSet = (dateString) => {
        const [year, month, day] = dateString.split(' ');
        if (day) {
            // Use the specified day if exists
            return new Date(`${month} ${day}, ${year}`);
        } else {
            // If the day for the item is not specified and the 'end date' filter is set by a user,
            // set it to the first day of the month to include this item in the results.
            return new Date(`${month} 1, ${year}`);
        }
    };

    const fromDate = from ? parseFromToDate(from) : null;
    const toDate = to ? parseFromToDate(to) : null;

    if (from && to) {
        const checkDate = parseItemDateIfEndDateFilterIsSet(check);
        return checkDate >= fromDate && checkDate <= toDate;
    } else if (from && !to) {
        const checkDate = parseItemDateIfEndDateFilterIsNotSet(check);
        return checkDate >= fromDate;
    } else if (!from && to) {
        const checkDate = parseItemDateIfEndDateFilterIsSet(check);
        return checkDate <= toDate;
    }
    return true;
}


// Comparison function for sorting by weapon platform
function compareByPlatform(a, b) {
    if (a.platform < b.platform) {
        return -1;
    }
    if (a.platform > b.platform) {
        return 1;
    }
    return 0;
}

// Functions for info pop-up
function showInfoPopup() {
    var popup = document.getElementById("infoPopup");
    popup.style.display = "block";
}

function hideInfoPopup() {
    var popup = document.getElementById("infoPopup");
    popup.style.display = "none";
}

// Getting dropdown elements from the DOM
const weaponPlatformDropdown = document.getElementById('weaponPlatformDropdown');
const modelDropdown = document.getElementById('modelDropdown');
const countryDropdown = document.getElementById('countryDropdown');

// Function for adding unique weapon platforms/models of equipment
function addUniqueOptions(dropdown, defaultValue, options) {
    // Clearing current options
    dropdown.innerHTML = '';

    // Adding a default value to the dropdown
    const defaultOption = document.createElement('option');
    defaultOption.value = defaultValue;
    defaultOption.text = 'All';
    dropdown.appendChild(defaultOption);

    // Adding unique weapon platforms/models
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

// Updating the dropdown with models based on the selected weapon platform
function updateModelDropdown(selectedWeaponPlatform) {
    const models = equipments
        .filter(equipment => selectedWeaponPlatform === 'All' || equipment.platform === selectedWeaponPlatform)
        .map(equipment => equipment.model);

    addUniqueOptions(modelDropdown, 'All', models);
}

// Initializing the dropdown for equipment weapon platforms
addUniqueOptions(weaponPlatformDropdown, 'All', equipments.map(equipment => equipment.platform));

// Initializing the dropdown with all models
addUniqueOptions(modelDropdown, 'All', equipments.map(equipment => equipment.model));

// Adding an event handler for the dropdown of equipment weapon platforms
weaponPlatformDropdown.addEventListener('change', function () {
    const selectedWeaponPlatform = this.value;
    updateModelDropdown(selectedWeaponPlatform);
});

// Applying all available filters
function applyFilters() {
    const weaponPlatform = document.getElementById('weaponPlatformDropdown').value;
    const model = document.getElementById('modelDropdown').value;
    const state = document.getElementById('stateDropdown').value;
    const sovietUnion = document.getElementById('sovietUnion').checked;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value

    const filteredResultsUkraine = equipments.filter(item =>
        item.side === 'Ukraine' && (sovietUnion ? item.isSovietUnion === true : true) &&
        (weaponPlatform === 'All' || item.platform === weaponPlatform) &&
        (model == 'All' || item.model === model) &&
        (state === 'allStates' || item.state.toLowerCase() === state) &&
        (dateCheck(startDate, endDate, item.date))
    );

    const filteredResultsRussia = equipments.filter(item =>
        item.side === 'Russia' && (sovietUnion ? item.isSovietUnion === true : true) &&
        (weaponPlatform === 'All' || item.platform === weaponPlatform) &&
        (model === 'All' || item.model === model) &&
        (state === 'allStates' || item.state.toLowerCase() === state) &&
        (dateCheck(startDate, endDate, item.date))
    );

    const filteredDataContainerUkraine = document.getElementById('ukrLosses');
    filteredDataContainerUkraine.innerHTML = '';
    const filteredDataContainerRussia = document.getElementById('rusLosses');
    filteredDataContainerRussia.innerHTML = '';


    const amountUkraine = filteredResultsUkraine.length;
    const amountRussia = filteredResultsRussia.length;

    if (amountUkraine === 0) {
        const noResultsElement = document.createElement('div');
        noResultsElement.textContent = 'No results found.';
        filteredDataContainerUkraine.appendChild(noResultsElement);
    }
    else {
        filteredResultsUkraine.sort(compareByPlatform);
        filteredResultsUkraine.forEach(item => {
            const itemElement = document.createElement('div');
            const sovietUnion = item.isSovietUnion ? 'yes' : 'no';
            itemElement.textContent = `${item.platform}, ${item.model}, is Soviet-Union: ${sovietUnion}, ${item.date}, ${item.state}`;
            filteredDataContainerUkraine.appendChild(itemElement);
        })
        const itemElement = document.createElement('div');
        itemElement.textContent = `Total: ${amountUkraine}`;
        filteredDataContainerUkraine.appendChild(itemElement);
    };

    if (amountRussia === 0) {
        const noResultsElement = document.createElement('div');
        noResultsElement.textContent = 'No results found.';
        filteredDataContainerRussia.appendChild(noResultsElement);
    }
    else {
        filteredResultsRussia.sort(compareByPlatform);
        filteredResultsRussia.forEach(item => {
            const itemElement = document.createElement('div');
            const sovietUnion = item.isSovietUnion ? 'yes' : 'no';
            itemElement.textContent = `${item.platform}, ${item.model}, is Soviet-Union: ${sovietUnion}, ${item.date}, ${item.state}`;
            filteredDataContainerRussia.appendChild(itemElement);
        })
        const itemElement = document.createElement('div');
        itemElement.textContent = `Total: ${amountRussia}`;
        filteredDataContainerRussia.appendChild(itemElement);
    };
}

document.getElementById("checkLosses").onclick = applyFilters;
