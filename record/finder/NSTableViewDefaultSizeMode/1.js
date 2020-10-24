const delay = require("delay");
const robot = require("robotjs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { captureImage, compressPngImage } = require("../../utils");

module.exports = {
  run: async (outputPath) => {
    console.log(
      "> Screencapping finder NSTableViewDefaultSizeMode with param set to 1"
    );

    const { stderr: setEnvError } = await exec(
      "defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 1 && killall Finder"
    );
    if (setEnvError) {
      console.error(
        "An error occured while setting up the finder NSTableViewDefaultSizeMode command"
      );
      logRollbackInfo();
      throw new Error(setEnvError);
    }

    // Preparation
    await delay(3000);
    await makeAppActive("Finder");

    const { width, height } = robot.getScreenSize();
    const screencapWidth = 100;
    const screencapHeight = 404;
    const screenshot = `${outputPath}/1.png`;
    const cropArea = {
      x: width / 2 - screencapWidth / 2,
      y: 345,
      width: screencapWidth,
      height: screencapHeight,
    };

    await moveAndResizeApp("Finder", cropArea, height);

    // Screenshot
    captureImage(cropArea.x, cropArea.y, croparea.width, croparea.height).write(
      screenshot
    );

    try {
      await compressPngImage(screenshot, outputPath, "1");
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

    return { filepath: `${outputPath}/1` };
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
