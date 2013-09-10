
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
