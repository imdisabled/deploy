const rand = document.getElementById('rand');

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }

    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateRandomString() {
    for(let i = 0; i < 40; i++) {
        rand.innerText = generateRandomString(20);
        await sleep(100); // pause for 5 milliseconds
    }
}

updateRandomString();