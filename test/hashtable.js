var HashTable = require('../basic/hashtable/naive');

require('should');

describe('hashtable', function() {

  it('get should return null', function() {
    var hash = new HashTable();

    (hash.get(123) === null).should.be.true;
  });

  it('get should return set value', function() {
    var hash = new HashTable();

    hash.set(1, 'one');

    hash.get(1).should.be.eql('one');
  });

  it('get should return set value', function() {
    var hash = new HashTable();

    hash.set(1, 'one');

    hash.get(1).should.be.eql('one');
  });

  it('get should work for collision', function() {
    var hash = new HashTable();

    hash.set(1, 'one');
    hash.set(128+1, 'one hundred and nine');

    hash.get(1).should.be.eql('one');
    hash.get(128+1).should.be.eql('one hundred and nine');
  });

});
