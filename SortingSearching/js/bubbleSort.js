function sortBubbleSort() {
  // set delay to zero
  c_delay = 0;
  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);
  // hide nav-bar
  var navBar = document.getElementById("navigation");
  //navBar.style.display = "none";

  //disable buttoon

  var bubbleSortBtn = document.getElementById("Bubble");
  bubbleSortBtn.disabled = true;
  bubbleSortBtn.classList.add("selected");

  // make btn dive unclickble
  document.getElementById("sorting-btns").style.pointerEvents = "none";
  document.getElementById("navigation").style.pointerEvents = "none";

  //add complexity
  document.getElementById("complexity").innerHTML = `<li>
    <span>Worst Case : </span>
    <span style="font-weight: 800">O( n² )</span>
  </li>
  <li>
    <span>Best Case : </span>
    <span style="font-weight: 800">O( n )</span>
  </li>
  <li>
    <span>Average Case : </span>
    <span style="font-weight: 800">O( n² )</span>
  </li>`;

  // add algorithm
  document.getElementById("algorithm").innerHTML = `
  <li>
  <pre> 
  <span id="declaration">begin BubbleSort(list)</span>
   <span id="loop1">for all elements of list</span>
    <span id="loop">for all elements of list</span>
     <span id="condition">if ( list[i] > list[i+1] )</span>    
      <span id="swap">swap( list[i] , list[i+1] )</span>
     <span id="endif">end if</span>   
    <span id="endfor">end for</span>         
   <span id="endfor1">end for</span>  
  <span id="endAlgo">end BubbleSort</span>
  </pre>
  </li>`;

  //Taking all algo lines in variable
  var line1 = document.getElementById("declaration");
  var line2 = document.getElementById("loop1");
  var line3 = document.getElementById("loop");
  var line4 = document.getElementById("condition");
  var line5 = document.getElementById("swap");

  ///starting visulizetion

  // adding status text and highlight of algo
  document.getElementById("text").innerHTML = "Bubble Sort Visualization";
  line1.classList.add("highlight");

  /// Beginning of for loop
  window.setTimeout(() => {
    line1.classList.remove("highlight");
    statusCard.innerHTML = "<br>";
    line2.classList.add("highlight");
    statusCard.innerHTML = " outer for loop";
  }, (c_delay += delay_time));

  window.setTimeout(() => {
    line2.classList.remove("highlight");
    statusCard.innerHTML = "<br>";
  }, c_delay + delay_time);

  for (let index = 0; index < totalBars - 1; index++) {
    //adding status and highlight
    let flag = 0;
    window.setTimeout(() => {
      line3.classList.add("highlight");
      statusCard.innerHTML = "inner for loop";
    }, (c_delay += delay_time));

    //Ramoving status and highlight

    window.setTimeout(() => {
      line3.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);

    //Inner for loop

    for (let j = 0; j < totalBars - index - 1; j++) {
      //Adding status , highlight ,and changing colors of bars

      window.setTimeout(() => {
        line4.classList.add("highlight");
        let STATUS = "Comparing " + getValue(j) + " and " + getValue(j + 1);
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));
      change_color(j, j + 1, "#ffd54f", c_delay);
      //Ramoving statu ,highlight

      window.setTimeout(() => {
        line4.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);

      //If loop to check condition

      if (dataList[j] > dataList[j + 1]) {
        flag = 1;
        ///Swapping daata in array
        var temp = dataList[j + 1];
        dataList[j + 1] = dataList[j];
        dataList[j] = temp;

        //Adding status , highlight , changing colors of bars and swapping the bars
        window.setTimeout(() => {
          let STATUS = "Swapping " + getValue(j) + " and " + getValue(j + 1);
          line5.classList.add("highlight");
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));

        swapper(j, j + 1, c_delay);
        change_color(j, j + 1, "#66bb6a", c_delay);

        //Ramoving statu ,highlight
        window.setTimeout(() => {
          statusCard.innerHTML = "</br>";
          line5.classList.remove("highlight");
        }, c_delay + delay_time);
      }

      ///Changing color back to normal
      change_color(j, j + 1, "#ffffff", c_delay + delay_time);

      // change_color(j, j + 1, "#7048e8");
      window.setTimeout(() => {
        line3.classList.add("highlight");
        statusCard.innerHTML = "inner for loop";
      }, (c_delay += delay_time));

      //Ramoving status and highlight

      window.setTimeout(() => {
        line3.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
    }

    //changing color of sorted bar

    change_color_single_div(
      totalBars - index - 1,
      "#5f3dc4",
      c_delay + delay_time
    );
    if (flag == 0) {
      break;
    }

    /// Beginning of for loop
    window.setTimeout(() => {
      line1.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
      line2.classList.add("highlight");
      statusCard.innerHTML = " outer for loop";
    }, (c_delay += delay_time));

    window.setTimeout(() => {
      line2.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
  }

  window.setTimeout(() => {
    bubbleSortBtn.classList.remove("selected");
    bubbleSortBtn.disabled = false;
    let STATUS = "SORTED!!!";
    statusCard.innerHTML = STATUS;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
    document.getElementById("navigation").style.pointerEvents = "auto";
  }, c_delay + delay_time);

  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#5f3dc4", c_delay + delay_time);
}
