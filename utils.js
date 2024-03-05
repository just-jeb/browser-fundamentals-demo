function keepBusy(ms) {
    // Simulate a long task
    const start = performance.now();
    while (performance.now() - start < ms) {
        // Simulate a long task
    }
}

function hackIntoPentagon() {
    keepBusy(100);
    return 'encrypted data';
}

function decrypt(data) {
    keepBusy(300);
    return 'decrypted data';
}

function processData(data) {
    keepBusy(600);
}

function yieldToMain() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}