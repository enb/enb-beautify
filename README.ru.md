enb-beautify
============

[Enb](http://github.com/enb/enb) технологии для визуального форматирования HTML and CSS.

### Как включить

1. Добавьте пакет `enb-beautify` в зависимости в `package.json`
2. Добавьте требуемые технологии и цели в конфигурацию `make`:

```js

var tech = {
//...
    htmlBeautify: require('enb-beautify/techs/enb-beautify-html'),
    cssBeautify: require('enb-beautify/techs/enb-beautify-css'),
//...
}

addTechs.push([tech.htmlBeautify]);
addTechs.push([tech.cssBeautify]);

addTargets.push('?.beauty.html');
addTargets.push('?.beauty.css');

```