function sortMergeSort() {
  // set delay to zero
  c_delay = 0;
  // Change color to normal
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#ffffff", c_delay);

  // hide nav-bar
  var navBar = document.getElementById("navigation");
  //navBar.style.display = "none";

  //disable buttoon

  var MergeSortBtn = document.getElementById("Merge");
  MergeSortBtn.disabled = true;
  MergeSortBtn.classList.add("selected");

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
  <span id="declaration">begin MergeSort(arr,l,h)</span>
    <span id="condition">if(h>l)</span>
      <span id="mid">mid =(l+h)/2</span>
      <span id="ms1">MergeSort(l,mid)</span>
      <span id="ms2">MergeSort(mid=1,h)</span>
      <span id="merge">Merge(l,mid,h)</span>
    <span >end if</span>
  <span>end MergeSort</span>
  </pre>
  </li>`;

  var line1 = document.getElementById("declaration");
  var line2 = document.getElementById("condition");
  var line3 = document.getElementById("mid");
  var line4 = document.getElementById("ms1");
  var line5 = document.getElementById("ms2");
  var line6 = document.getElementById("merge");

  ///starting visulizetion

  // adding status text and highlight of algo
  document.getElementById("text").innerHTML = "Merge Sort Visualization";
  line1.classList.add("highlight");

  /// Beginning of for loop
  window.setTimeout(() => {
    line1.classList.remove("highlight");
    statusCard.innerHTML = "<br>";
  }, c_delay + delay_time);

  // console.log(typeof dataList[0]);
  function Merge(l, m, h) {
    let i = l,
      j = m + 1,
      k = l;
    let temp = Array(40).fill(0);
    while (i <= m && j <= h) {
      // console.log("entered while loop");
      if (dataList[i] < dataList[j]) {
        temp[k++] = dataList[i++];
      } else {
        temp[k++] = dataList[j++];
      }
    }
    for (; i <= m; i++) {
      temp[k++] = dataList[i];
    }
    for (; j <= h; j++) {
      temp[k++] = dataList[j];
    }
    for (let i = l; i <= h; i++) {
      change_color_single_div(i, "#66bb6a", (c_delay += delay_time));
      changer(i, temp[i], c_delay);
      change_color_single_div(i, "#fff", c_delay + delay_time);
      dataList[i] = temp[i];
    }
    // console.log("Temp array" + temp);
  }

  let low = 0;
  let high = totalBars - 1;

  MergeSort(low, high);

  function MergeSort(l, h) {
    let mid;

    window.setTimeout(() => {
      line2.classList.add("highlight");
      let STATUS = "if(low < high)";
      statusCard.innerHTML = STATUS;
    }, (c_delay += delay_time));

    window.setTimeout(() => {
      line2.classList.remove("highlight");
      statusCard.innerHTML = "<br>";
    }, c_delay + delay_time);
    if (l < h) {
      mid = Math.floor((l + h) / 2);
      window.setTimeout(() => {
        STATUS = "mid =(low+high)/2";
        statusCard.innerHTML = STATUS;
        line3.classList.add("highlight");
      }, (c_delay += delay_time));
      change_color_single_div(mid, "#5f3dc4", c_delay);

      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line3.classList.remove("highlight");
      }, c_delay + delay_time);
      change_color_single_div(mid, "#fff", c_delay + delay_time);

      window.setTimeout(() => {
        STATUS = "MergeSort(l,mid)";
        statusCard.innerHTML = STATUS;
        line4.classList.add("highlight");
      }, (c_delay += delay_time));

      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line4.classList.remove("highlight");
      }, c_delay + delay_time);

      MergeSort(l, mid);

      window.setTimeout(() => {
        STATUS = "MergeSort(mid+1,high)";
        statusCard.innerHTML = STATUS;
        line5.classList.add("highlight");
      }, (c_delay += delay_time));

      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line5.classList.remove("highlight");
      }, c_delay + delay_time);

      MergeSort(mid + 1, h);

      window.setTimeout(() => {
        STATUS = "Merge(l,mid,h)";
        statusCard.innerHTML = STATUS;
        line6.classList.add("highlight");
      }, (c_delay += delay_time));
      change_color(l, h, "#ffd54f", c_delay);
      Merge(l, mid, h);
      window.setTimeout(() => {
        let STATUS = "</br>";
        statusCard.innerHTML = STATUS;
        line6.classList.remove("highlight");
      }, (c_delay += delay_time));
      change_color(l, h, "#ffffff", c_delay);
    }
  }
  console.log("Mergesort working====>" + dataList);

  window.setTimeout(() => {
    MergeSortBtn.classList.remove("selected");
    MergeSortBtn.disabled = false;
    let STATUS = "SORTED!!!";
    statusCard.innerHTML = STATUS;
    document.getElementById("sorting-btns").style.pointerEvents = "auto";
    document.getElementById("navigation").style.pointerEvents = "auto";
  }, c_delay + delay_time);
  for (let index = 0; index < totalBars; index++)
    change_color_single_div(index, "#5f3dc4", c_delay + delay_time);
}

// void  Merge(int A[],int l ,int m ,int h){
//   int i{l} ,j{m+1},k{l} ;
//   int B[100];
//   while(i<=m && j<=h){
//       if(A[i]<A[j]){
//           B[k++]=A[i++];
//       }
//       else
//           B[k++]=A[j++];
//   }
//   for(;i<=m ; i++){
//       B[k++]=A[i];
//   }
//   for(;j<=h ; j++){
//       B[k++]=A[j];
//   }
//  for(int i=l ; i<=h ; i++){
//      A[i] = B[i];
//  }
// }

// //Merge sort
// void MergeSort(int A[],int l ,int h){
//   int mid ;
//  if(l<h){
//      mid = (l+h)/2;
//      MergeSort(A,l,mid);
//      MergeSort(A,mid+1,h);
//      Merge(A,l,mid,h);
//  }
// }
