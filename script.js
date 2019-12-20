// current date displayed at top
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));
 
 
// assign styles to event blocks based on if each is in the past/present/future:
const currentTime = parseInt(moment().format("HH00"), 10);
 
for (var i = 0; i < $(".hour").length; i++) {
    var currentDiv = $($(".hour")[i]).next();
    console.log(currentDiv);
    var dataTime = parseInt($($(".hour")[i]).data().time, 10);
    if (dataTime === currentTime) {
        currentDiv.addClass("present");
    } else if (dataTime < currentTime) {
        currentDiv.addClass("past");
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
