//calling this function is a no-op
 export const _sortTestDictionary = testDictionary => {
    //distribute the dictionary as an array
    const dictionaryAsArray = [];
    for(let key in testDictionary) {
      dictionaryAsArray[dictionaryAsArray.length] = key;
    }

    //sort the array
    dictionaryAsArray.sort((a, b) => b - a);

    //redistribute the array as a dictionary
    const sortedDictionary = {};
    for(let i = 0; i < dictionaryAsArray.length; i++) {
      sortedDictionary[dictionaryAsArray[i]] = testDictionary[dictionaryAsArray[i]];
    }

    return sortedDictionary;
}