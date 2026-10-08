    const imageURLs = [
      "../art/l_01.png",
      "../art/l_02.png",
      "../art/l_03.png"
    ];

    function displayRandomImage() {
      const randomIndex = Math.floor(Math.random() * imageURLs.length);
      const selectedImage = imageURLs[randomIndex];
      document.getElementById("randomImage").src = selectedImage;
    }

    document.addEventListener("DOMContentLoaded", displayRandomImage);