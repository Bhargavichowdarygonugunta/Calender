const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month-btn');
const nextMonthBtn = document.getElementById('next-month-btn');
const calendarBody = document.getElementById('calendar-body');

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderCalendar() {
    monthYear.textContent = `${months[month]} ${year}`;
    calendarBody.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.textContent = '';
            } else if (date > lastDate) {
                cell.textContent = '';
            } else {
                cell.textContent = date;
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}
prevMonthBtn.addEventListener('click', () => {
    if (month === 0) {
        month = 11;
        year--;
    } else {
        month--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    if (month === 11) {
        month = 0;
        year++;
    } else {
        month++;
    }
    renderCalendar();
});

renderCalendar();

