# Yolog File Plugin

[![npm (scoped)](https://img.shields.io/npm/v/@jitesoft/yolog-file-plugin)](https://www.npmjs.com/package/@jitesoft/yolog-file-plugin)
[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/yolog-file-plugin/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/yolog-file-plugin)
[![pipeline status](https://gitlab.com/jitesoft/open-source/javascript/yolog-plugins/file/badges/master/pipeline.svg)](https://gitlab.com/jitesoft/open-source/javascript/yolog-plugins/file/commits/master)
[![coverage report](https://gitlab.com/jitesoft/open-source/javascript/yolog-plugins/file/badges/master/coverage.svg)](https://gitlab.com/jitesoft/open-source/javascript/yolog-plugins/file/commits/master)
[![npm](https://img.shields.io/npm/dt/@jitesoft/yolog-file-plugin)](https://www.npmjs.com/package/@jitesoft/yolog-file-plugin)
[![Back project](https://img.shields.io/badge/Open%20Collective-Tip%20the%20devs!-blue.svg)](https://opencollective.com/jitesoft-open-source)

Plugin for the [`@jitesoft/yolog`](https://www.npmjs.com/package/@jitesoft/yolog) logger to write to files.

Due to the filesystem requirement a FS module is needed, this is not available in the browser, so this plugin
is not suitable in the browser!

If you wish to log json strings in common json log format to file, be sure to check out the [yolog json plugin](https://github.com/jitesoft/yolog-json-plugin)!

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
