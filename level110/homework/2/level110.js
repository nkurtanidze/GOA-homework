const div = document.getElementById('animatedDiv');

  const styles = [
    { borderRadius: '0%', backgroundColor: '#3498db' },
    { borderRadius: '50%', backgroundColor: '#e74c3c' },
    { borderRadius: '25%', backgroundColor: '#2ecc71' },
    { borderRadius: '75%', backgroundColor: '#9b59b6' }
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % styles.length;
    div.style.borderRadius = styles[index].borderRadius;
    div.style.backgroundColor = styles[index].backgroundColor;
  }, 5000);