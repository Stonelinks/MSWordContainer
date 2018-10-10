# MSWordContainer

A React Microsoft Word Container

[![npm version](https://img.shields.io/npm/v/MSWordContainer.svg?style=flat-square)](http://browsenpm.org/package/MSWordContainer)

Demo available at https://Stonelinks.github.io/MSWordContainer/

---

## Installing

```
npm install --save mswordcontainer
```

## Basic usage

```js
const React = require('react')
const ReactDOM = require('react-dom')
const MSWordContainer = require('mswordcontainer')

const input = '# This is a header\n\nAnd this is a paragraph'

ReactDOM.render(
  <MSWordContainer title={"example.doc"}>
    <p>
      Hey there, this is an example of the MSWordContainer in all its
      circa-2000 glory.
    </p>
  </MSWordContainer>,
  document.getElementById('container')
)
```

## Options

* `title` - _string_ Title of the document

## License

MIT © [Espen Hovlandsdal](https://espen.codes/)
