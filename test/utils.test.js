// IMPORT MODULES under test here:
import { countsAsAYes, CountAsNo } from '../count-as-yes.js';

const test = QUnit.test;

test('CountAsAYes should take in a yes-like response and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yup';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('CountAsAYes should take in a no-like response and return false', (expect) => {

    const no = 'nah';
    const expected = false;

    const actual = countsAsAYes(no);

    expect.equal(actual,expected);

});

test('CountAsNo should take in a no-like response and return true', (expect) => {

    const no = 'nah';
    const expected = true;

    const actual = countsAsNo(no);

    expect.equal(actual,expected);

});

test('CountAsNo should take in a yes-like response and return false', (expect) => {

    const no = 'yerp';
    const expected = false;

    const actual = countsAsNo(yes);

    expect.equal(actual,expected);

});