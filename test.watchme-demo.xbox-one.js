const suitest = require('suitest-js-api');
const {openApp, closeSession, press, VRC, PROP} = suitest;

async function main() {
    await openApp();
    await press(VRC.OK);
    await assert.element('logo').matchesRepo(PROP.IMAGE);
    await closeSession();
}
main().catch(console.error).finally(() => closeSession());;

