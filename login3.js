const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');
const mascotContainer = document.querySelector('.mascot-container');
const pupils = document.querySelectorAll('.pupil');

// 1. Eye tracking: Pupils follow as you type email
emailInput.addEventListener('input', (e) => {
    let val = e.target.value.length;
    let move = Math.min(val * 0.6, 12); 
    pupils.forEach(p => {
        // Moves pupils horizontally based on text length
        p.setAttribute('transform', `translate(${move - 6}, 5)`);
    });
});

// 2. Cover eyes: Characters hide when password field is clicked
passwordInput.addEventListener('focus', () => {
    mascotContainer.classList.add('is-hiding');
});

// 3. Uncover eyes: When clicking away from password
passwordInput.addEventListener('blur', () => {
    mascotContainer.classList.remove('is-hiding', 'is-peeking');
});

// 4. Peek logic: Show/Hide password toggle
toggleBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        mascotContainer.classList.add('is-peeking');
        mascotContainer.classList.remove('is-hiding');
    } else {
        passwordInput.type = 'password';
        mascotContainer.classList.remove('is-peeking');
        mascotContainer.classList.add('is-hiding');
    }
});

// 5. Neck/Head Follow: Characters tilt slightly toward mouse movement
document.addEventListener('mousemove', (e) => {
    const chars = document.querySelectorAll('.character');
    const x = (e.clientX / window.innerWidth - 0.5) * 15; 
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    chars.forEach(char => {
        char.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
});