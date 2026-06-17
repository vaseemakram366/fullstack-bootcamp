const images = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500",
    "https://picsum.photos/id/1020/800/500",
    "https://picsum.photos/id/1024/800/500",
    "https://picsum.photos/id/1025/800/500",
    "https://picsum.photos/id/1031/800/500",
    "https://picsum.photos/id/1033/800/500",
    "https://picsum.photos/id/1035/800/500",
    "https://picsum.photos/id/1037/800/500",
    "https://picsum.photos/id/1040/800/500",
    "https://picsum.photos/id/1041/800/500",
    "https://picsum.photos/id/1043/800/500",
    "https://picsum.photos/id/1050/800/500",
    "https://picsum.photos/id/1052/800/500",
    "https://picsum.photos/id/1060/800/500",
    "https://picsum.photos/id/1065/800/500",
    "https://picsum.photos/id/1070/800/500",
    "https://picsum.photos/id/1080/800/500",
    "https://picsum.photos/id/1084/800/500"
];

const image = document.getElementById("slider-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const toggleBtn = document.getElementById("toggleBtn");

let currentIndex = 0;
let isPlaying = true;

image.src = images[currentIndex];

function showImage(index) {
    image.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

let slideshow = setInterval(nextImage, 2000);

function stopSlideshow() {
    clearInterval(slideshow);
    isPlaying = false;
    toggleBtn.textContent = "Start Slideshow";
}

function startSlideshow() {
    slideshow = setInterval(nextImage, 2000);
    isPlaying = true;
    toggleBtn.textContent = "Stop Slideshow";
}

toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
});

nextBtn.addEventListener("click", () => {
    stopSlideshow();
    nextImage();
});

prevBtn.addEventListener("click", () => {
    stopSlideshow();
    prevImage();
});