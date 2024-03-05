const title = document.querySelector('h3');

export function hack() {
    title.textContent = 'Hacking';
    setTimeout(() => {
        const data = hackIntoPentagon();
        setTimeout(() => {
            const decryptedData = decrypt(data);
            setTimeout(() => {
                processData(decryptedData);
                title.textContent = 'Hacked';
            }, 0)
        }, 0)
    }, 0);
}