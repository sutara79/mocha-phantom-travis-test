mocha.setup("bdd");
var expect = chai.expect;

describe("jquery.set-year.js", function() {
  var int_year;
  beforeEach(function() {
    int_year = $("<div>").setYear().text();
  });
  it("int_yearは2000より大きい。", function() {
    expect(parseInt(int_year, 10)).to.be.above(2000);
  });
  it("int_yearは4文字である。", function() {
    expect(int_year.length).to.be.equal(4);
  });
});

if (window.initMochaPhantomJS) {
  initMochaPhantomJS();
}
window.onload = function() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
};