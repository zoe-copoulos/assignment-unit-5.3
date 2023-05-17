/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let testItems = {};

if (typeof window === 'object') {
    // Run tests in the browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    testItems = {
        // Functions to test
        addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
        // Variables to test
        collection: typeof collection !== 'undefined' ? collection : undefined,
    };
} else {
    // Run tests in Node.js
}

describe('Automated tests', function() {
    // All tests go here
    describe('`collection` array initialized as an empty array', function() {
        it('`collection` array initialized as an empty array', function() {
            // Actual tests
            let { collection } = testItems;
            expect(collection).to.be.a('array');
        });
    });
    describe('`addToCollection` pushes record object into the array & returns the object', function() {
        it('`addToCollection` pushes record object into the array & returns the object', function() {
            // write our tests
            let { addToCollection, collection } = testItems;
            const result = addToCollection('a', 'b', 2000);
            expect(result, 'addToCollection() does not return anything').to.exist;
        })
    })
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}