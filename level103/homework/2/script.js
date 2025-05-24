let currentIndex = 0;

function showImage(index) {
  const imageElement = document.getElementById("slider-image");

  if (index === 0) {
    imageElement.src = "img1.jpg";
  } else if (index === 1) {
    imageElement.src = "img2.jpg";
  } else if (index === 2) {
    imageElement.src = "img3.jpg";
  } else if (index === 3) {
    imageElement.src = "img4.jpg";
  }
}

function nextImage() {
  if (currentIndex === 0) {
    currentIndex = 1;
  } else if (currentIndex === 1) {
    currentIndex = 2;
  } else if (currentIndex === 2) {
    currentIndex = 3;
  } else if (currentIndex === 3) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = 3;
  } else if (currentIndex === 1) {
    currentIndex = 0;
  } else if (currentIndex === 2) {
    currentIndex = 1;
  } else if (currentIndex === 3) {
    currentIndex = 2;
  }

  showImage(currentIndex);
}
