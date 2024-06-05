window.onload = function() {
    for (var i = 2; i <= 4; i++) {
      document.getElementById("big-container-" + i).style.display = "none";
    }
  }

  function showContainer(id) {
    for (var i = 1; i <= 4; i++) {
      if (i == id) {
        document.getElementById("big-container-" + i).style.display = "block";
      } else {
        document.getElementById("big-container-" + i).style.display = "none";
      }
    }
  }