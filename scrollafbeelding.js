 const images = [
            '../images/dolo2.jpeg',
            '../images/dolo3.jpg',
            '../images/dolo4.jpg',
            '../images/dolo5.jpg',
            '../images/dolo6.jpg',
            '../images/dolo7.jpg'
        ];
        let currentIndex = 0;
        const img = document.getElementById('main-image');

        function showImage(index) {
            img.src = images[index];
            img.alt = 'Dolomieten ' + (index + 1);
        }

        document.getElementById('prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        document.getElementById('next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }
        });

        img.addEventListener('click', () => {
            Fancybox.show(images.map(src => ({ src })), { startIndex: currentIndex });
        });