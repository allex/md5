const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const nativeSha1 = (data, digest = 'hex') => crypto.createHash('md5').update(data).digest(digest);
const md5 = require('../').md5;

const testBinaryFile = path.resolve(__dirname, 'files', 'me.png')
const arrayBuffer = fs.readFileSync(testBinaryFile);

describe('use native to test', () => {
  test('md5() with string, arraybuffer', () => {
    expect(nativeSha1('allex')).toBe('f5a85798dd7dbaba428299b13f3d2204');
    expect(nativeSha1(arrayBuffer)).toBe('f13e8870391a1b1a5f12c3ac8c256583');
  });
});

describe('use pure js md5-js to test', () => {
  test('md5() with string, arraybuffer', () => {
    expect(md5('allex')).toBe('f5a85798dd7dbaba428299b13f3d2204');
    expect(md5(arrayBuffer)).toBe('f13e8870391a1b1a5f12c3ac8c256583');
  });
});
