document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! Your appointment request has been sent. We will contact you shortly.');
        form.reset();
    });
});
