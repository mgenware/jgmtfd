# jgmtfd

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://img.shields.io/travis/mgenware/jgmtfd.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/jgmtfd)
[![npm version](https://img.shields.io/npm/v/jgmtfd.svg?style=flat-square)](https://npmjs.com/package/jgmtfd)
[![Node.js Version](http://img.shields.io/node/v/jgmtfd.svg?style=flat-square)](https://nodejs.org/en/)

Just give me the f***ing date.

## Installation
```sh
yarn add jgmtfd
```

## Usage
```js
const { English } = require('jgmtfd');

English(d);
// Sep 9, 2018

English(d, { omitCurrentYear: true }); // Omit current year
// Sep 9

English(d, { DM: true }); // Day comes before month
// 9 Sep, 2018
```
