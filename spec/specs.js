describe('findSquare', function() {
  it("returns 2 when the input is 3", function() {
    expect(findSquare(3)).to.equal(2);
  });

  it("returns 2 when the input is 4", function() {
    expect(findSquare(4)).to.equal(2);
  });

  it("returns 8 when a number between 49 and 64 is entered", function() {
    expect(findSquare(Math.random() * (64-49) + 49)).to.equals(8);
  });
});

describe('cryptoSquare', function() {
  it("returns encrypted two character string", function() {
    expect(cryptoSquare("it")).to.equal("it");
  });

  it("returns encrypted three character string", function() {
    expect(cryptoSquare("its")).to.equal("it\ns");
  });
});
