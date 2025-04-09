document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const people = document.getElementById('people').value;
  const datetime = document.getElementById('datetime').value;

  const message = `Cảm ơn ${name}, bạn đã đặt bàn cho ${people} người vào lúc ${new Date(datetime).toLocaleString()}.`;
  
  document.getElementById('confirmation').textContent = message;

  this.reset();
});
