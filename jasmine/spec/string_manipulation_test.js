describe('hasVowels', function() {
  it('returns type Boolean', function() {
    expect(typeof 'hey'.hasVowels()).toBe('boolean');
    expect('I love you'.hasVowels()).toBe(true);
    expect('AEIsf'.hasVowels()).toBe(true);
    expect('crypt'.hasVowels()).toBe(false);
  });
});

describe('toUpper', function() {
  it('returns type String', function() {
    expect(typeof 'maybe'.toUpper()).toBe('string');
    expect('I miss you'.toUpper()).toBe('I MISS YOU');
    expect('lol'.toUpper()).toBe('LOL');
    expect('YEAY'.toUpper()).toBe('YEAY');
    expect('nOP'.toUpper()).toBe('NOP');
    expect('123roy'.toUpper()).toBe('123ROY');
  });
});

describe('toLower', function() {
  it('returns type String', function() {
    expect(typeof 'MAYBE'.toLower()).toBe('string');
    expect('I MIss YOU'.toLower()).toBe('i miss you');
    expect('LOL'.toLower()).toBe('lol');
    expect('yeay'.toLower()).toBe('yeay');
  });
});

describe('ucFirst', function() {
  it('returns type String', function() {
    expect(typeof 'wink'.ucFirst()).toBe('string');
    expect('hallo'.ucFirst()).toBe('Hallo');
    expect('hallo there lady'.ucFirst()).toBe('Hallo there lady');
    expect('Hey'.ucFirst()).toBe('Hey');
  });
});

describe('isQuestion', function() {
  it('returns type Boolean', function() {
    expect(typeof 'Whats up?'.isQuestion()).toBe('boolean');
    expect('Is the world yours, on a blimp?'.isQuestion()).toBe(true);
    expect('What\'s your name'.isQuestion()).toBe(false);
    expect('H?allo'.isQuestion()).toBe(false);
    expect('cakes'.isQuestion()).toBe(false);
  });
});

describe('words', function() {
  it('returns type Object and instance of Array', function() {
    expect(typeof 'A proper list of words'.words()).toBe('object');
    expect(Array.isArray('dont know what'.words())).toBeTruthy();
    expect('list of something'.words()).toEqual(['list', 'of', 'something']);
    expect('be,separated;at'.words()).toEqual(['be', 'separated', 'at']);
  });
});

describe('wordCount', function() {
  it('returns type Number', function() {
    expect(typeof 'A proper list of words'.wordCount()).toBe('number');
    expect('list of something'.wordCount()).toEqual(3);
    expect('me'.wordCount()).toEqual(1);
  });
});

describe('toCurrency', function() {
  it('returns type String', function() {
    expect(typeof '1000'.toCurrency()).toBe('string');
    expect('1000'.toCurrency()).toBe('1,000.00');
    expect('1000.50'.toCurrency()).toBe('1,000.50');
    expect('1000000'.toCurrency()).toBe('1,000,000.00');
    expect('123'.toCurrency()).toBe('123.00');
  });
});

describe('fromCurrency', function() {
  it('returns type Number', function() {
    expect(typeof '1,000'.fromCurrency()).toBe('number');
    expect('1,000'.fromCurrency()).toEqual(1000);
    expect('1,000,000'.fromCurrency()).toEqual(1000000);
    expect('1,000.50'.fromCurrency()).toBe(1000.50);
    expect('123.00'.fromCurrency()).toBe(123);
  });
});
