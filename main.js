        document.querySelector('.dropdown-arrow').addEventListener('click', function() {
            var menuList = document.getElementById('menu-list');
            menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
        });

        document.querySelectorAll('.list-container div:not(.placeholder)').forEach(function(item) {
            item.addEventListener('click', function() {
                var text = item.getAttribute('data-text');
                var imgSrc = item.getAttribute('data-logo');

                document.getElementById('selected-text').textContent = text;
                document.getElementById('selected-logo').src = imgSrc;
                document.getElementById('selected-logo').alt = text + " Logo";
                document.getElementById('menu-list').style.display = 'none';
            });
        });

        // Close menu if clicked outside
        window.addEventListener('click', function(e) {
            if (!e.target.matches('.dropdown-arrow') && !e.target.closest('.search-container')) {
                document.getElementById('menu-list').style.display = 'none';
            }
        });
        let currentIndex = 0;
        const containers = document.querySelectorAll('.container');
        const swipers = document.querySelectorAll('.swiper');

        function showContainer(index) {
            containers.forEach((container, i) => {
                container.classList.toggle('active', i === index);
                swipers[i].classList.toggle('active', i === index);
            });
        }

        setInterval(() => {
            showContainer((currentIndex + 1) % containers.length);
        }, 5000);

        swipers.forEach((swiper) => {
            swiper.addEventListener('click', () => {
                const index = parseInt(swiper.getAttribute('data-index'), 10);
                showContainer(index);
                currentIndex = index;
            });
        });

        // Handle touch events for swiping
        let startX;
        let endX;
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX > endX + 50) {
                showContainer((currentIndex + 1) % containers.length);
                currentIndex = (currentIndex + 1) % containers.length;
            } else if (startX < endX - 50) {
                showContainer((currentIndex - 1 + containers.length) % containers.length);
                currentIndex = (currentIndex - 1 + containers.length) % containers.length;
            }
        }); //for the image slider