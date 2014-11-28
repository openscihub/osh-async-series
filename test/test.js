var expect = require('expect.js');
var series = require('..');

describe('series', function() {
  it('should work', function(done) {
    var v = 0;
    series(
      [
        function(done) {
          setTimeout(function() {
            expect(v).to.be(0);
            v = 1;
            done(null, 'first');
          }, 33);
        },
        function(done) {
          setTimeout(function() {
            expect(v).to.be(1);
            done(null, 'second');
          }, 33);
        }
      ],
      function(err, results) {
        expect(results).to.eql(['first', 'second']);
        done(err);
      }
    );
  });
});
