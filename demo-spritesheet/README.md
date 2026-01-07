# SVG Sprite Generator

This demo contains a simple script to generate spritesheets from SVG files. It uses the https://github.com/svg-sprite/svg-sprite library to do this.

Check out the 2 scripts in the scripts folder of this repository to see how it works.

The input svg files are defined in those scripts:

```javascript
const fileNames = [
  'public/images/instagram.svg',
  'public/images/instagram-hover.svg',
  'public/images/mastodon.svg',
  'public/images/mastodon-hover.svg',
  'public/images/tiktok.svg',
  'public/images/tiktok-hover.svg',
  'public/images/twitch.svg',
  'public/images/twitch-hover.svg',
];
```

The output spritesheet will be saved in the public/images/sprites folder.

## Classical css svg sprite

```zsh
node scripts/create-svg-css-sprite.mjs
```

## SVG Stack technique

```zsh
node scripts/create-svg-stack-sprite.mjs
```