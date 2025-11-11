const SKINS = ["basic", "dark", "modern"];
let skinIndex = 0;

function setSkin(name) {
    document.getElementById("skinStylesheet").href = `SKINS/${name}.css`;
}

function changeSkin(name) {
    skinIndex = SKINS.indexOf(name);
    if (skinIndex < 0) skinIndex = 0;
    setSkin(SKINS[skinIndex]);
}

function cycleSkin() {
    skinIndex = (skinIndex + 1) % SKINS.length;
    setSkin(SKINS[skinIndex]);
}