# Map string [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/map-string/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/map-string)

Array.map for strings.

[![NPM Badge](https://nodei.co/npm/map-string.png)](https://npmjs.com/package/map-string)

## Install

```sh
npm install map-string
```

## Usage

```js
const mapString = require("mapString");

mapString("abcd", (val) => {
    if (val === "b") return "!"
    return val
});
//=> 'a!cd'
```

## API

### mapString(string, iteratee)

#### string

Type: `string`

The string to iterate.

#### iteratee

Type: `function(value, index, string)`

The iteratee to use.
