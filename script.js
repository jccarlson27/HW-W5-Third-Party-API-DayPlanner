// current date displayed at top
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));
 
 
// Setting current time to the beggining/top of the current hour
const currentTime = parseInt(moment().format("HH00"), 10);
//   if you want to test for middle of the day
// for each hour block up to the length of the array
for (var i = 0; i < $("textarea").length; i++) {
    // get the current hour block and making it a JQuery object (with out rewarpping into a JQuery, we would only be grabbing element; this now lets us call data within that element)
    // var currentDiv = $($(".hour")[i]);
    var currentDiv = $($(".hour")[i]).next();
    console.log(currentDiv);
    // get the current block's time at the top of it's hour
    // var dataTime = parseInt(currentDiv.data().time, 10);
    var dataTime = parseInt($($(".hour")[i]).data().time, 10);
    // conditional logic: 
    // if the block we are looking is equal to the current time, give the div class of present
    if (dataTime === currentTime) {
        currentDiv.addClass("present");
        // if block we are looking at less than current time, give that div the class of past
    } else if (dataTime < currentTime) {
        currentDiv.addClass("past");
        // else the div must be in the future, so add the future class
    } else {
        currentDiv.addClass("future");
    }
}
 
 
 
 
// when document loads/refreshes, grab each event from local storage and place in corresponding time block
$(document).ready(render());
 
// when save button is clicked, store the event info to local storage
$(".saveBtn").on("click", function () {
    const userEvent = $(this).prev().val();
    const btn = $(this).val()
    localStorage.setItem(btn, userEvent);
    render();
})
 
// grab each event from local storage and place in corresponding time block
function render() {
    for (let i = 0; i < 9; i++) {
        const oneEvent = localStorage.getItem(i);
        $("#" + i).text(oneEvent);
        console.log(oneEvent);
    }
}
