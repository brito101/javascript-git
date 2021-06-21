export default function openingHours() {
    const operation = document.querySelector('[data-week]');

    const dayWeek = operation.dataset.week.split(',').map(Number);
    const dayHour = operation.dataset.hours.split(',').map(Number);

    const dateNow = new Date();

    const dayNow = dateNow.getDay();
    const hourNow = dateNow.getHours();
    
    const openWeek = dayWeek.indexOf(dayNow) !== -1;
    
    const openHour = (hourNow >= dayHour[0] && hourNow < dayHour[1]);
    
    if(openWeek && openHour) {
        operation.classList.add('open');
    }

}