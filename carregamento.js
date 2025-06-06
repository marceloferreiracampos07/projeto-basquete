// Exibe o elemento de carregamento (loader) na tela
function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('show'); // Adiciona classe CSS para mostrar o loader
    }
}

// Oculta o elemento de carregamento (loader) da tela
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.remove('show'); // Remove classe CSS para esconder o loader
    }
}

// Mostra o loader e navega para uma URL após um breve atraso (300ms)
function showLoaderOnNavigate(event, url) {
    event.preventDefault(); // Impede o comportamento padrão do link
    showLoader(); // Exibe o loader
    setTimeout(() => {
        window.location.href = url; // Redireciona após o atraso
    }, 300);
}

// Mostra o loader e volta para a página anterior após um breve atraso (300ms)
function showLoaderAndGoBack(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    showLoader(); // Exibe o loader
    setTimeout(() => {
        history.back(); // Volta para a página anterior após o atraso
    }, 300);
}