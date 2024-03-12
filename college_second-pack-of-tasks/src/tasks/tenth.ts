import "../style.css";
 
document.querySelector<HTMLDivElement>("#tenth")!.innerHTML = `
<div class="tenth">
  <h1>10 задание</h1>  
  <label for="month">Выберите месяц:</label>
  <select id="month">
  <option value="0">Январь</option>
  <option value="1">Февраль</option> 
  <option value="2">март</option>
  <option value="3">апрель</option>
  <option value="4">май</option>
  <option value="5">июнь</option>
  <option value="6">июль</option>
  <option value="7">авг</option>
  <option value="3">сентябрь</option>
  <option value="4">октябрь</option>
  <option value="5">ноябрь</option>
  <option value="6">декабрь</option>  
  </select>
  <label for="year">Выберите год:</label>
  <input type="number" id="year" value="2024">
  <br>
  <button id="calBtn">Показать календарь</button>
  <br>
  <table id="calendar">
   </table>
</div>
`;

const calBtn: HTMLButtonElement = document.getElementById('calBtn') as HTMLButtonElement;
calBtn.onclick = function(){
  generateCalendar();
}

function generateCalendar() : void{
  const monthSelect = document.getElementById('month') as HTMLSelectElement;
  const yearInput = document.getElementById('year') as HTMLInputElement;
  const selectedMonth = +monthSelect.value; // Получаем выбранный месяц (в виде числа)
  const selectedYear = +yearInput.value; // Получаем выбранный год
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // Получаем количество дней в месяце
  const calendarTable = document.getElementById('calendar') as HTMLTableElement;

  // Генерируем заголовок таблицы
  calendarTable.innerHTML = `<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>`;

  let date = 1;
  for (let i = 0; i < 7; i++) {
    const row = calendarTable.insertRow();
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < new Date(selectedYear, selectedMonth, 1).getDay()-1) {
        const cell = row.insertCell();
      } else if (date > daysInMonth) {
        break;
      } else {
        const cell = row.insertCell();
        cell.textContent = date.toString();
        date++;
      }
    }
  }
}