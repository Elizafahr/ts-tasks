import "../style.css";

//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова,
//следующего за точкой.
document.querySelector<HTMLDivElement>("#nine")!.innerHTML = `
<div class="nine">
<h1>9 задание</h1> 
<p>Напишите сценарий, который определяет число дней между двумя
введенными датами.</p>
<form id="dateForm">
<label for="date1">Первая дата:</label>
<input type="date" id="date1" required>

<br>

<label for="date2">Вторая дата:</label>
<input type="date" id="date2" required>

<br>

<input type="submit" value="Вычислить">
</form>

<div id="resultNine"></div>
</div>
`;
 

function getDaysDifference(date1: string, date2: string): number {
  const oneDay = 24 * 60 * 60 * 1000; // количество миллисекунд в одном дне

  // Преобразование введенных дат в объекты Date
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  // Вычисление разницы между датами в днях
  const diffDays = Math.round(
    Math.abs((startDate.getTime() - endDate.getTime()) / oneDay)
  );

  return diffDays;
}

document.querySelector<HTMLFormElement>("#dateForm")!.addEventListener("submit", function(event){
  event.preventDefault(); // отмена отправки формы

   const date1 = (document.querySelector<HTMLInputElement>("#date1") as HTMLInputElement).value;
  const date2 = (document.querySelector<HTMLInputElement>("#date2") as HTMLInputElement).value;

   const diffDays = getDaysDifference(date1, date2);

   document.querySelector<HTMLDivElement>("#resultNine")!.innerHTML = `Разница между датами: ${diffDays} дней`;
}); 