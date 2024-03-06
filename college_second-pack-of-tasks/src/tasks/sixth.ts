import "../style.css";
 
//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, 
//следующего за точкой.
document.querySelector<HTMLDivElement>("#sixth")!.innerHTML = `
  <div class="Sixth">
  <h1>Шестое задание</h1> 
  <p>(начните вводить текст) Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, следующего за точкой.</p>
    <textarea id="textarea"></textarea>
     <ul id="sentences"></ul>
  </div>
`; 

const textarea: HTMLTextAreaElement = document.getElementById('textarea') as HTMLTextAreaElement;
textarea.oninput = function(){
  splitText();
}

function splitText(): void {
  const textareaValue = textarea.value;
  let arr : Array<string> = [];
  var splitted = textareaValue.split("."); 
  splitted.forEach(element => {
    arr.push(element.trim());
  });
  out(arr);
}

function out(arr: Array<string>): void {
  const sentencesList = document.querySelector<HTMLUListElement>("#sentences")!;
  sentencesList.innerHTML = "";
  arr.forEach(element => {
    const sentenceItem = document.createElement("li");
    sentenceItem.innerText = capitalizeFirstLetter(element);
    sentencesList.appendChild(sentenceItem);
  });
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}