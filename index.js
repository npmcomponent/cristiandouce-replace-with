/**
 * Expose replaceWith
 */

module.exports = replaceWith;

/**
 * replaceWith
 *
 * @param {String} selector query string
 * @param {NodeElement} el `NodeElement` to replace match with
 * @api public
 */

function replaceWith (selector, el) {
  var match = document.querySelector(selector);
  if (match) {
    match.parentNode.replaceChild(el, match);
  };
}
