# Unit 5, Part 3: Music Collection

This unit, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using [object literal](https://www.tektutorialshub.com/javascript/object-literal-in-javascript/) syntax.

## Topics Covered

- Objects
- HTML & CSS

## Part 3 - Building a Music Collection

Update the `3-music-collection.js` file to do the following:

> While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

### Required Features

- [ ] Create an empty array named `myCollection`.

- [ ] Create a function named `addToCollection`. It should have this basic structure:

  ```js
  function addToCollection(collection, title, artist, yearPublished) {
    // your code here...
  }
  ```

  - This function should:
    - Take in a `collection` parameter. (This allows the function to be reused to add an album to any array of album objects).
    - Take in the album's `title`, `artist`, `yearPublished` as parameters.
    - Create a new object having the above properties.
      - *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
    - Add the new object to the end of the `collection` array.
    - `return` the newly created object.

- [ ] Use and Test the `addToCollection` function:
  - Add 6 albums to the `myCollection` array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way).
  - `console.log` each album as added using the function's returned value.
  - After all are added, console.log the `myCollection` array.

- [ ] Create a function named `showCollection`. This function should:
  - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects).
  - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.

- [ ] Use and test the `showCollection` function.

- [ ] Create a function named `findByArtist`. This function should:
  - Take in a `collection` parameter. Remember, we want to be able to search any collection!
  - Take in an `artist` (string) parameter.
  - Create an empty array to hold any matching results, if any.
  - Loop through the `collection` and add any album objects with a matching artist to the array.
  - Return the array with the matching results. (If no results are found, an empty array should be returned).

- [ ] Use and test the `findByArtist` function.
  - Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
  - Check that for artists with multiple matches, all are returned.

> When testing your functions, write all tests in the JavaScript file!

### Stretch Goal

- [ ] Create a function called `search` that will allow for searching by `artist` **and** `yearPublished`. This function should:
  - Take in a `collection` parameter.
  - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:

  ```js
  { artist: 'Ray Charles', yearPublished: 1957 }
  ```

  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching **all** of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object, an empty search object, or missing `artist`/`yearPublished` data provided as input, `return` **all albums** from the `collection` being searched.

### Extra Stretchy Stretch Goals

**NOTE**: The following stretch goals **do not have tests** associated with them. This means it's even more important to use *your own `console.log` skills* to verify that your code behaves as you expect.

- [ ] Add an array of `tracks` to each of your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
  
  ```plaintext
    TITLE by ARTIST, published in YEARPUBLISHED:
        1. NAME: DURATION
        2. NAME: DURATION
        3. NAME: DURATION
    TITLE by ARTIST, published in YEARPUBLISHED:
        1. NAME: DURATION
        2. NAME: DURATION
    ```

- [ ] Update `search` to allow an optional `trackName` search criteria.
  - If the search object has a `trackName` property, only search for that, *ignoring* any `artist` or `yearPublished` properties.

> Make sure to test all your code!

## Assignment Submission

Check in your repo, then turn in your work via the Prime Academy Assignment Application in the [Prime Portal](https://portal.primeacademy.io/#/), as usual and don't hesitate to hit up the Slack channel as needed!
