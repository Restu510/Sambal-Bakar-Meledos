     document.addEventListener('DOMContentLoaded', function() {
        var videoModal = document.getElementById('videoModal');
        videoModal.addEventListener('show.bs.modal', function(event) {
            var button = event.relatedTarget;
            var videoSrc = button.getAttribute('data-src');
            var videoIframe = videoModal.querySelector('#video');
            videoIframe.setAttribute('src', videoSrc);
        });

        videoModal.addEventListener('hidden.bs.modal', function() {
            var videoIframe = videoModal.querySelector('#video');
            videoIframe.setAttribute('src', '');
        });
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        const videoSrc = "https://www.instagram.com/reel/C6qXu5XyP_s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
        const videoModal = document.getElementById('videoModal');
        const videoElement = document.getElementById('video');

        videoModal.addEventListener('show.bs.modal', (event) => {
            videoElement.src = videoSrc;
        });

        videoModal.addEventListener('hide.bs.modal', (event) => {
            videoElement.src = "";
        });
    });
