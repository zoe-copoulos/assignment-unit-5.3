console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []


function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
  let album = 
 {
  title,
  artist,
  yearPublished
 }

collection.push(album);
return album
}

console.log(addToCollection(myCollection, 'Pieces Of You', 'Jewel', 1995))
console.log(addToCollection(myCollection, 'Middle Cyclone', 'Neko Case', 2009))
console.log(addToCollection(myCollection, 'Revolver', 'The Beatles', 1966))
console.log(addToCollection(myCollection, 'Other Voices, Other Rooms', 'Nanci Griffith', 1993))
console.log(addToCollection(myCollection, 'Album Of The Year', 'The Good Life', 2004))
console.log(addToCollection(myCollection, 'Wet From Birth', 'The Faint', 2004))


console.log(myCollection);

function showCollection(collection) {

  //this broke it but I saw Nat's question
//for (i=0; i < myCollection.length; i++ )
//end broken thing

//clue from matt
console.log('one thing from collection:', collection[i])
//end clue

//also wrong
 /* let album = 

  {myCollection[0],
    myCollection[1],
    myCollection[2],
    myCollection[3],
    myCollection[4],
    myCollection[5]
  }

  end wrong, or this one, that is
*/


  //to log, but still not getting there
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`)
}


/*giving up on this one for now because
I feel like I found some holes in my understanding that
are going to take more reinforcement than just 
finishing this stuff tonight, and I did have a few Aha moments
*/

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
