function toggleImageSize(img) {
    if (img.style.width === '640px') {
        img.style.width = '1280px';
        img.style.height = '1024px';
    } else {
        img.style.width = '640px';
        img.style.height = '480px';
    }
}
