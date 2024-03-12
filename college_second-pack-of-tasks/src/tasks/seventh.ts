import "../style.css";
 
//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, 
//следующего за точкой.
document.querySelector<HTMLDivElement>("#seventh")!.innerHTML = `
  <div class="seventh">
    <h1>7 задание</h1> 
    <p>Разработайте сценарий для веб-страницы, который проверяет
    введенный текст на соответствие фамилии и инициалов (использовать
    регулярные выражения).</p>
    <input type="text" id="inputText" placeholder="Иванов И.И.  ">
    <button id="checkButton">Проверить</button>
    <div id="resultDiv"></div>
    
  </div>
`; 

 
const inputText = document.getElementById("inputText") as HTMLInputElement;
const checkButton = document.getElementById("checkButton") as HTMLButtonElement;
const resultDiv = document.getElementById("resultDiv") as HTMLDivElement;

checkButton.addEventListener("click", () => {
  const text = inputText.value.trim();
  const nameRegex = /^[А-ЯЁ][а-яё]+\s[A-ЯЁ]\.[А-ЯЁ]\.$/;

  if (!text) {
    resultDiv.textContent = "Пожалуйста, введите текст";
    resultDiv.style.color = "red";
  } else if (nameRegex.test(text)) {
    resultDiv.textContent = "Текст соответствует фамилии и инициалам";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Текст не соответствует фамилии и инициалам";
    resultDiv.style.color = "red";
  }
});
