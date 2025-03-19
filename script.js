document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('form-status');
    status.innerText = 'Message Sent Successfully!';
    status.style.color = 'green';

    setTimeout(() => {
        status.innerText = '';
    }, 3000);

    this.reset();
});
