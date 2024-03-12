import "../style.css";
 
//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, 
//следующего за точкой.
document.querySelector<HTMLDivElement>("#eigth")!.innerHTML = `
<div class="eight">
  <h1>8 задание</h1> 
  <p>Напишите сценарий, который по введенному дню рождения
  высчитывает и выводит возраст человека.</p>
  <label for="dob">Введите дату рождения: </label>
  <input type="date" id="dob">
  <button id="checkEigth" onclick="calculateAge()">Получить возраст</button>
  <p id="age"></p>
</div>
`; 
const checkEigth: HTMLButtonElement = document.getElementById('checkEigth') as HTMLButtonElement;
checkEigth.onclick = function(){
  calculateAge();
}

function calculateAge() {
  const dobInput = document.getElementById('dob') as HTMLInputElement;
  const dob = new Date(dobInput.value);
  const today = new Date();

  if (dob > today) {
    alert("Введите корректную дату рождения");
    return;
  }

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  alert( "Ваш возраст: " + age + " лет");
}