var swiper = new Swiper(".body1s", {
  slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: "#slide1button",
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
});


var swiper = new Swiper(".ad", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
   navigation: {
    nextEl: ".ne",
    prevEl: ".pr",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

window.onload = function() {
  for (var i = 2; i <= 4; i++) {
    document.getElementById("big-container-" + i).style.display = "none";
    document.getElementById("big-containerr-" + i).style.display = "none";
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

function showContainerr(id) {
  for (var i = 1; i <= 4; i++) {
    if (i == id) {
      document.getElementById("big-containerr-" + i).style.display = "block";
    } else {
      document.getElementById("big-containerr-" + i).style.display = "none";
    }
  }
}


var swiper = new Swiper("#body3conswipper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



var swiper = new Swiper("#body7sli", {
  slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
    });

    var swiper = new Swiper("#body8concards", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
});

    
// const box = document.querySelector('.language');
// const container = document.querySelector('.languagesection');

// box.addEventListener('click', function() {
//   container.style.display = container.style.display === 'none' ? 'block' : 'none';
// });


$(function() {
	$('[data-decrease]').click(decrease);
	$('[data-increase]').click(increase);
	$('[data-value]').change(valueChange);
});

function decrease() {
	var value = $(this).parent().find('[data-value]').val();
	if(value > 1) {
		value--;
		$(this).parent().find('[data-value]').val(value);
	}
}

function increase() {
	var value = $(this).parent().find('[data-value]').val();
	if(value < 100) {
		value++;
		$(this).parent().find('[data-value]').val(value);
	}
}

function valueChange() {
	var value = $(this).val();
	if(value == undefined || isNaN(value) == true || value <= 0) {
		$(this).val(1);
	} else if(value >= 101) {
		$(this).val(100);
	}
}







const card = document.querySelector('.modalcard');
const modalContainer = document.querySelector('.modalcardcon');
const modal = document.querySelector('.modalcon');
const modalCloseBtn = document.querySelector('.modal-close-btn');

card.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
});

modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

modalCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modalContainer.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  if (event.target === modalContainer || event.target === modalCloseBtn) {
    event.preventDefault();
  }
});


// function showmodul() {
//   var container = document.getElementById("modul");
//   container.style.display = "block"; // show the container
// }

