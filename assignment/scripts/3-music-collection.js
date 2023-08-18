console.log('***** Music Collection *****')

// Our collection. Please don't modify it. We like it.
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








// PLEASE DO NOT MODIFY THIS, EITHER. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    primesCollection: typeof primesCollection !== 'undefined' ? primesCollection : undefined,
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
