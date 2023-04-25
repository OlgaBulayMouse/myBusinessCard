'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    
    function displayPhoneNumber() {
        message.textContent = '+375297862970';
    };
    
    phone.addEventListener('click', displayPhoneNumber);  
});