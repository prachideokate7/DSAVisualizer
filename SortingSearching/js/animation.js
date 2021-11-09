//// swapper
function swapper(id_i, id_j, time) {
  window.setTimeout(() => {
    var divi = document.getElementById(id_i.toString());

    var divj = document.getElementById(id_j.toString());

    divi.classList.add("transition");
    divj.classList.add("transition");

    var recti = divi.getBoundingClientRect();
    var rectj = divj.getBoundingClientRect();

    var tempHeight = recti.height;

    divi.style.height = rectj.height.toString() + "px";

    var tempValue = getValue(id_i);
    divi.childNodes[0].innerHTML = getValue(id_j);
    divj.childNodes[0].innerHTML = tempValue;

    divj.style.height = tempHeight.toString() + "px";
  }, time);
}

function changer(id_i, value, time) {
  window.setTimeout(() => {
    var divi = document.getElementById(id_i.toString());
    divi.classList.add("transition");
    // console.log("value " + value);
    // finding constant for height
    var constant = 20 / max;

    divi.style.height = constant * value + "rem";
    divi.childNodes[0].innerHTML = value;
  }, time);
}

// return value of child element value from id /////
function getValue(id) {
  var val = document.getElementById(id.toString()).childNodes;
  val = val[0].innerHTML;
  return Number(val);
}

//change color of elements
function change_color(id_i, id_j, color, time) {
  window.setTimeout(() => {
    var divi = document.getElementById(id_i.toString());
    var divj = document.getElementById(id_j.toString());
    divi.style.backgroundColor = color.toString();
    divj.style.backgroundColor = color.toString();
    // console.log("yes");
    // console.log(divi);
  }, time);
}

//change color of single element
function change_color_single_div(id_i, color, time) {
  window.setTimeout(() => {
    var divi = document.getElementById(id_i.toString());
    divi.style.backgroundColor = color.toString();
    // console.log("no");
    // console.log(divi);
  }, time);
}

////////////////later
function swapper200ms(id_i, id_j) {
  window.setTimeout(() => {
    var divi = document.getElementById(id_i.toString());

    var divj = document.getElementById(id_j.toString());

    divi.classList.add("transition");
    divj.classList.add("transition");

    var recti = divi.getBoundingClientRect();

    var rectj = divj.getBoundingClientRect();

    var tempHeight = recti.height;

    divi.style.height = rectj.height.toString() + "px";

    var tempValue = getValue(id_i);
    divi.childNodes[0].innerHTML = getValue(id_j);
    divj.childNodes[0].innerHTML = tempValue;

    divj.style.height = tempHeight.toString() + "px";
  }, (c_delay += 200));
}

function makePolesBlack(i, j) {
  console.log(i, j);
  window.setTimeout(() => {
    for (let index = i; index <= j; index++) {
      document.getElementById(index.toString()).style.backgroundColor =
        "#111".toString();
    }
  }, (c_delay += delay_time));
}

function makePolesHidden(i, j) {
  console.log(i, j);
  window.setTimeout(() => {
    for (let index = i; index <= j; index++) {
      document.getElementById(index.toString()).style.display = "none";
    }
  }, (c_delay += delay_time));
}
