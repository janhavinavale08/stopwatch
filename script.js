document.addEventListener("DOMContentLoaded", () => {
    let timer;
    let isRunning = false;
    let [hours, minutes, seconds] = [0, 0, 0];

    const display = document.getElementById('display');
    const startStopBtn = document.getElementById('startStopBtn');
    const resetBtn = document.getElementById('resetBtn');

    function updateDisplay() {
        const formatTime = unit => unit < 10 ? `0${unit}` : unit;
        display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    function startStopwatch() {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }

    function stopStopwatch() {
        clearInterval(timer);
    }

    startStopBtn.addEventListener('click', () => {
        if (isRunning) {
            stopStopwatch();
            startStopBtn.innerText = 'Start';
        } else {
            startStopwatch();
            startStopBtn.innerText = 'Stop';
        }
        isRunning = !isRunning;
    });

    resetBtn.addEventListener('click', () => {
        stopStopwatch();
        [hours, minutes, seconds] = [0, 0, 0];
        updateDisplay();
        if (isRunning) {
            startStopwatch();
        }
        startStopBtn.innerText = 'Start';
    });

    // Initial display update
    updateDisplay();
});
