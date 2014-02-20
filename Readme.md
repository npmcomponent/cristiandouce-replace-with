*This repository is a mirror of the [component](http://component.io) module [cristiandouce/replace-with](http://github.com/cristiandouce/replace-with). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/cristiandouce-replace-with`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# replaceWith

  Document replaceWith component.

## Installation

  Install with [component(1)](http://component.io):

    $ component install cristiandouce/replaceWith

## Usage

```js
  var view = require('myView');
  var replaceWith = require('replace-with');

  // Search in DOM for container and
  // replaces with view Element
  replaceWith('body .app-container', view.render());

```

## API

### replaceWith(selector, element)
  
  Replaces `selector` match in DOM for `element` Element.

## License

  MIT
