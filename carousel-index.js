    const imageURLs = [
      "./art/lm_01.png",
      "./art/lm_02.png",
      "./art/lm_03.png",
      "./art/lm_04.png"
    ];

    function displayRandomImage() {
      const randomIndex = Math.floor(Math.random() * imageURLs.length);
      const selectedImage = imageURLs[randomIndex];
      document.getElementById("randomImage").src = selectedImage;
    }

    document.addEventListener("DOMContentLoaded", displayRandomImage);