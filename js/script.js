
let title = document.querySelector("#title"),
    adv = document.querySelector(".adv"),
    prompt1 = document.querySelector("#prompt"),
    menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu-item"),
    menuLi = document.createElement("li");


menu.insertBefore(menuItem[2], menuItem[1]);

menuLi.classList.add("menu-item");
menuLi.innerHTML = "Пятый пункт";
menu.appendChild(menuLi);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

title.innerHTML = "Мы продаем только подлинную технику Apple";

adv.remove();

let quetion = prompt("Ваше отношение к технике apple","");
prompt1.innerHTML = quetion;