const suitest = require('suitest-js-api');

async function main() {
    await suitest.openApp();

    /* Check App */
    await suitest.assert.element('App').exists().timeout(10000);

    /* Check Menu */
	// await suitest.assert.element('Logo').matches([
	// 	suitest.PROP.IMAGE,
	// 	suitest.PROP.OPACITY,
	// ]).timeout(5000);
	// await suitest.assert.element('Caminandes 1').visible().timeout(10000);
    // await suitest.assert.element('Caminandes 2').visible().timeout(10000);
    // // await suitest.assert.element('Caminandes 3').visible().timeout(10000);
    // await suitest.assert.element('Sintel').visible().timeout(10000);
    // // await suitest.assert.element('Big Buck Bunny').visible().timeout(10000);

	// await suitest.assert.element('Cominandes 1 img').matches([
	// 	suitest.PROP.IMAGE,
	// 	suitest.PROP.IMAGE_LOAD_STATE,
	// ]).timeout(5000);
	// await suitest.assert.element('Cominandes 1 title focused').matches([
	// 	suitest.PROP.TEXT_COLOR,
	// 	suitest.PROP.TEXT_CONTENT,
	// ]).timeout(5000);

    /* Check each option */
    await suitest.press(suitest.VRC.OK);
    await suitest.press(suitest.VRC.OK).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);

    await suitest.press(suitest.VRC.BACK);
    await suitest.press(suitest.VRC.BACK);

    await suitest.press(suitest.VRC.RIGHT);
    await suitest.press(suitest.VRC.OK);
    await suitest.press(suitest.VRC.OK).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);

    await suitest.press(suitest.VRC.BACK);
    await suitest.press(suitest.VRC.BACK);

    await suitest.press(suitest.VRC.RIGHT);
    await suitest.press(suitest.VRC.OK);
    await suitest.press(suitest.VRC.OK).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);

    await suitest.press(suitest.VRC.BACK);
    await suitest.press(suitest.VRC.BACK);

    await suitest.press(suitest.VRC.RIGHT);
    await suitest.press(suitest.VRC.OK);
    await suitest.press(suitest.VRC.OK).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);

    await suitest.press(suitest.VRC.BACK);
    await suitest.press(suitest.VRC.BACK);

    await suitest.press(suitest.VRC.RIGHT);
    await suitest.press(suitest.VRC.OK);
    await suitest.press(suitest.VRC.OK).until(
        suitest.assert.video().isPlaying()
    ).interval(1000).repeat(5);

    await suitest.press(suitest.VRC.EXIT);
    await suitest.closeSession();

    console.log('Success!');
}

main();
