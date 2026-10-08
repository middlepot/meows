    const imageURLs = [
      "../art/m_01.png",
      "../art/m_02.png",
      "../art/m_03.png"
    ];

    function displayRandomImage() {
      const randomIndex = Math.floor(Math.random() * imageURLs.length);
      const selectedImage = imageURLs[randomIndex];
      document.getElementById("randomImage").src = selectedImage;
    }

    document.addEventListener("DOMContentLoaded", displayRandomImage);