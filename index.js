const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;
let color = 'red'
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

canvas.addEventListener('click', () => {
    if (color === "red"){
        color = "blue";
    }
    else {
        color = 'red';
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = Math.max(20, Math.min(mouseX, 280));
    const centerY = Math.max(20, Math.min(mouseY, 280));
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    requestAnimationFrame(animate);
}

animate();