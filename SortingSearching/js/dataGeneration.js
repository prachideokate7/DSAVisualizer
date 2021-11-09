// function called when taking data as list
var max = Number.MIN_VALUE;

function getData() {
  // clearing containeer
  removeAllChildNodes(parent);
  log.style.display = "none";

  //input from user as comma seperated list
  var data = document.getElementById("inputNumber").value;
  var list = [];
  list = data.split(",");
  console.log(list);

  document.getElementById("lengthStatus").innerHTML = list.length;
  lenghtSlider.value = list.length;
  // converting list to numbers
  list = list.map(number);
  createBars(list);
  var max = Number.MIN_VALUE;
  for (let index = 0; index < list.length; index++) {
    var element = list[index];
    if (element > max) {
      max = element;
    }
  }

  document.getElementById("rangeStatus").innerHTML = max;
  rangeSlider.value = max;
}

// creating dynamic bars from list
function createBars(list) {
  var background = document.getElementById("container");

  // main list
  dataList = [];
  list.forEach((element) => {
    dataList.push(element);
  });
  console.log(dataList);

  // finding largest element
  for (let index = 0; index < list.length; index++) {
    var element = list[index];
    if (element > max) {
      max = element;
    }
  }

  // finding constant for height
  var constant = 20 / max;

  // iterating over array to create bars
  var cnt = 0;
  list.forEach((element) => {
    // crating div dynamically
    var div = document.createElement("div");

    div.setAttribute("class", "pole");

    div.setAttribute("id", cnt.toString());
    cnt++;
    totalBars = cnt;
    // setting up height
    var height = constant * element;
    var strHeight = height.toString() + "rem";
    div.style.height = strHeight;
    var span = document.createElement("span");
    span.setAttribute("class", "barSize");
    span.innerHTML = element;

    // appending elements
    div.appendChild(span);
    background.appendChild(div);
  });
}

//function to generte data
function generateData(length = random(20), range = random(99)) {
  log.style.display = "none";

  document.getElementById("rangeStatus").innerHTML = range;
  rangeSlider.value = range;
  document.getElementById("lengthStatus").innerHTML = length;
  lenghtSlider.value = length;
  removeAllChildNodes(parent);
  var list = [];
  for (let index = 0; index < length; index++) {
    var number = random(range);
    list.push(number);
  }
  createBars(list);
  // document.getElementById("sort").disabled = false;
}

window.generateData(10, 10);
