document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const venue = document.getElementById('venue').value;
    const specialRequests = document.getElementById('specialRequests').value;
    
    // Display confirmation message
    const confirmationMessage = `
        <h3>Reservation Confirmed!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Venue:</strong> ${venue}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
    `;
    
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
    
    // Optionally, reset the form
    document.getElementById('reservationForm').reset();
});
