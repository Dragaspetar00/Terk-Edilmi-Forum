/* ============================================
   SÖZLÜK 12 - YIKIK DÖKÜK GLITCH SCRIPT
   ============================================ */

// Yıl değişimi glitch
function initYearGlitch() {
    const yearElement = document.getElementById('year');
    if (!yearElement) return;

    const years = ['2000', '2016', '2024', '2028', '2███', '1998', '????', '∞', '1̷9̷9̷8̷'];
    let glitchInterval;

    function glitchYear() {
        clearInterval(glitchInterval);
        let count = 0;
        glitchInterval = setInterval(() => {
            yearElement.textContent = years[Math.floor(Math.random() * years.length)];
            yearElement.style.color = count % 2 ? '#ff0000' : '#94a394';
            count++;
            if (count > 5) {
                clearInterval(glitchInterval);
                yearElement.textContent = '2000';
                yearElement.style.color = '#94a394';
            }
        }, 100);
    }

    // Rastgele yıl glitch tetikle
    setInterval(() => {
        if (Math.random() > 0.9) {
            glitchYear();
        }
    }, 5000);
}

// Online sayısı değişimi
function initOnlineCounter() {
    const onlineElement = document.getElementById('online-now');
    if (!onlineElement) return;

    setInterval(() => {
        if (Math.random() > 0.95) {
            const nums = ['1', '0', '2', '?', '███', '-1', '∞'];
            onlineElement.textContent = nums[Math.floor(Math.random() * nums.length)];
            setTimeout(() => {
                onlineElement.textContent = '1';
            }, 500);
        }
    }, 3000);
}

// Gelecek tarihi glitch
function initFutureDateGlitch() {
    const futureDate = document.getElementById('future-date');
    if (!futureDate) return;

    setInterval(() => {
        if (Math.random() > 0.8) {
            const day = Math.floor(Math.random() * 31) + 1;
            const month = Math.floor(Math.random() * 12) + 1;
            const year = Math.floor(Math.random() * 100) + 2025;
            futureDate.textContent = `${year}-${month < 10 ? '0'+month : month}-${day < 10 ? '0'+day : day}`;
            futureDate.style.opacity = '1';
            setTimeout(() => {
                futureDate.textContent = '2█28-██-██';
                futureDate.style.opacity = '0.8';
            }, 1000);
        }
    }, 7000);
}

// Konu sayısı artışı (hayalet aktivite)
function initTopicCounter() {
    const topicCount = document.getElementById('topic-count');
    if (!topicCount) return;

    let currentCount = 8451;
    setInterval(() => {
        if (Math.random() > 0.95) {
            currentCount++;
            topicCount.textContent = currentCount;
            topicCount.style.color = '#8b0000';
            setTimeout(() => {
                topicCount.style.color = '#666';
            }, 2000);
        }
    }, 10000);
}

// Gizli mesaj
function initHiddenMessage() {
    const hiddenMsg = document.getElementById('hidden-message');
    if (!hiddenMsg) return;

    setTimeout(() => {
        setInterval(() => {
            hiddenMsg.style.display = 'inline';
            setTimeout(() => {
                hiddenMsg.style.display = 'none';
            }, 200);
        }, 15000);
    }, 5000);
}

// Rastgele element titremesi
function randomShake() {
    const elements = document.querySelectorAll('.sidebar-box, .message-box, .nav a, .forum-table tr');
    const randomEl = elements[Math.floor(Math.random() * elements.length)];
    if (randomEl) {
        const originalTransform = randomEl.style.transform;
        randomEl.style.transform = 'translateX(-2px)';
        setTimeout(() => {
            randomEl.style.transform = 'translateX(2px)';
            setTimeout(() => {
                randomEl.style.transform = originalTransform || 'translateX(0)';
            }, 50);
        }, 50);
    }
}

// Metin bozulması
function corruptText() {
    if (Math.random() > 0.97) {
        const allText = document.querySelectorAll('span:not(.glitch-text), div:not(.logo)');
        const target = allText[Math.floor(Math.random() * allText.length)];
        if (!target) return;
        
        const originalText = target.innerText;
        if (originalText && originalText.length > 0 && originalText.length < 50) {
            const corruptChars = '█▓▒░╬═║╔╗╚╝◆◇○●◘◙';
            let corrupted = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() > 0.7) {
                    corrupted += corruptChars[Math.floor(Math.random() * corruptChars.length)];
                } else {
                    corrupted += originalText[i];
                }
            }
            target.innerText = corrupted;
            setTimeout(() => {
                target.innerText = originalText;
            }, 200);
        }
    }
}

// Sayfa titremesi (deprem efekti)
function initEarthquake() {
    setInterval(() => {
        if (Math.random() > 0.98) {
            document.body.style.animation = 'none';
            setTimeout(() => {
                document.body.style.animation = 'bodyShake 20s infinite, earthquake 0.5s';
                setTimeout(() => {
                    document.body.style.animation = 'bodyShake 20s infinite';
                }, 500);
            }, 10);
        }
    }, 10000);
}

// Rastgele karakter değişimi
function randomCharGlitch() {
    setInterval(() => {
        if (Math.random() > 0.98) {
            const elements = document.querySelectorAll('.message-content, .sidebar-box, h3');
            const random = elements[Math.floor(Math.random() * elements.length)];
            if (!random) return;
            
            const text = random.innerText;
            if (text && text.length > 0) {
                const pos = Math.floor(Math.random() * text.length);
                const glitchChar = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
                random.innerText = text.substr(0, pos) + glitchChar + text.substr(pos + 1);
                setTimeout(() => {
                    random.innerText = text;
                }, 100);
            }
        }
    }, 3000);
}

// Online counter animasyon
function initOnlineGlitch() {
    const onlineCounter = document.getElementById('online-counter');
    if (!onlineCounter) return;

    setInterval(() => {
        if (Math.random() > 0.9) {
            onlineCounter.style.opacity = '0.3';
            setTimeout(() => {
                onlineCounter.style.opacity = '1';
            }, 100);
        }
    }, 5000);
}

// Yan panel kutularını kaybet/bul
function initSidebarGlitch() {
    const sidebarBoxes = document.querySelectorAll('.sidebar-box');
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            const randomBox = sidebarBoxes[Math.floor(Math.random() * sidebarBoxes.length)];
            if (randomBox) {
                randomBox.style.opacity = '0';
                setTimeout(() => {
                    randomBox.style.opacity = '1';
                }, 300);
            }
        }
    }, 8000);
}

// Mesaj kutusu anomali efekti
function initMessageAnomaly() {
    const messages = document.querySelectorAll('.message-box');
    
    setInterval(() => {
        if (Math.random() > 0.92) {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            if (randomMsg && !randomMsg.classList.contains('anomaly')) {
                randomMsg.style.border = '2px solid #8b0000';
                randomMsg.style.background = 'rgba(255,200,200,0.2)';
                setTimeout(() => {
                    randomMsg.style.border = '';
                    randomMsg.style.background = '';
                }, 1000);
            }
        }
    }, 6000);
}

// Link bozma
function initLinkCorruption() {
    const links = document.querySelectorAll('.nav a:not(.broken)');
    
    setInterval(() => {
        if (Math.random() > 0.97) {
            const randomLink = links[Math.floor(Math.random() * links.length)];
            if (randomLink) {
                const originalText = randomLink.textContent;
                randomLink.textContent = '█████';
                randomLink.style.opacity = '0.3';
                setTimeout(() => {
                    randomLink.textContent = originalText;
                    randomLink.style.opacity = '1';
                }, 500);
            }
        }
    }, 7000);
}

// Scroll glitch
function initScrollGlitch() {
    let isGlitching = false;
    
    window.addEventListener('scroll', () => {
        if (!isGlitching && Math.random() > 0.98) {
            isGlitching = true;
            document.body.style.filter = 'blur(2px)';
            setTimeout(() => {
                document.body.style.filter = 'none';
                isGlitching = false;
            }, 100);
        }
    });
}

// Sayfa yüklendiğinde tüm fonksiyonları başlat
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sözlük 12 yükleniyor...');
    
    // Tüm glitch efektlerini başlat
    initYearGlitch();
    initOnlineCounter();
    initFutureDateGlitch();
    initTopicCounter();
    initHiddenMessage();
    initEarthquake();
    initOnlineGlitch();
    initSidebarGlitch();
    initMessageAnomaly();
    initLinkCorruption();
    initScrollGlitch();
    
    // Sürekli efektler
    setInterval(randomShake, 4000);
    setInterval(corruptText, 2000);
    setInterval(randomCharGlitch, 3000);
    
    console.log('Sistem başlatıldı. Çevrimiçi kullanıcı: ???');
});

// Console'a gizli mesaj
setTimeout(() => {
    console.log('%c⚠ UYARI', 'color: #cc9900; font-size: 20px; font-weight: bold;');
    console.log('%cBu site 2016\'da güncellenmedi.', 'color: #666; font-size: 12px;');
    console.log('%cAma biri hâlâ burada...', 'color: #8b0000; font-size: 14px; font-weight: bold;');
}, 3000);