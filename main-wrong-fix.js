const title = document.querySelector('h3');

export function hack() {
    title.textContent = 'Hacking';
    const data = setTimeout(hackIntoPentagon, 0);
    const decryptedData = setTimeout(() => decrypt(data));
    setTimeout(() => processData(decryptedData));
    title.textContent = 'Hacked';
}