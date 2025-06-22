function ragu() {
            alert("!!warning!!,this is a test");
            let gg="This is a test";
        }

function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = 'Current Time: ' + timeString;
}

window.onload = function() {
    showTime();
    setInterval(showTime, 1000);
};

// Example: Assigning a function to a constant using arrow function
const greet = () => {
    alert('Hello from a constant function!');
};
// To use: call greet();
// greet();

