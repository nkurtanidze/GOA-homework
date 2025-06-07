const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let y = 20;
  let speed = 3;
  const radius = 20;
  const x = canvas.width / 2;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#3498db';
    ctx.fill();
    ctx.closePath();

    y += speed;

    if (y + radius > canvas.height || y - radius < 0) {
      speed = -speed;
    }

    requestAnimationFrame(animate);
  }

  animate();