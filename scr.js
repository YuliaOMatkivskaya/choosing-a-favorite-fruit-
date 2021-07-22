const catalog = document.querySelector(".catalog");
const assortiment = ["апельсины", "яблоки", "груши", "киви", "виноград", "лимоны"];

for (let fruit in assortiment) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerHTML = assortiment[fruit];
    cell.style.left = `${150+fruit*210}px`;
    cell.style.top = `50px`;
    catalog.append(cell);
}

const list = document.createElement("div");
list.className = "list";
list.innerText = "Выберите ваш любимый вид фруктов";
list.style.left = `250px`;
list.style.top = `250px`;
catalog.append(list);


const collection = document.querySelectorAll(".cell");


const added = document.createElement("div");
added.className = "list";
added.style.left = `250px`;
added.style.top = `400px`;
added.style.color = "white"
catalog.append(added);

for (let div of collection) {
    div.addEventListener("click", function () {
        added.textContent = this.textContent;
    });
}