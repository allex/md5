// vim: set ft=javascript fdm=marker et ff=unix tw=80 sw=2:

import path from 'path'
import babel from 'rollup-plugin-babel'

import babelrc from './.babelrc'
import { version, name, author, license, description, dependencies } from './package.json'

const banner = (name, short = false) =>
`/*!
 * ${description}
 *
 * Copyright 2018, Allex Wang (https://iallex.com)
 *
 * Licensed under the ${license} license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */`

const resolve = p => path.resolve(__dirname, '.', p)
const plugins = [
  babel,
  'resolve',
  'commonjs'
]

export default {
  destDir: resolve('lib'),
  dependencies,
  pluginOptions: {
    babel (rollupCfg) {
      const cfg = {
        ...babelrc,
        babelrc: false,
        externalHelpers: false,
        runtimeHelpers: false
      }
      cfg.plugins.forEach((o, i) => {
        const name = typeof o === 'string' ? o : o[0]
        if (o === 'transform-es2015-modules-commonjs') cfg.plugins.splice(i, 1)
      })
      return cfg
    }
  },
  entry: [
    {
      input: resolve('src/md5.js'),
      plugins,
      output: [
        { format: 'umd', name: 'MD5', file: 'md5.js', banner: banner(name) },
        { format: 'es', file: 'md5.esm.js', banner: banner(name, true) } ]
    }
  ]
}
