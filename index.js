const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])}

      return collection

    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)}
      
      let newCollection = []

      for(let i = 0; i < collection.length; i++){
      newCollection.push(callback(collection[i]))
      }

      return newCollection


    },

    reduce: function(collection, callback, acc) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)}

      let a = (!!acc) ? acc : collection[0] 
      let i = (!!acc) ? 0 : 1

      for (i; i < collection.length; i++){
        a = callback(a, collection[i], collection)
      }

      return a 


    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)}


      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
        else undefined

      }
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)}

      let newCollection = []

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }

      return newCollection
 
    },

    size: function(collection) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)}

      return collection.length
    },

    last: function(collection, n) {
      if (!(collection instanceof Array)){
      collection = Object.values(collection)}



      if (!!n){
        return collection.slice(-n)}
      else return collection[collection.length - 1]
    },

    compact: function(array) {
      if (!(array instanceof Array)){
      array = Object.values(array)}

      newArray = []

      for (let i = 0; i < array.length; i++){
        if (array[i] == true){
          newArray.push(array[i])
        }
      }

      return newArray
    },


    sortBy: function(array, callback) {
      if (!(array instanceof Array)){
      array = Object.values(array)}

      let newArray = [...array]

      return newArray.sort((a, b) => callback(a) - callback(b))
    },
    
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(array, [shallow]) {
      if (!(array instanceof Array)){
      array = Object.values(array)}

      newArray = []

      if (!Array.isArray(array)) return newArray.push(array)
      if (shallow) {
        for (let val of array)
          Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
      } else {
        for (let val of array) {
          this.flatten(val, false, newArray)
        }
      }
      return newArray
    },

    uniqSorted: function(array, iteratee) {
      const sorted = [array[0]]
      for (let i = 1; i < array.length; i++) {
        if (sorted[i-1] !== array[i])
          sorted.push(array[i])
      }
      return sorted
    },
    
    uniq: function(array, isSorted=false, callback=false) {
      if (isSorted) {
        return fi.uniqSorted(array, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      let keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (let key in object){
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functionNames = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

    


  }
})()

fi.libraryMethod()
