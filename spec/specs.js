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

describe('formatString', function() {
  it("replaces apostrophes with a blank string", function() {
    expect(formatString("don't")).to.equal("dont");
  });

  it("replaces spaces with a blank", function() {
    expect(formatString("this string")).to.equal("thisstring");
  });

  it("replaces commas with a blank", function() {
    expect(formatString("this, string")).to.equal("thisstring");
  });

  it("replaces periods with a blank", function() {
    expect(formatString("this. string")).to.equal("thisstring");
  });

  it("replaces - with a blank", function() {
    expect(formatString("this-string")).to.equal("thisstring");
  });
  it("removes mixed case entries and turn them to lowecase", function() {
    expect(formatString("ThiS StrInG")).to.equal("thisstring");
  });
});

describe('cryptoSquare', function() {
  it("returns encrypted two character string", function() {
    expect(cryptoSquare("it")).to.eql(["it"]);
  });

  it("returns encrypted three character string", function() {
    expect(cryptoSquare("its")).to.eql(["it","s"]);
  });

  it("returns encrypted five character string", function() {
    expect(cryptoSquare("Thing")).to.eql(["thi", "ng"]);
  });
});
