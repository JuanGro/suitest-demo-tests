const suitest = require('suitest-js-api');

async function saveScreenshot(platform, filename) {
    switch(platform) {
        case 'XBOX-ONE':
            await suitest.saveScreenshot(`./screenshots/xbox-one/${filename}.png`);
            break;
        default:
            console.log('This feature is not supported.');
            break;
    }
}

module.exports = {
    saveScreenshot
}