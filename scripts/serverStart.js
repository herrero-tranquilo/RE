process.env.NODE_ENV = 'development';

var nodemon = require('nodemon');
nodemon('--exec node web.js');

nodemon.on('start', () => {
  console.log('[nodemon] has started');
}).on('quit', () => {
  console.log('[nodemon] has quit');
}).on('restart', (files) =>{
  console.log('[nodemon] has restarted due to', files);
});