const container = document.createElement('div');
document.body.appendChild(container);

let size = 50; // საწყისი ზომა

for (let i = 0; i < 10; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.background = i % 2 === 0 ? 'blue' : 'red';
    newDiv.style.margin = '5px';

    if (i % 2 === 0) {
        container.prepend(newDiv); // თავში დამატება
    } else {
        container.appendChild(newDiv); // ბოლოში დამატება
    }

    size *= 2; // ზომის გაორმაგება
}
