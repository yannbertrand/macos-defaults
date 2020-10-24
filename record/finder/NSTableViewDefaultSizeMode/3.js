const aperture = require("aperture")();
const delay = require("delay");
const robot = require("robotjs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const {
  makeAppActive,
  moveAndResizeApp,
  compressPngImage,
} = require("../../utils");

module.exports = {
  run: async (outputPath) => {
    console.log(
      "> Recording finder NSTableViewDefaultSizeMode with param set to 3"
    );

    const { stderr: setEnvError } = await exec(
      "defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 3 && killall Finder"
    );
    if (setEnvError) {
      console.error(
        "An error occured while setting up the finder NSTableViewDefaultSizeMode command"
      );
      logRollbackInfo();
      throw new Error(setEnvError);
    }
    await delay(1000);

    // Preparation
    await makeAppActive("Finder");
    await delay(500);

    const { width, height } = robot.getScreenSize();
    const recordWidth = 720;
    const recordHeight = 404;
    const cropArea = {
      x: width / 2 - recordWidth / 2,
      y: 345,
      width: recordWidth,
      height: recordHeight,
    };
    const pos1 = { x: cropArea.x + recordWidth / 3, y: cropArea.y };
    const pos2 = {
      x: cropArea.x + recordWidth / 3,
      y: cropArea.y - recordHeight / 2 + 38,
    };

    await moveAndResizeApp("Finder", cropArea, height);

    // Screenshot
    robot.keyTap("3", ["command", "shift"]);
    await delay(1000);
    const screenshot = (
      await glob(`/Users/${process.env.USER}/Desktop/*.png`)
    ).pop();

    try {
      await compressPngImage(screenshot, outputPath, "3");
    } catch (compressPngImageError) {
      logRollbackInfo();
      throw new Error(compressPngImageError);
    }

    const { stderr: deleteEnvError } = await exec(
      "defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder"
    );
    if (deleteEnvError) {
      console.error(
        "An error occured while cleaning the finder NSTableViewDefaultSizeMode environment"
      );
      logRollbackInfo();
      throw new Error(deleteEnvError);
    }
    await delay(1000);

    return { filepath: `${outputPath}/3`, isVideo: true };
  },
};

function logRollbackInfo() {
  console.info(
    "Please manually run this command to make sure everything is properly reset:"
  );
  console.info(
    "defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder"
  );
}
