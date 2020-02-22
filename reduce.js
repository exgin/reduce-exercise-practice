/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
function extractValue(arr, key) {
    return arr.reduce((element, next) => { 
        element.push(next[key]); // push the element, which is an object
        return element;
    }, []); // starting with an empty array
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    let vowels = 'aeiou';
    let strArray = str.split('');
    return strArray.reduce((element, next) => {
        let lowercasedElement = next.toLowerCase()
            if(vowels.indexOf(lowercasedElement) !== -1) { // if within the vowel index range
                if (element[lowercasedElement]) {
                    element[lowercasedElement]++;
                } else {
                    element[lowercasedElement] = 1;
                }
            }
            return element;
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/
function addKeyAndValue(arr, key, value) {
    return arr.reduce((acc,next,i) => {
        acc[i][key] = value;  //didnt know reduce had a 3rd parameter which accepts indexes
        return acc;
    }, arr); //start at the array being given to us | unless TyperError : cannot set property
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce((acc,next) => {
        // we only want to push elements into different arrays
        //if there is a next element , we want to keep pushing into the arrays
        if (callback(next)) { // if the callback of the next element returns true, push into our first array
            acc[0].push(next);
        } else {
            acc[1].push(next); // else if we return false, push into our second array
        }
        return acc;
    }, [[],[]] ); // start with our two arrays
}
