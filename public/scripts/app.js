'use strict';

console.log('App Running!');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello World!'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
