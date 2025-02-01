// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    // Обработчик события отправки формы
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем стандартную отправку формы
        
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();
        
        if (!nameInput || !emailInput || !messageInput) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }
        
        // Здесь можно добавить код для отправки данных на сервер через AJAX или fetch,
        // либо просто вывести сообщение о том, что форма была успешно отправлена.
        
        alert('Спасибо! Ваше сообщение было успешно отправлено.');
        
        // Очистка полей формы после отправки
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
});
