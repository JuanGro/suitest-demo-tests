const suitest = require('suitest-js-api');

async function closeApp() {
    await suitest.press(suitest.VRC.EXIT);
    await suitest.application().hasExited();
    await suitest.closeSession();
}

async function checkVideoPlaying(i) {
    await suitest.press(suitest.VRC.OK).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);
    await suitest.sleep(5000);
    await suitest.assert.video().isPlaying();
}

async function returnToPreviousMenu() {
    await suitest.press(suitest.VRC.BACK);
    await suitest.press(suitest.VRC.BACK);
}

async function checkEachOption() {
    for (let i = 1; i <= 5; i++) {
        await suitest.press(suitest.VRC.OK);
        await checkVideoPlaying();
        await returnToPreviousMenu();
        await suitest.press(suitest.VRC.RIGHT);
    }
}

async function main() {
    await suitest.openApp();
    await checkEachOption();
    await closeApp();
    console.log('Success!');
}

main();
