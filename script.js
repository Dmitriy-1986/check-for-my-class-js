let intervalId;
let isChecking = false;
const button = document.getElementById('startStopButton');
const myClassElement = document.querySelector('.myclass');

function checkForMyClass() {
    if (!isChecking) {
        if (myClassElement) {
            intervalId = setInterval(function () {
                console.log('SetInterval запущен');
            }, 1000);
            isChecking = true;
            button.textContent = 'Stop Checking';
        }
    } else {
        clearInterval(intervalId);
        intervalId = null;
        isChecking = false;
        console.log('SetInterval остановлен');
        button.textContent = 'Start Checking';
    }
}


button.addEventListener('click', checkForMyClass);