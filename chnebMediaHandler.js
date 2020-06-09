let chnebMediaHandler = (function () {
    let carouselsManager;

    function carouselInit() {
        carouselsManager = { carousels: [] };
        let carouselsOnPage = document.getElementsByClassName("chnebrousel");
        let currentMediaDisplayed = undefined;

        for (let i = 0; i < carouselsOnPage.length; i++) {
            let actualCarousel = carouselsOnPage[i];
            carouselsManager.carousels[i] = {
                mainElement: actualCarousel,
                items: actualCarousel.getElementsByClassName("chnebrousel-carte"),
                buttons: actualCarousel.getElementsByClassName("chnebrousel-buttons")
            };
        }

        return carouselsManager;
    }
    function videoClickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        const mediaType = determineMediaTypeByHref(event.currentTarget);
        setMediaLayout(event.currentTarget, mediaType);
    }

    function determineMediaTypeByHref(item) {
        const hrefValue = item.getAttribute("href");
        const ext = hrefValue.substr(hrefValue.lastIndexOf('.') + 1);
        if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "ico" || ext === "svg" || ext === "bmp") {
            return "image";
        } else if (ext === "mp4" || ext === "avi" || ext === "wmv" || ext === "flv") {
            return "video";
        } else {
            return undefined;
        }
    }

    function mediaPlayerInit() {
        videosBtns = document.querySelectorAll(".chneb-media-btn");
        videosBtns.forEach(videoBtn => {
            for (let i = 0; i < videosBtns.length; i++) {
                videosBtns[i].addEventListener("click", videoClickEvent);
            }
        });
    }

    function setMediaLayout(item, mediaType) {
        function overlayClickEvent(e) {
            currentMediaDisplayed.removeEventListener("click", overlayClickEvent);
            document.body.removeChild(currentMediaDisplayed);
        }
        const overlay = document.createElement("div");
        overlay.classList.add("chneb-overlay");
        let mediaTag;
        if (mediaType === "video") {
            mediaTag = document.createElement("video");
            mediaTag.setAttribute("autoplay", "on");
            mediaTag.setAttribute("controls", "on");
        } else if (mediaType === "image") {
            mediaTag = document.createElement("img");
        }
        mediaTag.src = item.getAttribute("href");
        overlay.appendChild(mediaTag);
        document.body.appendChild(overlay);
        currentMediaDisplayed = overlay;
        currentMediaDisplayed.addEventListener("click", overlayClickEvent);
    }

    return {
        carouselInit: carouselInit,
        mediaPlayerInit: mediaPlayerInit
    };
})();

const videos = chnebMediaHandler.mediaPlayerInit();
