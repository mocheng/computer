"use strict";

var BinaryTree = require('../basic/binarytree/simple');

require('should');

describe('binarytree', function() {

  it('traverse should get sequene in order', function() {
    var na = {left: null, right: null, value: 'A'};
    var nb = {left: null, right: null, value: 'B'};
    var nc = {left: na, right: nb, value: 'C'};

    var tree = new BinaryTree(nc);

    var traverse_str = '';
    tree.breadth_first_traverse(function(node) {
      traverse_str += node.value;
    });

    traverse_str.should.be.eql('CAB');

  });

});

