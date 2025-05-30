function showLoader(){
    const loader =document.getElementById('loader');
    if (loader) {
        loader.classList.add('show');
    }
}

function hideLoader(){
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.remove('show');
    }
}

function showLoaderOnNavigate(event, url) {
    event.preventDefault();
    showLoader();
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

function showLoaderAndGoBack(event) {
    event.preventDefault();
    showLoader();
    setTimeout(() => {
        history.back();
    }, 300);
}