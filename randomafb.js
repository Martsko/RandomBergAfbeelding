const images = [
    '../images/alp1.jpg',
    '../images/alp2.jpg',
    '../images/alp3.jpg',
    '../images/dolo2.jpeg',
    '../images/dolo3.jpg',
    '../images/dolo4.jpg',
    '../images/dolo5.jpg',
    '../images/dolo6.jpg',
    '../images/dolo7.jpg'
];

document.getElementById('randomImageBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const img = document.getElementById('randomImage');
    img.src = images[randomIndex];
    document.getElementById('randomImageContainer').style.display = 'block';
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        const randomIndex = Math.floor(Math.random() * images.length);
        const img = document.getElementById('randomImage');
        img.src = images[randomIndex];
        document.getElementById('randomImageContainer').style.display = 'block';
    }
});