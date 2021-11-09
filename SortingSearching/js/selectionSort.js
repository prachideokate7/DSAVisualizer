function sortSelectionSort() {
  // set delay to zero
  c_delay = 0;
  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  //navBar.style.display = "none";

  //disable buttoon
  var selectionSortBtn = document.getElementById("Selection");
  selectionSortBtn.disabled = true;
  selectionSortBtn.classList.add("selected");

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
    <span style="font-weight: 800">O( n² )</span>
  </li>
  <li>
    <span>Average Case : </span>
    <span style="font-weight: 800">O( n² )</span>
  </li>`;

  // add algorithm
  document.getElementById("algorithm").innerHTML = `
  <li>
  <pre> 
  <span id="declaration">begin InsertioneSort(list)</span>
  <span id="loop1">for all elements of list</span>
   <span id="loop">for(j=k=i ;j<=n-2;j++)</span>
    <span id="condition">if ( list[j] < list[k] )</span>    
     <span id="assign">Assign j to k</span>
    <span id="endif">end if</span>
   <span id="endfor">end for</span>    
   <span id="swap">swap(list[i],list[k])</span>     
  <span id="endfor1">end for</span>  
 <span id="endAlgo">end InsertionSort</span>
  </pre>
  </li>`;

  //Taking all algo lines in variable
  var line1 = document.getElementById("declaration");
  var line2 = document.getElementById("loop1");
  var line3 = document.getElementById("loop");
  var line4 = document.getElementById("condition");
  var line5 = document.getElementById("assign");
  var line6 = document.getElementById("swap");

  ///starting visulizetion

  // adding status text and highlight of algo
  document.getElementById("text").innerHTML = "Selection Sort Visualization";
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
    let k = index;
    //adding status and highlight
    window.setTimeout(() => {
      line3.classList.add("highlight");

      statusCard.innerHTML = "inner for loop";
    }, (c_delay += delay_time));

    //Ramoving status and highlight
    window.setTimeout(() => {
      line3.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
    change_color_single_div(index, "#66bb6a", c_delay);

    for (let j = index + 1; j < totalBars; j++) {
      //Adding status , highlight ,and changing colors of bars
      window.setTimeout(() => {
        line4.classList.add("highlight");
        let STATUS = "Comparing list[j] and list[k]";
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));

      change_color_single_div(j, "#ffd54f", c_delay);

      //Ramoving statu ,highlight
      window.setTimeout(() => {
        line4.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);

      change_color_single_div(j, "#ffffff", c_delay + delay_time);

      if (dataList[j] < dataList[k]) {
        //Adding status , highlight ,and changing colors of bars
        window.setTimeout(() => {
          let STATUS = "Assigning j to k ";

          line5.classList.add("highlight");
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));
        change_color_single_div(k, "#ffffff", c_delay);
        change_color_single_div(j, "#66bb6a", c_delay);
        //Ramoving statu ,highlight
        window.setTimeout(() => {
          line5.classList.remove("highlight");
          statusCard.innerHTML = "<br>";
        }, c_delay + delay_time);
        k = j;
      }
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
    //Adding status , highlight , changing colors of bars and swapping the bars

    if (index != k) {
      window.setTimeout(() => {
        let STATUS = "Swapping " + getValue(index) + " and " + getValue(k);

        line6.classList.add("highlight");
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));

      change_color_single_div(index, "#66bb6a", c_delay);
      swapper(k, index, c_delay);

      //Ramoving statu ,highlight
      window.setTimeout(() => {
        statusCard.innerHTML = "</br>";
        line6.classList.remove("highlight");
      }, c_delay + delay_time);
      change_color_single_div(k, "#ffffff", c_delay + delay_time);
    }

    change_color_single_div(index, "#5f3dc4", c_delay + delay_time);

    let temp = dataList[index];
    dataList[index] = dataList[k];
    dataList[k] = temp;

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

  ///End of looping
  window.setTimeout(() => {
    selectionSortBtn.classList.remove("selected");
    selectionSortBtn.disabled = false;
    let STATUS = "SORTED!!!";
    statusCard.innerHTML = STATUS;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
    document.getElementById("navigation").style.pointerEvents = "auto";
  }, c_delay + delay_time);
  change_color_single_div(totalBars - 1, "#5f3dc4", c_delay + delay_time);
}
