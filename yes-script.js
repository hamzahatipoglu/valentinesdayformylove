let musicPlaying = false

window.addEventListener('load', () => {
    launchConfetti();

    const music = document.getElementById('bg-music');
    
    // This switches the source to your Elvis file
    music.src = "music/L-O-V-E  Nat King Cole (Lyrics) [ ezmp3.co ].mp3";
    
    // Force the player to recognize the new file
    music.load(); 
    music.volume = 1.0;
    
    // Play the song and update the toggle button
    music.play().then(() => {
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }).catch(error => {
        console.log("Playback failed:", error);
    });
});

function launchConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00']
    const duration = 6000
    const end = Date.now() + duration

    // Initial big burst
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    })

    // Continuous side cannons
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        })

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        })
    }, 300)
}

function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}
