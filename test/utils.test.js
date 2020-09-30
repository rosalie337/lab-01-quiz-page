// IMPORT MODULES under test here:
import { countAsAYes, countAsNo } from '../count-as-yes.js';

const test = QUnit.test;

test('CountAsAYes should take in a yes-like response and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yup';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsAYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('CountAsAYes should take in a no-like response and return false', (expect) => {

    const no = 'nah';
    const expected = false;

    const actual = countAsAYes(no);

    expect.equal(actual,expected);

});

test('CountAsNo should take in a no-like response and return true', (expect) => {

    const no = 'nah';
    const expected = true;

    const actual = countAsNo(no);

    expect.equal(actual,expected);

});

test('CountAsNo should take in a yes-like response and return false', (expect) => {

    const yes = 'yerp';
    const expected = false;

    const actual = countAsNo(yes);

    expect.equal(actual,expected);

});