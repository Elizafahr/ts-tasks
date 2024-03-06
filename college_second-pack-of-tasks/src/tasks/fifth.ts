import "../style.css";

//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова,
//следующего за точкой.
document.querySelector<HTMLDivElement>("#fifth")!.innerHTML = `
<div class="container">
  <h1>5 задание</h1> 
  <p>(начните вводить текст) Разработайте сценарий для веб-страницы, который сможет осуществлять поиск по образцу и замену найденного фрагмента на заданный. Предусмотрите подсчет числа замен.</p>
  <textarea id="textarea" placeholder="Введите свой текст"></textarea>
  <br>
  <input type="text" id="change"  placeholder="Что заменить"/>
  <input type="text" id="changeOn"  placeholder="Заменить на"/>
  <ul id="result"></ul>
  <button id="check">check</button>
</div>
`;

const textarea: HTMLTextAreaElement = document.querySelector("#textarea") as HTMLTextAreaElement;
const changeText: HTMLInputElement = document.querySelector("#change") as HTMLInputElement;
const button: HTMLButtonElement = document.querySelector("#check") as HTMLButtonElement;
const changeOn: HTMLInputElement = document.querySelector("#changeOn") as HTMLInputElement;
const result: HTMLUListElement = document.querySelector("#result") as HTMLUListElement;

textarea.addEventListener("input", splitText);
button.addEventListener("click", findAndReplaceText);

function splitText(): Array<string> {
  const textareaValue: string = textarea.value;
  let arr: Array<string> = [];
  const splitted: Array<string> = textareaValue.split(" ");
  splitted.forEach(element => {
    arr.push(element.trim());
  });
  return arr;
}

function findAndReplaceText() {
  const textareaValue: string = textarea.value;
  const arr: Array<string> = splitText();
  let replacedCount: number = 0;

  const newText: string = arr
    .map(word => {
      if (word === changeText.value) {
        replacedCount++;
        return changeOn.value;
      } else {
        return word;
      }
    })
    .join(" ");

  if (replacedCount > 0) {
    textarea.value = newText.trim();

    result.innerHTML = ` <li>Число замен: ${replacedCount}</li>`;
  } else {
    result.innerHTML = "<li>Написанного слова в тексте нет</li>";
  }
}
