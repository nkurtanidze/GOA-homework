const KEY = 'threeInputs';
    const i1 = document.getElementById('i1');
    const i2 = document.getElementById('i2');
    const i3 = document.getElementById('i3');
    const btn = document.getElementById('save');

    // თუ ადრე იყო შენახული — ავავსებს ინფუთებს
    (function load(){
      const raw = localStorage.getItem(KEY);
      if (!raw) return;
      try {
        const d = JSON.parse(raw);
        i1.value = d.i1 || '';
        i2.value = d.i2 || '';
        i3.value = d.i3 || '';
        console.log('ჩატვირთილი:', d);
      } catch(e){ console.warn(e) }
    })();

    btn.addEventListener('click', () => {
      const data = { i1: i1.value, i2: i2.value, i3: i3.value };
      localStorage.setItem(KEY, JSON.stringify(data));
      console.log('შენახული:', data);
    });