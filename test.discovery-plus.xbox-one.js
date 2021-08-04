const suitest = require('suitest-js-api');

async function main() {
    await suitest.openApp();
    console.log('Success!');
    await suitest.closeSession();
}

main();
