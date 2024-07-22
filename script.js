        const texts = [
            "Не теряйся.",
            "Твоя жизнь не тут.",
            "Онлайн убивает время.",
            "Не продолжай.",
            "Время летит.",
            "Не теряй время.",
            "Жизнь не ждёт.",
            "Тяжело."
        ];

        let currentTextIndex = 0;
        let typingIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100; // скорость печати (в миллисекундах)
        const deletingSpeed = 50; // скорость удаления (в миллисекундах)
        const pauseDuration = 1000; // пауза между текстами (в миллисекундах)

        function type() {
            const output = document.getElementById('hm');
            if (isDeleting) {
                // Удаление текста
                output.textContent = texts[currentTextIndex].substring(0, typingIndex - 1);
                typingIndex--;
                if (typingIndex < 0) {
                    isDeleting = false;
                    currentTextIndex = (currentTextIndex + 1) % texts.length;
                    typingIndex = 0;
                    setTimeout(type, pauseDuration); // пауза перед началом печати нового текста
                } else {
                    setTimeout(type, deletingSpeed);
                }
            } else {
                // Печать текста
                output.textContent = texts[currentTextIndex].substring(0, typingIndex + 1);
                typingIndex++;
                if (typingIndex === texts[currentTextIndex].length) {
                    isDeleting = true;
                    setTimeout(type, pauseDuration); // пауза перед началом удаления текста
                } else {
                    setTimeout(type, typingSpeed);
                }
            
            }
        }
        type() 

