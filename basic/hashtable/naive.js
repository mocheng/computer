"use strict";

var HASH_TABLE_SIZE = 128;

function get_hash(key) {
  return key % HASH_TABLE_SIZE;
}

function HashTable() {
  this._table = new Array(HASH_TABLE_SIZE);

  return this;
}

HashTable.prototype.get = function(key) {
  var initial_hash = get_hash(key);
  var hash_key = initial_hash;

  while (!this._table[hash_key] || this._table[hash_key].key != key) {
    //console.log(hash_key);
    hash_key = (hash_key + 1) % HASH_TABLE_SIZE;
    if (hash_key === initial_hash) {
      break;
    }
  }

  if (this._table[hash_key] && this._table[hash_key].key === key) {
    return this._table[hash_key].val;
  } else {
    return null;
  }

};

HashTable.prototype.set = function(key, val) {
  var initial_hash = get_hash(key);
  var hash_key = initial_hash;

  while (this._table[hash_key] || (this._table[hash_key] && this._table[hash_key].key != key)) {
    hash_key = (hash_key + 1) % HASH_TABLE_SIZE;
    if (hash_key === initial_hash) {
      break;
    }
  }

  if (!this._table[hash_key] || this._table[hash_key].key === key) {
    this._table[hash_key] = {
      key: key,
      val: val
    };
    return val;
  } else {
    return null;
  }

};

module.exports = HashTable;

