let dH,
    dW,
    snow_letter = "*",
    snow_min_size = 8,
    snow_max_size = 50,
    snow_max_count = 35,
    snow_speed = .5,
    snow_color = ["#33F", "#55F", "#77F", "#99F", "#BBF", "#DDF"],
    snow_font = ["Dela Gothic One", "Playfair Display", "Train One"],
    FPS = 60,
    snow = [],
    wiggle_speed = [],
    wiggle_value = [],
    wiggle = [];
function random_value(n) {
    return Math.floor(n * Math.random())
}
function init_snow() {
    dW = document.body.clientWidth, dH = document.body.clientHeight;
    let n = snow_max_size - snow_min_size;
    for (i = 0; i < snow_max_count; i++)
        wiggle[i] = 15 + 15 * Math.random(), wiggle_speed[i] = .03 + Math.random() / 10, wiggle_value[i] = 0, snow[i] = document.getElementById("snowflake_" + i), snow[i].style.fontFamily = snow_font[random_value(snow_font.length)], snow[i].size = random_value(n) + snow_min_size, snow[i].style.fontSize = snow[i].size + "px", snow[i].style.color = snow_color[random_value(snow_color.length)], snow[i].speed = snow_speed * snow[i].size / 5, snow[i].pos_x = random_value(dW - snow[i].size), snow[i].pos_y = random_value(2 * dH - dH - 2 * snow[i].size), snow[i].style.left = snow[i].pos_x + "px", snow[i].style.top = snow[i].pos_y + "px";
    move_snow()
}
function move_snow() {
    for (dW = document.body.clientWidth, dH = document.body.clientHeight, i = 0; i < snow_max_count; i++)
        snow[i].pos_y += snow[i].speed, wiggle_value[i] += wiggle_speed[i], snow[i].style.top = snow[i].pos_y + "px", snow[i].style.left = snow[i].pos_x + wiggle[i] * Math.sin(wiggle_value[i]) + "px", (snow[i].pos_y >= dH - 1.3 * snow[i].size || parseInt(snow[i].style.left) > dW - 3 * wiggle[i]) && (snow[i].pos_x = random_value(dW - snow[i].size), snow[i].pos_y = 0, snow[i].hidden = !snow_is_running);
    setTimeout(move_snow, 1e3 / FPS)
}
for (z = 0; z < snow_max_count; z++)
    document.write(`<span id="snowflake_${z}"\n                      style="position:absolute;\n                             top:-${snow_max_size}px;">${snow_letter}</span>`);
let snow_is_started = !1,
    snow_is_running = !1;
$("#title").bind("click", (() => {snow_is_started || (init_snow(), snow_is_started = !0), snow_is_running = !snow_is_running}));