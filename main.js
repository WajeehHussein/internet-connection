let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.btn');

window.onload = () => {
    (window.navigator.onLine) ? onLine() : offLine();
}

window.addEventListener("online", () => onLine());

window.addEventListener("offline", () => offLine());

reload.onclick = () => { window.location.reload() };

const onLine = () => {
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');

}


const offLine = () => {
    title.innerHTML = 'Offline Now';
    title.style.color = 'red';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
} 