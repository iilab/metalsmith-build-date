
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * A Metalsmith plugin that adds a build date to the metadata.
 *
 * @return {Function}
 */

function plugin(){
  return function(files, metalsmith, done){
    var data = metalsmith.metadata();
    var newdate = new Date();
    data.date = newdate.toISOString();
    done();
  };
}