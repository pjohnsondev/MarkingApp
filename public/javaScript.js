function deleteStudent(){
     alert("working");
   }

  function reTotal(){
    //get the input of 'student["total"]' and save it to a variable 'total'
    var total = document.getElementsByName("student[total]")[0];
    //Get provided values from scoring inputs in integer form
    var contents = parseInt(document.getElementsByName("student[contents]")[0].value);
    var structure = parseInt(document.getElementsByName("student[structure]")[0].value);
    var fluency = parseInt(document.getElementsByName("student[fluency]")[0].value);
    var participation = parseInt(document.getElementsByName("student[participation]")[0].value);
    var minus = parseInt(document.getElementsByName("student[minus]")[0].value);
    //set the value of variable 'total' to be the value of the scoring inputs added together
    total.setAttribute("value", (contents + structure + fluency + participation - minus));
  };

 function validation(){
   //Get minus grade input
     var minus = document.getElementsByName("minus")[0].value;
     //set the value to zero if no value is inserted
     if(minus == ""){
        document.getElementsByName("minus")[0].setAttribute("value", 0);
     }
 };


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The code below is now handled on the back end as tables larger than 300 rows were crashing the browser //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  function sortTableByNumber() {
//   //set variable to control switching of table rows during sort//
//   switching = true;
//   //loop until switching of tables is complete//
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = document.getElementsByTagName("TR");
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[0];
//       y = rows[i + 1].getElementsByTagName("TD")[0];
//       //check if the two rows should switch place:
//       if (parseInt(x.innerHTML.toLowerCase()) > parseInt(y.innerHTML.toLowerCase())) {
//         //if so, mark as a switch and break the loop:
//         shouldSwitch= true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// };

// function sortTableByTotal() {
//   //set variable to control switching of table rows during sort//
//   switching = true;
//   //loop until switching of tables is complete//
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = document.getElementsByTagName("TR");
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[6];
//       y = rows[i + 1].getElementsByTagName("TD")[6];
//       //check if the two rows should switch place:
//       if (parseInt(x.innerHTML.toLowerCase()) > parseInt(y.innerHTML.toLowerCase())) {
//         //if so, mark as a switch and break the loop:
//         shouldSwitch= true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// };