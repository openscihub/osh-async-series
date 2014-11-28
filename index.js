module.exports = function(fns, callback) {
  var results = [];
  (function _run(pos) {
    fns[pos](function(err, result) {
      results.push(result);
      if (err || ++pos === fns.length) {
        callback(err, results);
      }
      else _run(pos);
    });
  })(0);
};
