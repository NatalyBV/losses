// https://flatpickr.js.org/getting-started/

flatpickr("#startDate", {
    enableTime: false,
    dateFormat: "Y M d",
    theme: "material_red",
    maxDate: "today",
    defaultDate: "2022 Feb 24",
    onChange: function(selectedDates, dateStr) {
        const endDatePicker = document.getElementById("endDate")._flatpickr;
        endDatePicker.set("minDate", dateStr);
    }
});

flatpickr("#endDate", {
    enableTime: false,
    dateFormat: "Y M d",
    theme: "material_red",
    maxDate: "today",
    defaultDate: "today"
});
