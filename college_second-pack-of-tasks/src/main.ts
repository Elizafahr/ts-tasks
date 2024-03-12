import "./style.css";

//Разработайте сценарий для веб-страницы, который переведет в верхний регистр первую букву каждого слова,
//следующего за точкой.
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div> 
<h1>  11 Задание</h1>
<header id="banner">
  <h1 id="header">Заголовок страницы</h1>
</header>

<nav class="sidebar">
  <ul>
    <li><a href="index.html">Главная</a></li>
    <li><a href="about.html">О нас</a></li>
    <li><a href="contact.html">Контакты</a></li>
  </ul>
</nav>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

</div>
`;
 
//11
// Получение элементов баннера и навигационной панели
const banner:HTMLButtonElement = document.getElementById('banner') as HTMLButtonElement;
const headerTitle:HTMLTitleElement = document.getElementById('header') as HTMLTitleElement;
const links = document.querySelectorAll('.sidebar a');

// Установка заголовка страницы в баннере
headerTitle.textContent = document.title;

// Выделение текущей страницы в навигационной панели
const currentPath = window.location.pathname;
links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// Обработка события клика на баннере
banner.addEventListener('click', function() {
  alert('клик!');
});