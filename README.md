enb-beautify
============

[Enb](http://github.com/enb-make/enb) techs for pretty format HTML and CSS.

### How to enable

1. Add `enb-beautify` dependency to your project `package.json`:
2. Add required techs and targets in `make` config like `addTechs.push([tech.htmlBeautify]);`:

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

Russian readme available in [README.ru.md](README.ru.md).