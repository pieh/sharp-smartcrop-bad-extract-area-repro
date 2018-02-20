Reproduction steps:
```
npm install
npm start
```
Results:
```
{
  "desc": "Not working with sharp.strategy.attention",
  "width": 1110,
  "height": null,
  "crop": "ATTENTION",
  "success": false,
  "error": "smartcrop: bad extract area"
}
{
  "desc": "Not working with sharp.strategy.entropy",
  "width": 1110,
  "height": null,
  "crop": "ENTROPY",
  "success": false,
  "error": "smartcrop: bad extract area"
}
{
  "desc": "Working with sharp.gravity.center",
  "width": 1110,
  "height": null,
  "crop": "CENTER",
  "success": true,
  "error": null
}
{
  "desc": "Working with slightly lower width",
  "width": 1100,
  "height": null,
  "crop": "ATTENTION",
  "success": true,
  "error": null
}
{
  "desc": "Working with slightly higher width",
  "width": 1120,
  "height": null,
  "crop": "ATTENTION",
  "success": true,
  "error": null
}
{
  "desc": "Working with precalculated height using image aspect ratio",
  "width": 1110,
  "height": 833,
  "crop": "ATTENTION",
  "success": true,
  "error": null
}
{
  "desc": "Working with height set to height of source image",
  "width": 1110,
  "height": 1200,
  "crop": "ATTENTION",
  "success": true,
  "error": null
}
```