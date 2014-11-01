/**
 * enb-beautify-html
 * =================
 *
 * Форматирует *html*-файл в удобочитаемый вид с помощью `js-beautify`
 *
 */
var vfs          = require('enb/lib/fs/async-fs'),
    beautifyHtml = require('js-beautify').html;

module.exports = require('enb/lib/build-flow').create()
    .name('enb-beautify-html')
    .target('target', '?.beauty.html')

    .useSourceFilename('htmlFile', '?.html')
    .optionAlias('htmlFile', 'htmlFileTarget')

    .optionAlias('target', 'destTarget')
    .builder(function(htmlFileName) {

        return vfs.read(htmlFileName, 'utf-8')
            .then(function(html) {
                return beautifyHtml(html);
            })
            .fail(function(data) {
                console.log('Fail with: ', data);
            });
    })
    .createTech();
