/**
 * This is a naive implmentation of hastable.
 * Storage is a fixed-size array.
 * Hash method is simple mod operation on table size.
 * Collision is solved by finding next available slot.
 *
 * All this design decision is not ideal, just proof-of-work.
 */


"use strict";

var HASH_TABLE_SIZE = 128;

// This is a very naive hash key calcuation which just mod table size. In practice,
// it should be random enough to avoid collision.
function get_hash(key) {
  return key % HASH_TABLE_SIZE;
}

function HashTable() {
  // the table stores key-value pair object.
  // `key` field is needed for exact matching.
  //
  this._table = new Array(HASH_TABLE_SIZE);

  return this;
}

HashTable.prototype.get = function(key) {
  var initial_hash = get_hash(key);
  var hash_key = initial_hash;

  while (!this._table[hash_key] || this._table[hash_key].key != key) {
    hash_key = (hash_key + 1) % HASH_TABLE_SIZE;

    if (hash_key === initial_hash) {
      // if hit here, it means hash_key has loop around the whole table and
      // go back to intial value. We should break here to avoid infinite looping.
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
      // same reason as `set` function, to avoid infinite looping.
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

