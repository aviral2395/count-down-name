let intervalId;
    let timeLeft = 0;

    function startTimer() {
      const timeInput = document.getElementById("timeInput").value;
      if (timeInput && !isNaN(timeInput)) {
        timeLeft = parseInt(timeInput) * 60;
        clearInterval(intervalId);
        updateTimerDisplay();

        intervalId = setInterval(function() {
          timeLeft--;
          if (timeLeft === 0) {
            clearInterval(intervalId);
          }
          updateTimerDisplay();
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(intervalId);
    }

    function resetTimer() {
      clearInterval(intervalId);
      timeLeft = 0;
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    }

    function formatTime(time) {
      return time.toString().padStart(2, "0");
    }