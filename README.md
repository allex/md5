# @allex/md5

Sha1 implements with pure js. supports string, Buffer, ArrayBuffer, Uint8Array

## Usage

```sh
yarn add @allex/md5 -D
```

```js
import { md5 } from '@allex/md5'

const testBinaryFile = path.resolve(__dirname, 'files', 'me.png')
const arrayBuffer = fs.readFileSync(testBinaryFile);

describe('use pure js md5-js to test', () => {
  test('md5() with string, arraybuffer', () => {
    expect(md5('allex')).toBe('f5a85798dd7dbaba428299b13f3d2204');
    expect(md5(arrayBuffer)).toBe('f13e8870391a1b1a5f12c3ac8c256583');
  });
});
```
