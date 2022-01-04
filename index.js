//Create Event Listeners on DOM Nodes with addEventListener()
// const input = document.getElementById('input');

//If calling our callback function in one place
//input.addEventListener('click', () => alert('I was clicked!'));

//if using that same message on multiple elements
// function clickAlert() {
//     alert('I was clicked');
// }
// input.addEventListener('click', clickAlert);

//LAB WORK:

const input = document.getElementById('input');
function addingEventListener() { 
    input.addEventListener('click', function() {
        alert('I was clicked!');
})}