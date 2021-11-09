function binarySearch() {
  c_delay = 0;
  let line1, line2, line3, line4, line5, line6, line7, line8, line9;
  let value = document.getElementById("searchValue").value;
  // set delay to zero
  // Change color to normal
  if (value) {
    // sortQuickSort();
    for (let index = 0; index < totalBars; index++)
      change_color_single_div(index, "#ffffff", c_delay + delay_time);

    value = Number(value);
    // hide nav-bar
    var navBar = document.getElementById("navigation");
    //navBar.style.display = "none";

    //disable buttoon

    var binarySearchBtn = document.getElementById("binSearch");
    binarySearchBtn.disabled = true;
    binarySearchBtn.classList.add("selected");

    // make btn dive unclickble
    document.getElementById("sorting-btns").style.pointerEvents = "none";
    document.getElementById("navigation").style.pointerEvents = "none";

    window.setTimeout(() => {
      //add complexity

      document.getElementById("complexity").innerHTML = `<li>
      <span>Worst Case : </span>
      <span style="font-weight: 800">O(log n)</span>
    </li>
    <li>
      <span>Best Case : </span>
      <span style="font-weight: 800">O(1)</span>
    </li>
    <li>
      <span>Average Case : </span>
      <span style="font-weight: 800">O(log n)</span>
    </li>`;

      // add algorithm

      document.getElementById("algorithm").innerHTML = `
     <li>
     <pre> 
     <span id="declaration">begin BinarySearch(l,h,key)</span>
       <span id="loop">while(l<=h)</span>
        <span id="condition1">if(key==list[mid])</span>
          <span id="return">return mid</span> 
        <span id="condition2">else if(list[mid]>key)</span>
          <span id="dec">h=mid-1</span>
        <span id="condition3">else</span>
          <span id="inc">l=mid+1</span>
       <span id="endloop">end while</span>
       <span id="return2">return -1</span> 
     <span id="endAlgo">end BinarySearch</span>
      </pre>
     </li>`;
      //Taking all algo lines in variable
      line1 = document.getElementById("declaration");
      line2 = document.getElementById("loop");
      line3 = document.getElementById("condition1");
      line4 = document.getElementById("return");
      line5 = document.getElementById("condition2");
      line6 = document.getElementById("dec");
      line7 = document.getElementById("condition3");
      line8 = document.getElementById("inc");
      line9 = document.getElementById("return2");
      // adding status text and highlight of algo

      document.getElementById("text").innerHTML = "Binary Search Visualization";
      line1.classList.add("highlight");
    }, (c_delay += delay_time));

    ///starting visulizetion

    let l = 0;
    let h = totalBars - 1;
    let flag = 0;

    window.setTimeout(() => {
      line1.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
      line2.classList.add("highlight");
      statusCard.innerHTML = "while(low<=high)";
    }, (c_delay += delay_time));
    window.setTimeout(() => {
      line2.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);

    while (l <= h) {
      /// Beginning of for loop

      change_color(l, h, "#ffd54f", c_delay);
      change_color(l, h, "#ffffff", c_delay + delay_time);

      let mid = Math.floor((l + h) / 2);
      window.setTimeout(() => {
        let STATUS = `Comparing key and list[mid]`;
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));
      change_color_single_div(mid, "#66bb6a", c_delay);

      window.setTimeout(() => {
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
      change_color_single_div(mid, "#ffffff", c_delay + delay_time);

      if (value == dataList[mid]) {
        flag = 1;
        window.setTimeout(() => {
          line3.classList.add("highlight");
          let STATUS = `value == list[mid]`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));
        window.setTimeout(() => {
          statusCard.innerHTML = "<br>";
          line3.classList.remove("highlight");
        }, c_delay + delay_time);

        window.setTimeout(() => {
          line4.classList.add("highlight");
          let STATUS = `${value} found at ${mid}`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));
        change_color_single_div(mid, "#5f3dc4", c_delay);
        break;
        // rerturn mid
      } else if (value < dataList[mid]) {
        window.setTimeout(() => {
          line5.classList.add("highlight");
          let STATUS = `value < list[mid]`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));

        window.setTimeout(() => {
          statusCard.innerHTML = "<br>";
          line5.classList.remove("highlight");
        }, c_delay + delay_time);

        window.setTimeout(() => {
          line6.classList.add("highlight");
          let STATUS = `Assigning mid-1 to high`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));

        window.setTimeout(() => {
          statusCard.innerHTML = "<br>";
          line6.classList.remove("highlight");
        }, c_delay + delay_time);

        h = mid - 1;
      } else {
        window.setTimeout(() => {
          line7.classList.add("highlight");
          let STATUS = `value > list[mid]`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));

        window.setTimeout(() => {
          statusCard.innerHTML = "<br>";
          line7.classList.remove("highlight");
        }, c_delay + delay_time);

        window.setTimeout(() => {
          line8.classList.add("highlight");
          let STATUS = `Assigning mid+1 to low`;
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));

        window.setTimeout(() => {
          statusCard.innerHTML = "<br>";
          line8.classList.remove("highlight");
        }, c_delay + delay_time);

        l = mid + 1;
      }
      window.setTimeout(() => {
        line1.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
        line2.classList.add("highlight");
        statusCard.innerHTML = "while(low<=high)";
      }, (c_delay += delay_time));
      window.setTimeout(() => {
        line2.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
      //Ramoving statu ,highlight
    }
    if (flag == 0) {
      window.setTimeout(() => {
        line9.classList.add("highlight");
        let STATUS = `${value} not found !!!`;
        statusCard.innerHTML = STATUS;
      }, (c_delay += delay_time));
    }
    //  return -1

    ///End of looping
    window.setTimeout(() => {
      binarySearchBtn.classList.remove("selected");
      binarySearchBtn.disabled = false;
      document.getElementById("sorting-btns").style.pointerEvents = "auto";
      document.getElementById("navigation").style.pointerEvents = "auto";
    }, c_delay + delay_time);
  }
}
