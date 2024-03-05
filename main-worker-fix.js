const title = document.querySelector('h3');

export function hack() {
    title.textContent = 'Hacking';
    const worker = new Worker('worker.js');
    worker.onmessage = function (e) {
        if (e.data === 'done') {
            title.textContent = 'Hacked';
        }
    };
    worker.postMessage('start');
}