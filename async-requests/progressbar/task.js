const form = document.getElementById('form');
const progress = document.getElementById('progress');
progress.value = 0;


form.addEventListener('submit', evt => {
    evt.preventDefault();

    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/upload';

    xhr.open('POST', url, true);
    
    xhr.upload.onprogress = evt => {
        progress.setAttribute('max', evt.total);
        progress.value = evt.loaded;
        console.log(evt.loaded);        
    }
    
    xhr.send(data);
});