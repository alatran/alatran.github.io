
        const greetings = [
            "hello, world!",       // English
            "¡hola mundo!",        // Spanish
            "你好世界!",           // Chinese (Mandarin)
            "xin chào thế giới!"    
        ];

        let index = 0;
        const helloElement = document.getElementById("hello");

        setInterval(() => {
            index = (index + 1) % greetings.length;
            helloElement.textContent = greetings[index];
        }, 1500); 

function showOverlay(button) {
      const card = button.closest('.card');
      const title = card.getAttribute('data-title');
      const image = card.getAttribute('data-image');
      const description = card.getAttribute('data-description');

      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalImage').src = image;
      document.getElementById('modalDescription').innerText = description;

      document.getElementById('overlay').style.display = 'flex';
    }

    function hideOverlay() {
      document.getElementById('overlay').style.display = 'none';
    }