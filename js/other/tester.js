var LittleTester = function() {
  this.assert = function(a, b) {
    console.log('asserting: ', a);
  }
};

var unitTester = new LittleTester();
unitTester.assert('one', 'two');
