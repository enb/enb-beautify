/**
 * enb-beautify-css
 * =================
 *
 * Форматирует *css*-файл в удобочитаемый вид с помощью пакета `js-beautify`
 *
 */
var vfs         = require('enb/lib/fs/async-fs'),
    beautifyCss = require('js-beautify').css;

module.exports = require('enb/lib/build-flow').create()
    .name('enb-beautify-css')
    .target('target', '?.beauty.css')

    .useSourceFilename('cssFile', '?.css')
    .optionAlias('cssFile', 'cssFileTarget')

    .optionAlias('target', 'destTarget')
    .builder(function(cssFileName) {

        return vfs.read(cssFileName, 'utf-8')
            .then(function(css) {
                return beautifyCss(css);
            })
            .fail(function(data) {
                console.log('Fail with: ', data);
            });
    })
    .createTech();
