import camelcase from 'camelcase-keys'
import { stringify } from 'javascript-stringify'
import clipboardy from 'clipboardy';

const doIt = (str) => stringify(camelcase(str, { deep: true }), null, 2);

process.stdin.on('data', (data) => {
  eval(`global.suckIt = ${data.toString()}`)

  clipboardy.writeSync(doIt(global.suckIt));
})
