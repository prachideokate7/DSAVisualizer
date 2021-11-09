function linearSearch() {
  let value = document.getElementById("searchValue").value;
  // set delay to zero
  c_delay = 0;
  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);
  if (value) {
    value = Number(value);
    // hide nav-bar
    var navBar = document.getElementById("navigation");
    //navBar.style.display = "none";

    //disable buttoon

    var linearSearchBtn = document.getElementById("linSearch");
    linearSearchBtn.disabled = true;
    linearSearchBtn.classList.add("selected");

    // make btn dive unclickble
    document.getElementById("sorting-btns").style.pointerEvents = "none";
    document.getElementById("navigation").style.pointerEvents = "none";

    //add complexity
    document.getElementById("complexity").innerHTML = `<li>
    <span>Worst Case : </span>
    <span style="font-weight: 800">O( n )</span>
  </li>
  <li>
    <span>Best Case : </span>
    <span style="font-weight: 800">O(1)</span>
  </li>
  <li>
    <span>Average Case : </span>
    <span style="font-weight: 800">O( n )</span>
  </li>`;

    // add algorithm
    document.getElementById("algorithm").innerHTML = `
  <li>
  <pre> 
  <span id="declaration">begin LinearSearch(list ,val)</span>
   <span id="loop">for all elements of list</span>
     <span id="condition">if (list[i] == val)</span> 
      <span id="return1">return i</span>   
     <span id="endif">end if</span>   
   <span id="endfor">end for</span> 
   <span id="return2">return -1</span>  
  <span id="endAlgo">end BubbleSort</span>
  </pre>
  </li>`;

    //Taking all algo lines in variable
    var line1 = document.getElementById("declaration");
    var line2 = document.getElementById("loop");
    var line3 = document.getElementById("condition");
    var line4 = document.getElementById("return1");
    var line5 = document.getElementById("return2");

    ///starting visulizetion

    // adding status text and highlight of algo
    document.getElementById("text").innerHTML = "Lineaer Search Visualization";
    line1.classList.add("highlight");

    /// Beginning of for loop
    window.setTimeout(() => {
      line1.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
      line2.classList.add("highlight");
      statusCard.innerHTML = "for loop";
    }, (c_delay += delay_time));

    window.setTimeout(() => {
      line2.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);

    let flag = 0;
    for (let index = 0; index < totalBars; index++) {
      window.setTimeout(() => {
        line3.classList.add("highlight");
        let STATUS = "Comparing " + getValue(index) + " and " + value;
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));

      change_color_single_div(index, "#ffd54f", c_delay);

      //Ramoving statu ,highlight
      window.setTimeout(() => {
        line3.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
      change_color_single_div(index, "#ffffff", c_delay + delay_time);

      if (dataList[index] == value) {
        window.setTimeout(() => {
          line4.classList.add("highlight");
          let STATUS = `${value} found at index ${index}`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));
        flag = 1;
        change_color_single_div(index, "#5f3dc4", c_delay);
        break;
      }

      /// Beginning of for loop
      window.setTimeout(() => {
        line1.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
        line2.classList.add("highlight");
        statusCard.innerHTML = "for loop";
      }, (c_delay += delay_time));

      window.setTimeout(() => {
        line2.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
    }

    if (flag == 0) {
      window.setTimeout(() => {
        line5.classList.add("highlight");
        let STATUS = `${value} not found !!!`;
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));
    }
    ///End of looping
    window.setTimeout(() => {
      linearSearchBtn.classList.remove("selected");
      linearSearchBtn.disabled = false;
      document.getElementById("sorting-btns").style.pointerEvents = "auto";
      document.getElementById("navigation").style.pointerEvents = "auto";
    }, c_delay + delay_time);
  }
}
