const API = 'https://jsonplaceholder.typicode.com/posts';
    const grid = document.getElementById('grid');
    const status = document.getElementById('status');
    const countEl = document.getElementById('count');
    const searchInput = document.getElementById('search');
    const perPageSelect = document.getElementById('perPage');
    const pager = document.getElementById('pager');

    let posts = [];
    let filtered = [];
    let page = 1;

    async function fetchPosts(){
      try{
        status.textContent = 'იტვირთება...';
        const res = await fetch(API);
        if(!res.ok) throw new Error('Network response was not ok');
        posts = await res.json();
        countEl.textContent = posts.length + ' პოსტი';
        filtered = posts.slice();
        render();
      }catch(err){
        status.textContent = 'შეცდომა: ' + err.message;
      }
    }

    function render(){
      status.style.display = 'none';
      const perPage = Number(perPageSelect.value);
      const total = filtered.length;
      const totalPages = Math.max(1, Math.ceil(total / perPage));
      page = Math.min(Math.max(1, page), totalPages);

      // pagination slice
      const start = (page - 1) * perPage;
      const pageItems = filtered.slice(start, start + perPage);

      grid.innerHTML = '';
      if(pageItems.length === 0){
        grid.innerHTML = '<div style="grid-column:1/-1;color:var(--muted)">არ არის შედეგები.</div>';
      }

      for(const p of pageItems){
        const card = document.createElement('article');
        card.className = 'card';
        const t = document.createElement('h3');
        t.className = 'title';
        t.innerText = p.title;
        const b = document.createElement('p');
        b.className = 'body';
        b.innerText = p.body;
        const meta = document.createElement('div');
        meta.className = 'meta';
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerText = 'userId: ' + p.userId;
        meta.appendChild(badge);
        card.appendChild(t);
        card.appendChild(b);
        card.appendChild(meta);
        grid.appendChild(card);
      }

      // pager
      pager.innerHTML = '';
      const prev = document.createElement('button');
      prev.className = 'btn';
      prev.innerText = 'Prev';
      prev.disabled = page === 1;
      prev.onclick = ()=>{page--; render(); window.scrollTo({top:0,behavior:'smooth'})};
      pager.appendChild(prev);

      const info = document.createElement('div');
      info.className = 'small';
      info.style.alignSelf = 'center';
      info.style.color = 'var(--muted)';
      info.innerText = `გვერდი ${page} / ${totalPages} — ${total} შედეგი`;
      pager.appendChild(info);

      const next = document.createElement('button');
      next.className = 'btn';
      next.innerText = 'Next';
      next.disabled = page === totalPages;
      next.onclick = ()=>{page++; render(); window.scrollTo({top:0,behavior:'smooth'})};
      pager.appendChild(next);
    }

    function applyFilter(){
      const q = searchInput.value.trim().toLowerCase();
      if(!q){ filtered = posts.slice(); }
      else{
        filtered = posts.filter(p => (p.title + ' ' + p.body).toLowerCase().includes(q));
      }
      page = 1;
      render();
    }

    // Event listeners
    searchInput.addEventListener('input', ()=>{ applyFilter(); });
    perPageSelect.addEventListener('change', ()=>{ page = 1; render(); });

    // init
    fetchPosts();