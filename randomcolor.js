        function getRandomColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }

        function changeTextColor() {
            document.querySelector('.maintext h1').style.color = getRandomColor();
        }

        document.getElementById('alpenBtn').addEventListener('click', changeTextColor);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'R' || e.key === 'r') {
                changeTextColor();
            }
        });