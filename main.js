const calendarButton = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');

const calendarDays = 24;

const openDoor = (path,event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`
    event.target.style.opacity = '0';
    event.target.style.backgroundColor = '#521751';
}

const createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement('div');
        const calendarText = document.createElement('div');

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = 'door' + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarText.classList.add('text');
        calendarText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarText);

        imageNumber = i + 1
        let imagePath = `./images/${imageNumber}.jpg`;

        calendarText.addEventListener('click', openDoor.bind(this, imagePath));


    }
}

calendarButton.addEventListener('click', createCalendar)