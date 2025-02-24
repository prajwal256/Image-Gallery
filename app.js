const gallery = document.getElementById('gallery');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        
        function getRandomImage() {
            return `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
        }
        
        function loadImages() {
            for (let i = 0; i < 30; i++) {
                let img = document.createElement('img');
                img.src = getRandomImage();
                img.alt = `Random Image ${i + 1}`;
                img.addEventListener('click', function() {
                    lightbox.style.display = 'flex';
                    lightboxImg.src = this.src;
                });
                gallery.appendChild(img);
            }
        }
        
        function closeLightbox() {
            lightbox.style.display = 'none';
        }
        
        loadImages();