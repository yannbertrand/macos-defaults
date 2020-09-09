# macos-defaults recorder 📷

**Stability: 1 - Experimental**

All the images and videos you will find on **macos-defaults** are built programmatically. It's done using **Node.js** scripts found in this folder subfolders.

Programmatic record serves 2 goals:
- Record similar actions with different `defaults` config.
- Make it easy to replay when a new version comes out.

## Technical overview
The [record.js](./record.js) file launches subfolders' recording scripts.

The scripts are all the `.js` files in this folder subfolders. There is one script per screenshot/video. These scripts share the same workflow:
1. Set a `defaults` command value
2. Prepare the recording using [robot.js](https://github.com/octalmage/robotjs)
3. Record using [Aperture](https://github.com/wulkano/aperture-node)
4. Post production (resize, compress, move)
5. Reset the `defaults` value
I try to keep as much similarity as possible for same-command examples.

Some [utils](./utils.js) are available to simplify scripts dev:
- `captureImage(x, y, width, height)` capture a screenshot using [jimp](https://github.com/oliver-moran/jimp)
  - `x`: position from the left border of the screen.
  - `y`: position from the bottom border of the screen.
  - `width`: the width of the image.
  - `height`: the height of the image.
- `async compressPngImage(inputPath, outputFolder, outputName)` try to resize the image to a max width of 740 (VuePress page width) using [sharp](https://github.com/lovell/sharp) and compress it using [pngquant](https://github.com/xiangshouding/node-pngquant-native)
  - `inputPath`: the original image path.
  - `outputFolder`: where the compressed image should be placed.
  - `outputName`: what the compressed image file should be called.
- `async compressVideo(inputPath, outputFolder, outputName)` resize and compress the video using [ffmpeg](https://ffmpeg.org)
  - `inputPath`: the original video path.
  - `outputFolder`: where the compressed video should be placed.
  - `outputName`: what the compressed video file should be called.
- `async makeAppActive(appName)` open an App and set it as active using AppleScript
  - `appName`: the app name.

I consider removing the resize/compression part and upload these assets to a media CDN like [Cloudinary](https://cloudinary.com) to serve optimal resources based on user preferences.

## Launch locally
This part is only useful if you want to add a command. I **strongely recommand** not to launch the scripts locally if you don't want to mess up your config.

### 💻 My setup
I'm personally launching these scripts on a 15" 2015 MacBook Pro running the latest macOS developer beta version. I log in as another account when I want to work on the scripts. The scripts should be agnostic from the hardware they run on, please let me know if some of them do not by [opening an issue](https://github.com/yannbertrand/macos-defaults/issues/new).

### 🏗 Install

```sh
yarn install
```

### 🚀 Usage

⚠️ **Do not launch these commands on your daily user account!** The scripts override your user config.

When launching for the first time, you'll have some security prompts to confirm.

Hope you'll have as much fun as I had when I launched it for the first time 😊.

```sh
# Launch all recording
yarn record

# Launch a specific command script recording
yarn record screenshots/disable-shadow/false.js

# Launch all scripts of a command recording
yarn record dock/autohide-delay/*

# Launch a whole category recording
yarn record dock/*/*
```

### 🚧 Run unit tests

I couldn't find a way to unit test these scripts. If you have an idea, I'm really interested.
