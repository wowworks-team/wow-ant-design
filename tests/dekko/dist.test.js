const $ = require('dekko');
const chalk = require('chalk');

$('dist').isDirectory().hasFile('antd-with-locales.js');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
