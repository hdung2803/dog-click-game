const dog = document.getElementById('dog');
const dropZone = document.getElementById('drop-zone');
const message = document.getElementById('message');

dog.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'dog');
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Cho phép thả
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  if (data === 'dog') {
    dog.style.left = `${dropZone.offsetLeft + 10}px`;
    dog.style.top = `${dropZone.offsetTop + 10}px`;
    message.textContent = '🎉 Thắng rồi! Bạn đã đưa chú chó vào đích!';
  }
});
