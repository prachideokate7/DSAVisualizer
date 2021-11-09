// quickSort(arr[], low, high)
// {
//     if (low < high)
//     {
//         /* pi is partitioning index, arr[pi] is now
//            at right place */
//         pi = partition(arr, low, high);

//         quickSort(arr, low, pi - 1);  // Before pi
//         quickSort(arr, pi + 1, high); // After pi
//     }
// }

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */

//  partition (arr[], low, high)
//  {
//      // pivot (Element to be placed at right position)
//      pivot = arr[high];

//      i = (low - 1)  // Index of smaller element and indicates the
//                     // right position of pivot found so far

//      for (j = low; j <= high- 1; j++)
//      {
//          // If current element is smaller than the pivot
//          if (arr[j] < pivot)
//          {
//              i++;    // increment index of smaller element
//              swap arr[i] and arr[j]
//          }
//      }
//      swap arr[i + 1] and arr[high])
//      return (i + 1)
//  }

function sortQuickSort() {
  // set delay to zero
  c_delay = 0;
  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  // navBar.style.display = "none";

  //disable buttoon

  var quickSortBtn = document.getElementById("Quick");
  quickSortBtn.disabled = true;
  quickSortBtn.classList.add("selected");

  // make btn dive unclickble
  document.getElementById("sorting-btns").style.pointerEvents = "none";
  document.getElementById("navigation").style.pointerEvents = "none";

  //add complexity

  document.getElementById("complexity").innerHTML = `<li>
    <span>Worst Case : </span>
    <span style="font-weight: 800">O(n²)</span>
  </li>
  <li>
    <span>Best Case : </span>
    <span style="font-weight: 800">O(n log n)</span>
  </li>
  <li>
    <span>Average Case : </span>
    <span style="font-weight: 800">O(n log n)</span>
  </li>`;

  // add algorithm
  document.getElementById("algorithm").innerHTML = `
  <li>
  <pre> 
  <span id="declaration">begin quickSort(arr,low,high)</span>
   <span id="condition">if(low < high)</span>
    <span id="pi">pi = partition(arr, low, high)</span>    
    <span id="qs1">quickSort(arr, low, pi - 1)</span>
    <span id="qs2">quickSort(arr,pi+1,high)</span>
   <span id="endif">end if</span>          
  <span id="endAlgo">end BubbleSort</span>
  </pre>
  </li>`;

  //Taking all algo lines in variable
  var line1 = document.getElementById("declaration");
  var line2 = document.getElementById("condition");
  var line3 = document.getElementById("pi");
  var line4 = document.getElementById("qs1");
  var line5 = document.getElementById("qs2");

  document.getElementById("text").innerHTML = "Quick Sort Visualization";
  line1.classList.add("highlight");
  window.setTimeout(() => {
    line1.classList.remove("highlight");
    statusCard.innerHTML = "<br>";
  }, c_delay + delay_time);

  function swap(i, j) {
    let t = dataList[i];
    dataList[i] = dataList[j];
    dataList[j] = t;
    swapper(i, j, c_delay);
  }

  /* This function takes last element as pivot, places 
  the pivot element at its correct position in sorted 
  array, and places all smaller (smaller than pivot) 
  to left of pivot and all greater elements to right 
  of pivot */

  function partition(low, high) {
    pivot = dataList[high]; // pivot
    i = low - 1; // Index of smaller element and indicates the right position of pivot found so far
    for (let j = low; j < high; j++) {
      // If current element is smaller than the pivot
      if (dataList[j] <= pivot) {
        i++; // increment index of smaller element

        window.setTimeout(() => {
          let STATUS = "Swapping i and j ";
          statusCard.innerHTML = STATUS;
        }, (c_delay += delay_time));
        change_color(i, j, "#66bb6a", c_delay);
        swap(i, j);
        window.setTimeout(() => {
          let STATUS = "</br>";
          statusCard.innerHTML = STATUS;
        }, c_delay + delay_time);
        change_color(i, j, "#ffffff", c_delay + delay_time);
      }
    }

    window.setTimeout(() => {
      let STATUS = "Swapping i+1 and high";
      statusCard.innerHTML = STATUS;
    }, (c_delay += delay_time));
    change_color(i + 1, high, "#66bb6a", c_delay);
    swap(i + 1, high);

    window.setTimeout(() => {
      let STATUS = "</br>";
      statusCard.innerHTML = STATUS;
    }, c_delay + delay_time);
    change_color(i + 1, high, "#ffffff", c_delay + delay_time);
    change_color_single_div(i + 1, "#7048e8", c_delay + delay_time);
    // change_color_single_div(i + 1, "#ffffff", c_delay + delay_time);
    return i + 1;
  }

  /* The main function that implements QuickSort 
  arr[] --> Array to be sorted, 
  low --> Starting index, 
  high --> Ending index */

  /// Beginning of for loop
  quickSort(0, totalBars - 1);
  function quickSort(low, high) {
    if (low < high) {
      //Ramoving statu ,highlight
      window.setTimeout(() => {
        let STATUS = "if(low < high)";
        statusCard.innerHTML = STATUS;
        line2.classList.add("highlight");
      }, (c_delay += delay_time));
      change_color(low, high, "#ffd54f", c_delay);

      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line2.classList.remove("highlight");
      }, c_delay + delay_time);
      change_color(low, high, "#ffffff", c_delay + delay_time);
      /* pi is partitioning index, arr[p] is now 
          at right place */

      window.setTimeout(() => {
        let STATUS = "Partition(low,high)";
        statusCard.innerHTML = STATUS;
        line3.classList.add("highlight");
      }, (c_delay += delay_time));
      pi = partition(low, high);
      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line3.classList.remove("highlight");
      }, c_delay + delay_time);
      // Separately sort elements before
      // partition and after partition

      window.setTimeout(() => {
        STATUS = "quickSort(low,pi-1)";
        statusCard.innerHTML = STATUS;
        line4.classList.add("highlight");
      }, (c_delay += delay_time));

      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line4.classList.remove("highlight");
      }, c_delay + delay_time);

      quickSort(low, pi - 1);

      window.setTimeout(() => {
        STATUS = "quickSort(pi+1,high)";
        statusCard.innerHTML = STATUS;
        line5.classList.add("highlight");
      }, (c_delay += delay_time));

      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line5.classList.remove("highlight");
      }, c_delay + delay_time);

      quickSort(pi + 1, high);
    }
  }
  ///End of looping
  window.setTimeout(() => {
    quickSortBtn.classList.remove("selected");
    quickSortBtn.disabled = false;
    let STATUS = "SORTED!!!";
    statusCard.innerHTML = STATUS;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
    document.getElementById("navigation").style.pointerEvents = "auto";
  }, (c_delay += delay_time));

  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#5f3dc4", c_delay);

  console.log(`Datalist ${dataList}`);
}
