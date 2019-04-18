# Yolog File Plugin

Plugin for the [`@jitesoft/yolog`](https://www.npmjs.com/package/@jitesoft/yolog) logger to write to files.

Due to the filesystem requirement a FS module is needed, this is not available in the browser, so this plugin
is not suitable in the browser!

Usage:

Install with your favorite package manager!

```bash
npm i @jitesoft/yolog-file-plugin --save
yarn add @jitesoft/yolog-file-plugin
```

Import and use just as with any other yolog plugin!

```js
import logger from '@jitesoft/yolog';
import FilePlugin from '@jitesoft/yolog-file-plugin';
logger.addPlugin(new FilePlugin('path/to/log/dir', 'debug.log'));
```
