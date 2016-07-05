describe('testObj', function() {
  'use strict';
  var testObj = new Index(),
    path = '/jasmine/books.json';

  describe('Empty file container', function() {

    it('ensure file container is empty', function() {
      expect(testObj.arr).toBeUndefined();
    });
  });


  describe('everything else', function() {
    beforeEach(function(done) {
      testObj.createIndex(path).then(function(data) {
        testObj.arr = data;
        testObj.getIndex();
        done();
      });
    });

    describe('Read book data', function() {
      it('reads json file and asserts file is not empty', function() {
        expect(testObj.arr).toBeTruthy();
        expect(testObj.arr.length).toBeGreaterThan(0);
        expect(Array.isArray(testObj.arr)).toBeTruthy();
      });
    });

    describe('Populate index', function() {
      it('ensures that an index object is created', function() {
        expect(typeof testObj.getIndex() === 'object' &&
          !Array.isArray(testObj.getIndex()) &&
          testObj !== null).toBeTruthy();
      });

      it('ensures that index created is correct', function() {
        expect(testObj.invertedIndex.alice).toEqual([0]);
        expect(testObj.invertedIndex.lord).toEqual([1]);
      });
    });

    describe('Search index', function() {

      it('ensures that search returns an array', function() {
        expect(Array.isArray(testObj.searchIndex('alice'))).toBeTruthy();
      });

      it('ensures the correct results when a single term is searched',
        function() {
          expect(testObj.searchIndex('alice')).toEqual([[0]]);
          expect(testObj.searchIndex('alliance')).toEqual([[1]]);
          expect(testObj.searchIndex('joy')).toEqual([[-1]]);
        });

      it('ensures the correct results when multiple terms are searched',
        function() {
          expect(testObj.searchIndex(['alice', 'lord'])).toEqual([[0], [1]]);
          expect(testObj.searchIndex('alice', 'lord', 'joy'))
            .toEqual([[0], [1], [-1]]);
					});

			it('ensures that search items allowable are only strings or arrays',
				function(){
					expect(testObj.searchIndex(900)).toBe('Invalid Input');
          expect(testObj.searchIndex({'alice': 1})).toBe('Invalid Input');

        });
    });
  });
});
