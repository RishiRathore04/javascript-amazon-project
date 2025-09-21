import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents to dollar');
if(formatCurrency(2095) === '20.95'){   //basic test case
    console.log('Passed');  
}else{
    console.log('Failed');
}

console.log('works with 0');
if(formatCurrency(0) === '0.00'){   //edge case
    console.log('Passed');
}else{
    console.log('Failed');
}

console.log('round up to nearest cent');
if(formatCurrency(2000.5) === '20.01'){   //edge case
    console.log('Passed');
}else{
    console.log('Failed');
}