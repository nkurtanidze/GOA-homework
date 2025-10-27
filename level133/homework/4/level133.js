const input = document.getElementById('myInput');
    const output = document.getElementById('output');
    input.addEventListener('input', (event) => {
      const text = event.target.value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');

      output.innerHTML = text || 'აქ გამოჩნდება შენი ტექსტი...';
    });