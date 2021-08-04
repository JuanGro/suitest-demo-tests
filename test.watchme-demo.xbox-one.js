const suitest = require('suitest-js-api');
const utils = require('./utils');

const platform = 'XBOX-ONE';

async function closeApp() {
    await suitest.press(suitest.VRC.HOME);
    await suitest.press(suitest.VRC.A);
    await suitest.application().hasExited();
    await suitest.closeSession();
}

async function checkVideoPlaying(i) {
    await suitest.press(suitest.VRC.A).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);
    await suitest.sleep(5000);
    await suitest.assert.video().isPlaying();
}

async function returnToPreviousMenu() {
    await suitest.press(suitest.VRC.B);
    await suitest.press(suitest.VRC.B);
}

async function checkEachOption() {
    for (let i = 1; i <= 5; i++) {
        await suitest.press(suitest.VRC.A);
        console.log(`Test #${i}`);
        await checkVideoPlaying();
        await utils.saveScreenshot(platform, 'video-' + Date.now().toString());
        await returnToPreviousMenu();
        await suitest.press(suitest.VRC.RIGHT);
    }
}

async function main() {
    await suitest.openApp();
    await utils.saveScreenshot(platform, 'start-' + Date.now().toString());
    await checkEachOption();
    await utils.saveScreenshot(platform, 'end-' + Date.now().toString());
    await closeApp();
    console.log('Success!');
}

main();
