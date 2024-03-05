const title = document.querySelector('h3');

export function hack() {
    title.textContent = 'Hacking';
    const data = hackIntoPentagon();
    const decryptedData = decrypt(data);
    processData(decryptedData);
    title.textContent = 'Hacked';
}