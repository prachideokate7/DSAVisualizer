function jumpSearch() {
  c_delay = 0;
  let line1, line2, line3, line4, line5, line6, line7, line8, line9, line10;
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

    var jumpSearchBtn = document.getElementById("jmpSearch");
    jumpSearchBtn.disabled = true;
    jumpSearchBtn.classList.add("selected");

    // make btn dive unclickble
    document.getElementById("sorting-btns").style.pointerEvents = "none";
    document.getElementById("navigation").style.pointerEvents = "none";

    window.setTimeout(() => {
      //add complexity

      document.getElementById("complexity").innerHTML = `<li>
      <span>Worst Case : </span>
      <span style="font-weight: 800">O(√n )</span>
    </li>
    <li>
      <span>Best Case : </span>
      <span style="font-weight: 800">O(1)</span>
    </li>
    <li>
      <span>Average Case : </span>
      <span style="font-weight: 800">O(√n )</span>
    </li>`;

      // add algorithm

      document.getElementById("algorithm").innerHTML = `
     <li>
     <pre> 
     <span id="declaration">begin JumpSearch(list,x,n)</span>
      <span id="step">step = sqrt(n)</span>
      <span id="loop">while(x>list[step-1])</span>
        <span id="inc">prev = step & step+=sqrt(n);</span>
        <span id="condition">if(prev>=n) return -1</span>  
      <span>end while</span>
      <span id="loop2">while(x > list[prev])</span>
       <span id="inc2">prev++</span>
       <span id="condition2">if(prev==step) return -1</span>
       <span>end while</span>
      <span id="condition3">if(list[prev]==x) return prev</span>
      <span id="return3">return -1</span>
     <span id="endAlgo">end BinarySearch</span>
     </pre>
     </li>`;

      //Taking all algo lines in variable
      line1 = document.getElementById("declaration");
      line2 = document.getElementById("step");
      line3 = document.getElementById("loop");
      line4 = document.getElementById("inc");
      line5 = document.getElementById("condition");
      line6 = document.getElementById("loop2");
      line7 = document.getElementById("inc2");
      line8 = document.getElementById("condition2");
      line9 = document.getElementById("condition3");
      line10 = document.getElementById("return3");

      // adding status text and highlight of algo

      document.getElementById("text").innerHTML = "Jump Search Visualization";
      line1.classList.add("highlight");
    }, (c_delay += delay_time));

    ///starting visulizetion
    let n = totalBars;
    let flag = 0;

    window.setTimeout(() => {
      line1.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
      line2.classList.add("highlight");
      statusCard.innerHTML = "step =sqrt(n)";
    }, (c_delay += delay_time));
    window.setTimeout(() => {
      line2.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);

    let prev = 0;
    let step = Math.floor(Math.sqrt(n));
    console.log(step);

    window.setTimeout(() => {
      line3.classList.add("highlight");
      statusCard.innerHTML = "while(x>list[step-1])";
    }, (c_delay += delay_time));
    change_color_single_div(Math.min(step, n) - 1, "#ffd54f", c_delay);
    window.setTimeout(() => {
      line3.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);

    console.log("while " + Math.min(step, n));
    while (dataList[Math.min(step, n) - 1] < value) {
      window.setTimeout(() => {
        line4.classList.add("highlight");
        statusCard.innerHTML = "increment step";
      }, (c_delay += delay_time));
      window.setTimeout(() => {
        line4.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);

      prev = step;
      step += Math.floor(Math.sqrt(n));
      console.log("step" + step);
      if (prev >= n) {
        window.setTimeout(() => {
          line5.classList.add("highlight");
          statusCard.innerHTML = `${value} not found!!!`;
        }, (c_delay += delay_time));
        flag = 1;
        break;
      }
      window.setTimeout(() => {
        line3.classList.add("highlight");
        statusCard.innerHTML = "while(x>list[step-1])";
      }, (c_delay += delay_time));
      window.setTimeout(() => {
        line3.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
      change_color_single_div(Math.min(step, n) - 1, "#ffd54f", c_delay);
    }

    if (flag == 0) {
      window.setTimeout(() => {
        line6.classList.add("highlight");
        statusCard.innerHTML = "while(list[prev]<x)";
      }, (c_delay += delay_time));
      window.setTimeout(() => {
        line6.classList.remove("highlight");
        statusCard.innerHTML = "<br>";
      }, c_delay + delay_time);
      change_color_single_div(prev, "#66bb6a", c_delay);
      while (dataList[prev] < value) {
        window.setTimeout(() => {
          line7.classList.add("highlight");
          statusCard.innerHTML = "prev++";
        }, (c_delay += delay_time));
        window.setTimeout(() => {
          line7.classList.remove("highlight");
          statusCard.innerHTML = "<br>";
        }, c_delay + delay_time);
        prev++;
        if (prev == Math.min(step, n)) {
          window.setTimeout(() => {
            line8.classList.add("highlight");
            statusCard.innerHTML = `${value} not found!!!`;
          }, (c_delay += delay_time));
          flag = 1;
          break;
        }
        window.setTimeout(() => {
          line6.classList.add("highlight");
          statusCard.innerHTML = "while(list[prev]<x)";
        }, (c_delay += delay_time));
        window.setTimeout(() => {
          line6.classList.remove("highlight");
          statusCard.innerHTML = "<br>";
        }, c_delay + delay_time);
        change_color_single_div(prev, "#66bb6a", c_delay);
      }

      if (flag == 0) {
        if (dataList[prev] == value) {
          window.setTimeout(() => {
            line9.classList.add("highlight");
            statusCard.innerHTML = `${value} found at index ${prev}`;
          }, (c_delay += delay_time));
          change_color_single_div(prev, "#7048e8", c_delay);
          flag = 1;
        }

        if (flag == 0) {
          window.setTimeout(() => {
            line10.classList.add("highlight");
            statusCard.innerHTML = `${value} not found!!!`;
          }, (c_delay += delay_time));
        }
      }
    }

    console.log(prev);
    ///End of looping
    window.setTimeout(() => {
      jumpSearchBtn.classList.remove("selected");
      jumpSearchBtn.disabled = false;
      document.getElementById("sorting-btns").style.pointerEvents = "auto";
      document.getElementById("navigation").style.pointerEvents = "auto";
    }, c_delay + delay_time);
  }
}
