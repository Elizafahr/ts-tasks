import "../style.css";

//Задача2. Разработайте сценарий для веб-страницы, который формирует корзину выбранного посетителем товара.
//У посетителя есть возможность добавить товар в корзину, удалить товар, выбрать валюту, просмотреть стоимость
//выбранного товара и общую стоимость покупки.

document.querySelector<HTMLDivElement>("#second")!.innerHTML = `
  <div class="main">
  <h1>Второе задание</h1> 

  <div class="shop">
   <h3>Товары в магазине</h3>
   <div id="items">
      <!-- здесь будет отображаться список товаров в магазине -->
   </div>
  </div>

   <DIV class="cart">
   <h3>Товары в карзине</h3>

    <div id="total">
        <!-- здесь будет отображаться общая стоимость покупки -->
      </div>
<div class="currency">
        <label for="currency-select">Выберите валюту:</label>
        <select id="currency-select">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="rub">RUB</option>
        </select>
      </div>
      <div id="cart-items">
        <!-- здесь будет отображаться список товаров в корзине -->
      </div>
      
    </DIV>
    <div>
     </div>

  </div>
`;
interface Item {
  name: string;
  price: number;
}

interface Cart {
  currency: string;
  items: Item[];
}

// Создадим переменные для хранения данных и элементов страницы.
let cart: Cart = {
  currency: "usd",
  items: [
    { name: "Товар 1", price: 10 },
    { name: "Товар 2", price: 20 },
    { name: "Товар 3", price: 30 },
  ],
};

const itemsDiv = document.getElementById("items")!;
const cartItemsDiv = document.getElementById("cart-items")!;
const currencySelect = document.getElementById(
  "currency-select"
) as HTMLSelectElement;
const totalDiv = document.getElementById("total")!;

// Функция, которая отобразит список товаров в магазине.
function renderItems(): void {
  itemsDiv.innerHTML = "";

  cart.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "card";

    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = item.name;
    titleDiv.className = "card-title";
    itemDiv.appendChild(titleDiv);

    const priceDiv = document.createElement("div");
    priceDiv.innerHTML = `${item.price} ${cart.currency}`;
    priceDiv.className = "card-price";

    const addButton = document.createElement("button");
    addButton.innerHTML = "Добавить в корзину";
    addButton.addEventListener("click", () => {
      addItemToCart(item);
    });

    itemDiv.appendChild(priceDiv);
    itemDiv.appendChild(addButton);

    itemsDiv.appendChild(itemDiv);
  });
}

// Функция, которая отобразит список товаров в корзине.
function renderCartItems(): void {
  cartItemsDiv.innerHTML = "";

  cart.items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item card";

    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = item.name;
    titleDiv.className = "card-title";
    itemDiv.appendChild(titleDiv);

    const priceDiv = document.createElement("div");
    priceDiv.innerHTML = `${item.price} ${cart.currency}`;
    priceDiv.className = "card-price";

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Удалить из корзины";
    removeButton.addEventListener("click", () => {
      removeItemFromCart(item);
    });

    itemDiv.appendChild(priceDiv);
    itemDiv.appendChild(removeButton);

    cartItemsDiv.appendChild(itemDiv);
  });
}

// Функция, которая добавит товар в корзину.
function addItemToCart(item: Item): void {
  cart.items.push(item);
  renderCartItems();
  updateTotal();
}

// Функция, которая удалит товар из корзины.
function removeItemFromCart(item: Item): void {
  const index = cart.items.indexOf(item);
  if (index > -1) {
    cart.items.splice(index, 1);
  }
  renderCartItems();
  updateTotal();
}

// Функция, которая рассчитает общую стоимость покупки.
function calculateTotal(): number {
  let total = 0;

  cart.items.forEach((item) => {
    total += item.price;
  });

  return total;
}

// Функция, которая обработает изменение валюты.
function changeCurrency(): void {
  cart.currency = currencySelect.value;

  renderItems();
  renderCartItems();
  updateTotal();
}

// Функция, которая обновит отображение общей стоимости покупки.
function updateTotal(): void {
  const total = calculateTotal();
  totalDiv.innerHTML = `Общая стоимость: ${total} ${cart.currency}`;
}

renderItems();
renderCartItems();
updateTotal();

// Добавляем обработчик события для select элемента.
currencySelect.addEventListener("change", changeCurrency);
