// https://flatpickr.js.org/getting-started/

flatpickr("#startDate", {
    enableTime: false,
    dateFormat: "Y-M-d",
    placeholder: "Select a date",
    theme: "material_red"
});

flatpickr("#endDate", {
    enableTime: false,
    dateFormat: "Y-M-d",
    theme: "material_red",
    defaultDate: "today"
});
