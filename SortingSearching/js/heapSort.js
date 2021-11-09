function sortHeapSort() {
  // set delay to zero
  c_delay = 0;

  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  //navBar.style.display = "none";

  //disable buttoon

  var HeapSortBtn = document.getElementById("Heap");
  HeapSortBtn.disabled = true;
  HeapSortBtn.classList.add("selected");

  // make btn dive unclickble
  document.getElementById("sorting-btns").style.pointerEvents = "none";
  document.getElementById("navigation").style.pointerEvents = "none";

  //add complexity
  document.getElementById("complexity").innerHTML = `<li>
  <span>Worst Case : </span>
  <span style="font-weight: 800">O(n log n)</span>
</li>
<li>
  <span>Best Case : </span>
  <span style="font-weight: 800">O( n log n )</span>
</li>
<li>
  <span>Average Case : </span>
  <span style="font-weight: 800">O( n log n)</span>
</li>`;

  // add algorithm
  document.getElementById("algorithm").innerHTML = `
  <li>
  <pre> 
  <span id="declaration">begin HeapSort(arr,n)</span>
   <span id="for">for(i=n/2-1 ;i>=0;i--)</span>
    <span id="heapify">heapify(arr,n,i)</span>
   <span>end for</span>    
   <span id="for2">for(i=n-1 ;i>0;i--)</span>
    <span id="swap">swap(arr[0],arr[i])</span>
    <span id="heapify2">heapify(arr,i,0)</span>
   <span>end for</span>   
  <span>end HeapSort</span>
  </pre>
  </li>`;

  //Taking all algo lines in variable
  var line1 = document.getElementById("declaration");
  var line2 = document.getElementById("for");
  var line3 = document.getElementById("heapify");
  var line4 = document.getElementById("for2");
  var line5 = document.getElementById("swap");
  var line6 = document.getElementById("heapify2");

  ///starting visulizetion

  // adding status text and highlight of algo
  document.getElementById("text").innerHTML = "Heap Sort Visualization";
  line1.classList.add("highlight");

  function swap(a, b) {
    let temp = dataList[a];
    dataList[a] = dataList[b];
    dataList[b] = temp;
    swapper(a, b, c_delay);
  }

  function heapify(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && dataList[l] > dataList[largest]) {
      largest = l;
    }
    if (r < n && dataList[r] > dataList[largest]) {
      largest = r;
    }
    if (largest != i) {
      c_delay += delay_time;
      swap(i, largest);
      heapify(n, largest);
    }
  }

  let n = totalBars;

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

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    window.setTimeout(() => {
      line3.classList.add("highlight");
      let STATUS = "heapify(n,i)";
      statusCard.innerHTML = STATUS;
    }, (c_delay += delay_time));
    change_color(n - 1, i, "#ffd54f", c_delay);
    heapify(n, i);
    //Ramoving statu ,highlight
    window.setTimeout(() => {
      line3.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
    change_color(n - 1, i, "#ffffff", c_delay + delay_time);

    /// Beginning of for loop
    window.setTimeout(() => {
      line2.classList.add("highlight");
      statusCard.innerHTML = "for loop";
    }, (c_delay += delay_time));

    window.setTimeout(() => {
      line2.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
  }

  /// Beginning of for loop
  window.setTimeout(() => {
    line4.classList.add("highlight");
    statusCard.innerHTML = "for loop";
  }, (c_delay += delay_time));

  window.setTimeout(() => {
    line4.classList.remove("highlight");
    statusCard.innerHTML = "<br>";
  }, c_delay + delay_time);

  for (let i = n - 1; i > 0; i--) {
    window.setTimeout(() => {
      line5.classList.add("highlight");
      let STATUS = "swap(0,i)";
      statusCard.innerHTML = STATUS;
    }, (c_delay += delay_time));

    change_color(0, i, "#66bb6a", c_delay);

    swap(0, i);
    //Ramoving statu ,highlight
    change_color(0, i, "#ffffff", c_delay + delay_time);
    change_color_single_div(i, "#5f3dc4", c_delay + delay_time);

    window.setTimeout(() => {
      line5.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);

    window.setTimeout(() => {
      line6.classList.add("highlight");
      let STATUS = "heapify(i,0)";
      statusCard.innerHTML = STATUS;
    }, (c_delay += delay_time));
    change_color(i - 1, 0, "#ffd54f", c_delay);
    heapify(i, 0);
    //Ramoving statu ,highlight
    window.setTimeout(() => {
      line6.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
    change_color(i - 1, 0, "#fff", c_delay + delay_time);

    /// Beginning of for loop
    window.setTimeout(() => {
      line4.classList.add("highlight");
      statusCard.innerHTML = "for loop";
    }, (c_delay += delay_time));

    window.setTimeout(() => {
      line4.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
  }

  change_color_single_div(0, "#5f3dc4", c_delay);

  window.setTimeout(() => {
    HeapSortBtn.classList.remove("selected");
    HeapSortBtn.disabled = false;
    let STATUS = "SORTED!!!";
    statusCard.innerHTML = STATUS;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
    document.getElementById("navigation").style.pointerEvents = "auto";
  }, c_delay + delay_time);

  console.log("After heapify===" + dataList);
}
