importScripts('utils.js');

onmessage = function (e) {
    const data = hackIntoPentagon();
    const decryptedData = decrypt(data);
    processData(decryptedData);
    postMessage('done');
}

