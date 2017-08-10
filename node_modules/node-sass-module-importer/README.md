# node-sass module importer
## Install
    npm install --save-dev node-sass-module-importer

## Usage

    var moduleImporter = require('node-sass-module-importer');

    var sass = require('node-sass');
    sass.render({
      file: scss_filename,
      {
        importer: moduleImporter
      }
    }, function(err, result) { /*...*/ });
    // OR
    var result = sass.renderSync({
      data: scss_content,
      {
        importer: moduleImporter
      }
    });

Then in your .scss file you can reference .scss from node_modules by prefixing your imports with '~'

    @import '~sass-project-name/variables';
