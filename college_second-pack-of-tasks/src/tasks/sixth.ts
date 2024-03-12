import "../style.css";
 
//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, 
//следующего за точкой.
document.querySelector<HTMLDivElement>("#sixth")!.innerHTML = `
  <div class="Sixth">
  <h1>Шестое задание</h1> 
  <p>(начните вводить текст) Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова, следующего за точкой.</p>
    <textarea id="textareaSix"></textarea>
     <ul id="sentences"></ul>
  </div>
`; 

const textareaSix: HTMLTextAreaElement = document.getElementById('textareaSix') as HTMLTextAreaElement;
textareaSix.oninput = function(){
  splitTextSix();
}

function splitTextSix(): void {
  const textareaValue = textareaSix.value;
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