const title = document.querySelector('h3');

export async function hack() {
    title.textContent = 'Hacking';
    await yieldToMain();
    const data = hackIntoPentagon();
    await yieldToMain();
    const decryptedData = decrypt(data);
    await yieldToMain();
    processData(decryptedData);
    title.textContent = 'Hacked';
}

// This is actually the same: 

// function hack() {
//     title.textContent = 'Hacking';
//     return yieldToMain().then(() => {
//         const data = hackIntoPentagon();
//         return yieldToMain().then(() => {
//             const decryptedData = decrypt(data);
//             return yieldToMain().then(() => {
//                 processData(decryptedData);
//                 title.textContent = 'Hacked';
//             })
//         })
//     })
// }