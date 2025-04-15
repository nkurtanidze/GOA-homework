// davaleba 1
const myDiv = document.getElementById('myDiv');

let isAnimating = false;

myDiv.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;
    
    // Hide the div
    myDiv.classList.add('hidden');
    
    // Wait for 1 second before showing it again
    setTimeout(() => {
        // Show the div
        myDiv.classList.remove('hidden');
        
        // Reset the animation state
        setTimeout(() => {
            isAnimating = false;
        }, 1000); // Wait for the second 1-second animation
    }, 1000); // 1 second for it to be hidden
});