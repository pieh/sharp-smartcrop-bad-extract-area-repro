const sharp = require("sharp");

const cropStrings = {};
cropStrings[sharp.gravity.center] = "CENTER";
cropStrings[sharp.strategy.attention] = "ATTENTION";
cropStrings[sharp.strategy.entropy] = "ENTROPY";

const sharpInstance = sharp("a.jpg").metadata((err, metadata) => {
  const aspectRatio = metadata.width / metadata.height;

  function checkFile({
    width,
    height = null,
    calcHeight = false,
    crop = sharp.strategy.attention,
    desc
  }) {
    if (!height) {
      height = calcHeight ? Math.round(width / aspectRatio) : null;
    }

    sharp("a.jpg")
      .resize(width, height)
      .crop(crop)
      .jpeg({
        quality: 50,
        progressive: true,
        force: true
      })
      .toBuffer((err, data, info) => {
        console.log(
          JSON.stringify(
            {
              desc,
              width,
              height,
              crop: cropStrings[crop],
              success: !err,
              error: err && err.message.replace(/(?:\r\n|\r|\n)/g, "")
            },
            null,
            2
          )
        );
      });
  }

  checkFile({
    width: 1110,
    desc: "Not working with sharp.strategy.attention"
  });
  checkFile({
    width: 1110,
    crop: sharp.strategy.entropy,
    desc: "Not working with sharp.strategy.entropy"
  });
  checkFile({
    width: 1110,
    crop: sharp.gravity.center,
    desc: "Working with sharp.gravity.center"
  });
  checkFile({
    width: 1110,
    calcHeight: true,
    desc: "Working with precalculated height using image aspect ratio"
  });
  checkFile({
    width: 1110,
    height: 1200,
    desc: "Working with height set to height of source image"
  });
  checkFile({
    width: 1100,
    desc: "Working with slightly lower width"
  });
  checkFile({
    width: 1120,
    desc: "Working with slightly higher width"
  });
});
