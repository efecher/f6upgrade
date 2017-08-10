var path = require('path');

module.exports = function importer(url, prev, done){
  var regex = /^~/;
  if (!url.match(regex)) {

    var cssImportRegex = /^((\/\/)|(http:\/\/)|(https:\/\/))/;
    // if we don't escape this, then it's breaking the normal css @import
    if (url.match(cssImportRegex)) {
      return done({file: '\'' + url + '\''});
    }

    return done({file: url});
  }

  var newFile = path.join(__dirname, '../../', 'node_modules', url.replace(regex, ''));
  return done({file: newFile});
}