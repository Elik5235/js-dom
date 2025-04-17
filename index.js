// При наведенні на кнопку "Ні" - потрібно її приховати (display: 'none')



const noBtn = document.getElementById('no-btn');

function ghostBtn(event) {
    // const btn = event.target;
    // btn.style.display = 'none';

    console.log('test');
    
    event.target.removeEventListener('mouseenter', ghostBtn);
}

noBtn.addEventListener('mouseenter', ghostBtn);