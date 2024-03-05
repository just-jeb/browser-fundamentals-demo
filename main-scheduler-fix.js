const title = document.querySelector('h3');

export async function hack() {
    title.textContent = 'Hacking';
    const data = await scheduler.postTask(
        hackIntoPentagon,
        { priority: 'user-blocking' }
    );
    const decryptedData = await scheduler.postTask(
        () => decrypt(data),
        { priority: 'user-visible' }
    );
    await scheduler.postTask(
        () => processData(decryptedData),
        { priority: 'background' }
    );
    title.textContent = 'Hacked';
}