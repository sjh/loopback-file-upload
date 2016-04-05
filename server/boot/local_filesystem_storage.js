var loopback = require('loopback');
var path = require('path');

var ds = loopback.createDataSource({
    connector: require('loopback-component-storage'),
    provider: 'filesystem',
    root: path.join(__dirname, '../../storage')
});

var container = ds.createModel('container');
