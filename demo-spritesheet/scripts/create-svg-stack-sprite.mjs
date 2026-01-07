import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, join, basename, resolve } from 'path';
import SVGSpriter from 'svg-sprite';

const spriter = new SVGSpriter({
  dest: 'dist',
  mode: {
    stack: {
      example: true,
    }
  },
  shape: {
    spacing: {
      box: 'icon'
    }
  }
});

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

for (const fileName of fileNames) {
  const file = await readFile(fileName, 'utf8');
  spriter.add(resolve(fileName), basename(fileName), file);
}

const { result } = await spriter.compileAsync();
for (const type of Object.values(result.stack)) {
  const outputPath = join('public/images/sprites', basename(type.path));
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, type.contents);
}