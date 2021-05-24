// Відображення повідомлення
function btn_1_press() {
    alert("Ви натиснули кнопку №1")
}
// Відображення вікна підтвердження
function btn_2_press() {
    let e = "";
    confirm("Ви любите морозиво?") || (e = "не "), alert(`Користувач який натиснув кнопку №2 ${e}любить морозиво`)
}
// Відображеня поля введення
function btn_3_press() {
    let e = prompt("Як вас звати?");
    e && (e = e.trim()), e || (e = "незнайомцю"), alert(`Привіт, ${e}!`)
}
// Очищення поля введення
function clear_spec_field_1() {
    document.getElementById("spec_field_1").value = ""
}
// Очищення поля введення
function clear_spec_field_2() {
    document.getElementById("spec_field_2").value = ""
}
// Переведення введеного тексту у верхній регістр
function only_big_letter(e) {
    e.value = e.value.toUpperCase()
}
// Переведення введеного тексту у нижній регістр 
function only_small_letter(e) {
    e.value = e.value.toLowerCase()
}
// Перевірка правильності заповнення форм вводу
function btn_register_press() {
    // Шукаємо поля вводу по їх id
    let e = document.getElementById("login"),
        t = document.getElementById("password_a"),
        n = document.getElementById("password_b"),
        // Отримуємо значення полів вводу
        i = e.value,
        l = t.value,
        o = n.value;
        // Перевірка заповнення поля #login...
    i ? (i = i.trim(), i ? l ? l.length < 6 ? alert("Ви ввели закороткий пароль!\nМінімальна довжина паролю - 6 символів") : o ? l === o ? alert("Реєстрація завершилася успішно") : alert("Паролі не збігаються!") : alert("Ви не повторили пароль!") : alert("Ви не ввели пароль!") : alert("Ви ввели некоректний логін!")) : alert("Ви не ввели логін!")
}

// Необхідні змінні
let added_elements = 1;
// Додавання нового елементу до списку
function add_li() {
    // Пошук списку за id
    let e = document.getElementById("editable_list"),
    // Створення нового елементу <li>
        t = document.createElement("li"),
        // Створення тексту для елементу <li>
        n = document.createTextNode(`Новий елемент списку №${added_elements}`);
        // Збільшуємо лічильник на 1
        // Додаємо текст до елемента <li>
        // Додаємо елемент <li> до списку
    added_elements++, t.appendChild(n), e.appendChild(t)
}
// Видалення останнього елементу зі списку
function remove_li() {
    // Пошук списку за id
    let e = document.getElementById("editable_list");
    // Отримання останнього дочірнього елемента
    e.lastChild;
    // Видалення останнього дочірнього елемента
    e.removeChild(e.lastChild)
}
// Прослуховування кнопок управління блоком #flex_block
function add_flex_button_listener() {
    // Шукаємо кнопки по їх id
    let e = document.getElementById("flex_direction"),
        t = document.getElementById("justify-content"),
        n = document.getElementById("align-items");
        // Додаємо прослуховування події <onclick>
    e.onclick = change_flex_direction, t.onclick = change_justify_content, n.onclick = change_align_items
}
// Необхідні змінні
let flex_direction_id = 0,
    flex_direction = ["row", "row-reverse", "column", "column-reverse"];
    // Зміна властивості <flex-direction>
function change_flex_direction(e) {
    // Шукаємо блок по id
    let t = document.getElementById("flex_block");
    // Збільшуємо лічильник
    flex_direction_id += flex_direction_id < 3 ? 1 : -3;
    // Отримуємо нове значення властивості
    let n = flex_direction[flex_direction_id];
    // Змінюємо властивість <flex-direction>
    // Змінюємо текст кнопки
    t.style.flexDirection = n, e.target.innerHTML = `flex_direction: ${n}`
}
// Необхідні змінні
let justify_content_id = 3,
    justify_content = ["center", "flex-start", "flex-end", "space-around", "space-between"];
    // Зміна властивості <justify-content>
function change_justify_content(e) {
    // Шукаємо блок по id
    let t = document.getElementById("flex_block");
    // Збільшуємо лічильник
    justify_content_id += justify_content_id < 4 ? 1 : -4;
    // Отримуємо нове значення властивості
    let n = justify_content[justify_content_id];
    // Змінюємо властивість <justify-content> 
    // Змінюємо текст кнопки
    t.style.justifyContent = n, e.target.innerHTML = `justify_content: ${n}`
}
// Змінюємо текст кнопки
let align_items_id = 0,
    align_items = ["center", "baseline", "flex-start", "flex-end", "stretch"];
    // Зміна властивості <align_items>
function change_align_items(e) {
    // Шукаємо блок по id
    let t = document.getElementById("flex_block");
    // Збільшуємо лічильник
    align_items_id += align_items_id < 4 ? 1 : -4;
    // Отримуємо нове значення властивості
    let n = align_items[align_items_id];
    // Змінюємо властивість <align_items>
    // Змінюємо текст кнопки
    t.style.alignItems = n, e.target.innerHTML = `align_items: ${n}`
}
// Необхідні змінні
let title_color_id = 1,
    title_colors = ["#F00", "#0F0", "#00F", "#FF0", "#F0F", "#0FF"];
    // Зміна кольору фону заголовку
function change_title_background() {
    // Допоміжна константа
    const e = title_colors.length - 1;
    // Шукаємо елемент по id
    let t = document.getElementById("title");
    // Змінюємо колір рамки
    t.style.borderColor = title_colors[title_color_id];
    // Допоміжна змінна
    let n = title_colors[title_color_id] + "5";
    // Змінюємо колір фону 
    // Збільшуємо лічильник
    t.style.backgroundColor = n, title_color_id += title_color_id < e ? 1 : -e
}
// Позначаємо елементи, які задовільняють умову №1
function check_condition_1() {
    select_elements($("input.test_b"))
}
// Позначаємо елементи, які задовільняють умову №2
function check_condition_2() {
    select_elements($("#cb3, #cb7"))
}
// Позначаємо елементи, які задовільняють умову №3
function check_condition_3() {
    select_elements($("#div_4 input[type='checkbox']").not(".test_z"))
}
// Позначаємо елементи, які задовільняють умову №4
function check_condition_4() {
    // Знімаємо позначки з усіх елементів
    unselect_all_elements();
    // Результат пошуку
    let e = $("[custom_atr]");
    // Перебираємо знайдені елементи
    for (let t = 0; t < e.length; t++) {
        // Отримуємо елемент
        let n = e.get(t);
            // Отримуємо значення атрибуту

        Number($(n).attr("custom_atr")) >= 25 && $(n).prop("checked", !0)
    }
}

// Позначаємо необхідні елементи
function select_elements(e) {
    unselect_all_elements();
    for (let t = 0; t < e.length; t++) {
        let n = e.get(t);
        $(n).prop("checked", !0)
    }
}
// Знімаємо позначки з усіх елементів
function unselect_all_elements() {
    let e = $("#div_4 input[type='checkbox']");
    for (let t = 0; t < e.length; t++) {
        let n = e.get(t);
        $(n).prop("checked", !1)
    }
}
function add_animation_button_listener() {
    $("#btn_timer").bind("click", start_timer), $("#btn_interval").bind("click", start_interval)
}
function start_timer() {
    $("#btn_timer").attr("value", "Анімація запуститься через 3 сек."), setTimeout((() => {$("#btn_timer").attr("value", "Запустити таймер"), start_animation()}), 3e3)
}
let intervar_run = !1;
function start_interval() {
    if (intervar_run)
        return intervar_run = !1, void $("#btn_interval").attr("value", "Запустити інтервал");
    intervar_run = !0, $("#btn_interval").attr("value", "Зупинити інтервал");
    let e = setInterval((() => {start_animation(), intervar_run || clearInterval(e)}), 3e3)
}
let animation_id = 0;
function start_animation() {
    switch (console.log(`Start animation №${animation_id}`), animation_id) {
    case 0:
        $("#img").animate({
            opacity: 0,
            left: "-39%",
            top: "25%"
        }, 500).animate({
            opacity: 1,
            top: "-25%"
        }, 500);
        break;
    case 1:
        $("#img").animate({
            opacity: 0,
            left: "0%",
            top: "0%",
            width: "40%"
        }, 500);
        break;
    case 2:
        $("#img").animate({
            opacity: 1,
            width: "128px"
        }, 500);
        break;
    case 3:
        $("#img").animate({
            opacity: 0,
            left: "40%",
            width: "16px"
        }, 500);
        break;
    case 4:
        $("#img").animate({
            opacity: .5,
            left: "-35%",
            width: "128px"
        }, 500).animate({
            opacity: 1,
            left: "0%",
            width: "128px"
        }, 500)
    }
    animation_id += animation_id < 4 ? 1 : -4
}
add_flex_button_listener(), add_animation_button_listener(), setInterval(change_title_background, 3e3);