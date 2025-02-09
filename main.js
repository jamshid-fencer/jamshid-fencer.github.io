
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.count');
  const resetButton = document.querySelector('.reset'); // кнопка сброса

  button.addEventListener('click', () => {
      let count = parseInt(button.textContent, 10) + 1;
      button.textContent = count.toString().padStart(2, '0');
  });

  resetButton.addEventListener('click', () => {
      button.textContent = '00'; // сбрасываем счётчик на 00
  });
});



const headings = ["Субханаллах", "Альхамдулилях", "Аллаху акбар", "Астагфируллах"];
        let index = 0;
        
        function nextHeading() {
            index = (index + 1) % headings.length;
            document.getElementById('carousel').textContent = headings[index];
        }
        
        function prevHeading() {
            index = (index - 1 + headings.length) % headings.length;
            document.getElementById('carousel').textContent = headings[index];
        }