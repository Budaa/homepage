/* eslint-disable no-unused-expressions */
const FtpDeploy = require('ftp-deploy');
const path = require('path');
const ftpDeploy = new FtpDeploy();

const config = {
  username: 'pi',
  password: '',
  host: '192.168.1.10',
  port: 21,
  localRoot: path.join(__dirname, '/static'),
  remoteRoot: '/home/pi/server/static',
  include: ['*'],
  exclude: [
    '.git',
    '.idea',
    'tmp/*',
    'build/*',
    'node_modules',
    'app',
    'webpack*'
  ]
};

ftpDeploy.on('uploading', data => {
  data.totalFileCount; // total file count being transferred
  data.transferredFileCount; // number of files transferred
  data.percentComplete; // percent as a number 1 - 100
  data.filename; // partial path with filename being uploaded
});

ftpDeploy.on('uploaded', console.log);

ftpDeploy.deploy(config, err => {
  if (err) console.log(err);
  else console.log('finished');
});
