import {diag, square} from './lib';
import * as should from 'should';

diag(3, 4).should.be.eql(5);

console.log(diag(3, 4));
