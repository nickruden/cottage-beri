// СКРИПТ МОДАЛЬНОГО ОКНА С ВИДЕО 

// ДОБАВЛЯЕТЕ НА КНОПКУ ИЛИ НА САМО ПРЕВЬЮ, ТО ЧТО ДОЛЖНО ОТКРЫТЬ ВИДЕО, DATA-TITLE И DATA-SRC
// И ОТКРЫВАЕТСЯ НУЖНОЕ ВИДЕО С НУЖНЫМ ЗАГОЛОВКОМ 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.video-play-button').forEach(button => {
        button.addEventListener('click', function () {
            const videoTitle = this.getAttribute('data-title');
            const videoSrc = this.getAttribute('data-src');

            // обновляем заголовок модального окна
            const modalTitle = document.querySelector('#videoModal .modal-video__title');
            modalTitle.innerHTML = videoTitle;

            // обновляем источник видео в модальном окне
            const videoPlayer = videojs('modal-video');
            videoPlayer.src({ src: videoSrc, type: 'video/mp4' });
            videoPlayer.load();
        });
    });

    const videoModal = document.getElementById('videoModal');
    videoModal.addEventListener('shown.bs.modal', function () {
        const videoPlayer = videojs('modal-video');
        videoPlayer.play();
    });

    videoModal.addEventListener('hidden.bs.modal', function () {
        const videoPlayer = videojs('modal-video');
        videoPlayer.pause();
        videoPlayer.currentTime(0);
    });
});