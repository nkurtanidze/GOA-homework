// 10 div ელემენტის შექმნა და მათში p თეგების დამატება
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = `Paragraph ${i + 1}`;
    div.appendChild(p);
    document.body.appendChild(div);
}

// ყველა p თეგის შერჩევა და მათი ფონტის ზომის 3px-მდე დაყენება
let paragraphs = document.querySelectorAll('div p');
paragraphs.forEach(p => {
    p.style.fontSize = '3px';
});
