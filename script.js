let title = "Название проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 124;
let rollback = 99;
let fullPrice = 100000;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);   

let conc = "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани";
console.log(conc);             
let conc2 = "Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани";
console.log(conc2);
console.log(screens.toLowerCase());
console.log(screens.split(", "));
let n;
n = fullPrice*(rollback/100);
console.log(n);