/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let testItems = {};

let primesCollection = [
  {
    artist: 'Hiroshi Yoshimura',
    title: 'Music For Nine Post Cards',
    yearPublished: 1982
  },
  {
    artist: 'Clifford Brown and Max Roach',
    title: 'Study in Brown',
    yearPublished: 1955
  },
  {
    artist: 'Hiroshi Yoshimura',
    title: 'Green',
    yearPublished: 1986
  },
  {
    artist: 'Cécile McLorin Salvant',
    title: 'Ghost Song',
    yearPublished: 2022
  },
  {
    artist: 'Wilco',
    title: 'Yankee Hotel Foxtrot',
    yearPublished: 2002
  },
];

if (typeof window === 'object') {
    // Run tests in the browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    testItems = {
        // Functions to test
        addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
        showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
        findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
        search: typeof search !== 'undefined' ? search : undefined,
        // Variables to test
        primesCollection,
        myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    };
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    testItems = {
        ...require('../assignment/scripts/3-music-collection.js'),
        primesCollection
    };
}

describe('Automated tests', function() {
    describe('`myCollection` array initialized as an empty array', function() {
        it('`myCollection` array initialized as an empty array', function() {
            let { myCollection } = testItems;
            expect(myCollection).to.be.a('array');
        });
    });
    describe('`addToCollection` pushes record object into the array & returns the object', function() {
        it('`addToCollection` pushes record object into the array & returns the object', function() {
            let { addToCollection, primesCollection } = testItems;
            const albumCountBeforeAdd = primesCollection.length;
            const result = addToCollection(primesCollection, 'aaa', 'bbb', 2000);
            const albumCountAfterAdd = primesCollection.length;
            expect((albumCountAfterAdd - albumCountBeforeAdd), 'Expected one value to be added to the `primesCollection` array').to.equal(1)
            expect(result, 'Expected the function to return a value').to.exist;
            expect(primesCollection.at(-1), 'Expected returned album object to match the final object in the `primesCollection` array').to.equal(result)
        })
    })
    describe('Tested `addToCollection` by adding at least 6 albums & logged results', function() {
      it('Tested `addToCollection` by adding at least 6 albums & logged results', function() {
          let { myCollection } = testItems;
          expect(myCollection.length).to.be.at.least(6);
      })
    })
    describe('`showCollection` takes in an array, loops over it, correctly logs each item', function() {
      it('`showCollection` takes in an array, loops over it, correctly logs each item', function() {
          let {showCollection, myCollection } = testItems;
          // Stop running this test if a student gets to the tracks-related
          // stretch goals, as this function will have different expected
          // behavior.
          if (myCollection[0].tracks) {
            this.skip();
          }

          // Stash a copy of the normal console.log method:
          const consoleLog = console.log
          
          console.stdlog = console.log.bind(console);
          
          let logs = [];

          console.log = function(...args) {

                    if (args.length > 1) {
                        logs.push( args.reduce((acc = '', item) => acc += item) );
                    } else if (args.length === 1) {
                        logs.push(args);

                    }
            // 🎛️ Uncomment this line if you want student's log statements to appear
            // in the console while running the tests:
            // console.stdlog.apply(console, args);
          }
          
          // This will populate the logs array with arrays that represent the arguments
          // handed to the console.log function within showCollection.
          showCollection(myCollection)

          expect(logs).to.be.an.instanceof(Array);

          // Test that each log statement is a single string.
            // If a student builds their log statement as required, like this:
              // console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished})
              // each of the values inside the logs array with be an array with length === 1.
                // Example: ['Kind of Blue by Miles Davis, published in 1959']
            // If a student build their log statement like this:
              // console.log(album.title, 'by', album.artist, 'published in', album.yearPublished)
              // each of the values inside the logs array will be an array with length > 1.
                // Example: ['Kind of Blue', 'by', 'Miles Davis', 'published in', '1959']
          // expect(logs.every(log => log.length === 1)).to.equal(true);

          // Now, we reformat the logs array so that each value is a string, rather
          // than a string inside an array:
          logs = logs.map(log => log[0]);

          // Finally, we test that each logged string includes the correct title, artist, and
          // yearPublished substring. (I just created a custom function that'll return true
          // or false for this.)
          expect(testEachLogStatement(myCollection, logs), "For each album, expected `title`, `artist`, and `yearPublished` within the logged output").to.equal(true)
          
          // Function returns false if one of the showCollection function's console.log
          // statements doesn't include the album title, artist, and yearPublished. Else,
          // it returns true. Also uses .toLowerCase to ensure the matching logic is not
          // case-sensitive.
          function testEachLogStatement(collection, logs) {
              for (let i in collection) {
                let log = logs[i].toLowerCase();
                let {title, artist, yearPublished} = collection[i];
                
                title = title.toLowerCase();
                artist = artist.toLowerCase();
                yearPublished = String(yearPublished).toLowerCase()
                
                if (!log.includes(title) || !log.includes(artist) || !log.includes(yearPublished)) {
                    return false
                }
              }
              return true
          }

          // 🎛️ Uncomment this to verify that logs are being populated correctly :)
          // console.stdlog('logs', logs)

          // Revert console.log back to normal:
          console.log = consoleLog
      })
    })
    describe('`findByArtist` takes in a collection and artist, then returns an array of matching albums', function() {
      it('`findByArtist` takes in a collection and artist, then returns an array of matching albums', function() {
          let { findByArtist, primesCollection } = testItems;
          let cecileResults = [
            {
              artist: 'Cécile McLorin Salvant',
              title: 'Ghost Song',
              yearPublished: 2022
            }
          ];
          let hiroshiResults = [
            {
              artist: 'Hiroshi Yoshimura',
              title: 'Music For Nine Post Cards',
              yearPublished: 1982
            },
            {
              artist: 'Hiroshi Yoshimura',
              title: 'Green',
              yearPublished: 1986
            }
          ]
          expect(findByArtist(primesCollection, 'Beyonce'), 'Expect an array to be returned').to.be.an.instanceof(Array);
          expect(findByArtist(primesCollection, 'Beyonce'), 'Expect an empty array in the case of no match').to.be.an('array').that.is.empty;
          expect(findByArtist(primesCollection, 'Cécile McLorin Salvant'), 'Expect one matching result to be returned').to.deep.equal(cecileResults)
          expect(findByArtist(primesCollection, 'Hiroshi Yoshimura'), 'Expect two matching results to be returned').to.deep.equal(hiroshiResults)
      })

    })

    describe('STRETCH: `search` takes in a criteria object and returns an array of matching albums', function () {
      it('STRETCH: `search` takes in a criteria object and returns an array of matching albums', function () {
        let { search, primesCollection, myCollection } = testItems;
        if (search === undefined) {
          this.skip();
        } else if (myCollection[0].tracks) {
          this.skip();
        } else {
          let wilcoResults =   [
            {
              artist: 'Wilco',
              title: 'Yankee Hotel Foxtrot',
              yearPublished: 2002
            }
          ]
          let hiroshiResults = [
            {
              artist: 'Hiroshi Yoshimura',
              title: 'Green',
              yearPublished: 1986
            }
          ]
          expect(search(primesCollection), 'Expect entire collection without search object').to.deep.equal(primesCollection);
          expect(search(primesCollection, {}), 'Expect entire collection with empty search object').to.deep.equal(primesCollection);
          expect(search(primesCollection, {artist: '', yearPublished: 2023}), 'Expect entire collection with empty artist string').to.deep.equal(primesCollection);
          expect(search(primesCollection, {artist: 'Wilco', yearPublished: 1908}), 'Expect an empty array when searching for a Wilco album from 1908').to.be.an('array').that.is.empty;
          expect(search(primesCollection, {artist: 'Wilco', yearPublished: 2002})).to.deep.equal(wilcoResults);
          expect(search(primesCollection, {artist: 'Hiroshi Yoshimura', yearPublished: 1986})).to.deep.equal(hiroshiResults);
        }
      });
    });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}


// | Part 3 - Music Collection | Complete? |
// | --- | :---: |

// | STRETCH: `search` takes in a criteria object and returns an array of matching albums  | - |
// | STRETCH: Added an array of `tracks` to the albums and updated functions to work with this property | - |
// | STRETCH: All Stretch functions tested fully | - |
// | OPTIONAL: Additional questions in HTML or comments | - |

