// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // array
  if (Array.isArray(obj)) {
    var output = [];
    obj.forEach(function(el) {
      output.push(stringifyJSON(el))
    })
    return '[' + output.join(",") + ']';
  }

  // object
  if (typeof obj === "object") {
    //if obj is null then return 'null'
    if (obj === null) return 'null';

    var output = [];
    for (var key in obj) {
      if (stringifyJSON(obj[key]) !== '')
        output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + output.join(',') + '}';
  }


  // string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'function' || typeof obj === 'undefined'){
    return '';
  }

  return obj.toString();
};
