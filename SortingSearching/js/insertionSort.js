function sortInsertionSort() {
  // set delay to zero
  c_delay = 0;
  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  //navBar.style.display = "none";

  //disable buttoon
  var insertionSortBtn = document.getElementById("Insertion");
  insertionSortBtn.disabled = true;
  insertionSortBtn.classList.add("selected");

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
  <span id="declaration">begin InsertioneSort(list)</span>
   <span id="loop1">for all elements of list</span>
    <span id="key">Assign key = list[i]</span>
    <span id="loop">for(j=i-1 ;j>=0 ;j--)</span>
     <span id="condition">if ( list[j] > key )</span>    
      <span id="swap">swap( list[j] , list[j+1] )</span>
     <span id="endif">end if</span>
     <span id="else">else break</span>
    <span id="endfor">end for</span>         
   <span id="endfor1">end for</span>  
  <span id="endAlgo">end InsertionSort</span>
  </pre>
  </li>`;

  //Taking all algo lines in variable
  var line1 = document.getElementById("declaration");
  var line2 = document.getElementById("loop1");
  var line3 = document.getElementById("loop");
  var line4 = document.getElementById("condition");
  var line5 = document.getElementById("swap");
  var line6 = document.getElementById("else");
  var line7 = document.getElementById("key");

  ///starting visulizetion

  // adding status text and highlight of algo
  document.getElementById("text").innerHTML = "Insertion Sort Visualization";
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

  for (let index = 1; index < totalBars; index++) {
    //adding status and highlight
    // window.setTimeout(() => {
    //   line7.classList.add("highlight");
    //   statusCard.innerHTML = "Assign key = " + getValue(index);
    // }, (c_delay += delay_time));

    // //Ramoving status and highlight

    // window.setTimeout(() => {
    //   line7.classList.remove("highlight");
    //   statusCard.innerHTML = "<br>";
    // }, c_delay + delay_time);

    let key = dataList[index];

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

    //Inner for loop

    for (let j = index - 1; j >= 0; j--) {
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
      } else {
        // adding status and highlight
        window.setTimeout(() => {
          line4.classList.remove("highlight");
          line6.classList.add("highlight");
          statusCard.innerHTML = "break";
        }, c_delay);

        // Ramoving statu ,highlight
        window.setTimeout(() => {
          line6.classList.remove("highlight");
          statusCard.innerHTML = "<br>";
        }, c_delay + delay_time);
        break;
      }
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
    }

    //change color of bars to sorted
    for (let i = 0; i <= index; i++)
      change_color_single_div(i, "#5f3dc4", c_delay + delay_time);
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

  ///End of looping
  window.setTimeout(() => {
    insertionSortBtn.classList.remove("selected");
    insertionSortBtn.disabled = false;
    let STATUS = "SORTED!!!";
    statusCard.innerHTML = STATUS;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
    document.getElementById("navigation").style.pointerEvents = "auto";
  }, c_delay + delay_time);
}
