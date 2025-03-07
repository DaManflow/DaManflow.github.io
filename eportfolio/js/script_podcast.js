let currentAudio = null;

        function playAudio(part) {
            // Arrêter tous les autres audios
            var audios = document.querySelectorAll('.audio');
            audios.forEach(audio => {
                if (audio.id !== part) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });

            // Jouer ou reprendre la lecture de l'audio correspondant
            var audioElement = document.getElementById(part);
            if (audioElement.paused) {
                audioElement.play();
                currentAudio = audioElement;  // Mémoriser l'audio actuel
            } else {
                audioElement.pause();
            }

            // Mettre à jour la barre de progression
            updateProgress();
        }

        function pauseAudio() {
            if (currentAudio) {
                currentAudio.pause();
            }
        }

        function stopAudio() {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        }

        // Met à jour la barre de progression selon la position actuelle de l'audio
        function updateProgress() {
            if (currentAudio) {
                const progress = document.getElementById("progress");
                const percentage = (currentAudio.currentTime / currentAudio.duration) * 100;
                progress.value = percentage;
            }
        }

        // Permet de se positionner sur la barre de progression
        function seekAudio(event) {
            const progressBar = event.target;
            const percentage = (event.offsetX / progressBar.offsetWidth) * 100;
            const audioElement = currentAudio;
            if (audioElement) {
                audioElement.currentTime = (audioElement.duration / 100) * percentage;
            }
        }

        // Met à jour la position de l'audio à partir du range input
        function seekAudioFromRange(input) {
            const percentage = input.value;
            const audioElement = currentAudio;
            if (audioElement) {
                audioElement.currentTime = (audioElement.duration / 100) * percentage;
            }
        }

        // Actualisation de la barre de progression toutes les 100 ms
        setInterval(updateProgress, 100);