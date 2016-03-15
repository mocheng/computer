import {diag, square} from './lib';
import * as should from 'should';

import x from './lib';

console.log(x(123));

diag(3, 4).should.be.eql(5);

console.log(diag(3, 4));
