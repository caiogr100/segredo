// ========================================
// CONFIGURAÇÕES INICIAIS
// ========================================

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const progressFill = document.querySelector('.progress-fill');

// Música de fundo
const backgroundMusic = document.getElementById('backgroundMusic');

// ========================================
// INICIALIZAÇÃO
// ========================================

function init() {
    updateSlideCounter();
    updateProgressBar();
    updateNavigationButtons();
    
    // Auto-play da música após primeira interação
    document.addEventListener('click', () => {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(e => console.log('Aguardando interação para tocar música'));
            backgroundMusic.volume = 0.4; // Volume ajustado para não sobrepor
        }
    }, { once: true });
}

// ========================================
// NAVEGAÇÃO ENTRE SLIDES
// ========================================

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    const currentSlide = slides[currentSlideIndex];
    const nextSlide = slides[index];
    
    // Determinar direção da animação
    const isForward = index > currentSlideIndex;
    
    // Remover classe active do slide atual
    currentSlide.classList.remove('active');
    
    // Adicionar animações de saída e entrada
    if (isForward) {
        currentSlide.classList.add('slide-out-left');
        nextSlide.classList.add('slide-in-right');
    } else {
        currentSlide.classList.add('slide-out-right');
        nextSlide.classList.add('slide-in-left');
    }
    
    // Após a animação, limpar classes e ativar próximo slide
    setTimeout(() => {
        currentSlide.classList.remove('slide-out-left', 'slide-out-right');
        nextSlide.classList.remove('slide-in-right', 'slide-in-left');
        nextSlide.classList.add('active');
        
        currentSlideIndex = index;
        updateSlideCounter();
        updateProgressBar();
        updateNavigationButtons();
    }, 800); // Sincronizado com duração da animação CSS
}

function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
        goToSlide(currentSlideIndex + 1);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        goToSlide(currentSlideIndex - 1);
    }
}

// ========================================
// ATUALIZAÇÃO DA INTERFACE
// ========================================

function updateSlideCounter() {
    currentSlideSpan.textContent = currentSlideIndex + 1;
}

function updateProgressBar() {
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
}

function updateNavigationButtons() {
    // Desabilitar botão "anterior" no primeiro slide
    prevBtn.disabled = currentSlideIndex === 0;
    
    // Desabilitar botão "próximo" no último slide
    nextBtn.disabled = currentSlideIndex === totalSlides - 1;
}

// ========================================
// EVENT LISTENERS
// ========================================

// Botões de navegação
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
});

// Clique no slide para avançar (exceto no último slide)
document.querySelectorAll('.slide').forEach(slide => {
    slide.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) {
            nextSlide();
        }
    });
});

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
});

// Prevenir scroll (para garantir experiência no telão)
document.addEventListener('wheel', (e) => {
    e.preventDefault();
}, { passive: false });

// ========================================
// EFEITOS ESPECIAIS PARA SLIDES ESPECÍFICOS
// ========================================

// Adicionar efeito especial ao entrar no último slide (slide 31)
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active') && 
            mutation.target.id === 'slide-31') {
            // Último slide ativo - momento do pedido!
            console.log('Momento especial! 🧡');
        }
    });
});

// Observar mudanças de classe em todos os slides
slides.forEach(slide => {
    observer.observe(slide, { attributes: true, attributeFilter: ['class'] });
});

// ========================================
// INICIAR APRESENTAÇÃO
// ========================================

init();

// ========================================
// UTILITÁRIOS OPCIONAIS
// ========================================

// Função para reiniciar a apresentação (útil para testes)
function restartPresentation() {
    goToSlide(0);
}

// Expor função globalmente para debug/testes
window.restartPresentation = restartPresentation;

// Função para pular para um slide específico (útil para testes)
window.goToSlide = goToSlide;

// Log de inicialização
console.log('✨ Apresentação carregada com sucesso!');
console.log(`📊 Total de slides: ${totalSlides}`);
console.log('🧡 Boa sorte com o pedido!');
