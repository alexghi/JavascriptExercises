//Objects in javascript are key value pairs
//You can iterate over the properties of an object using a for...in loop
//You can also access the property this way object["property_name"]
//You can also add a new property to a new object with the foolowing methods
//--- object.propertyName = value;    //this way we can add at runtime specific properties
//--- object["propertyName"] = value; //this way you can generate new properties at the runtime using string variables as properyName

//This exercise is ment to learn you how to use the key value pair nature of javascript objects
const exercise3_medium = {
  initialForm: {
    name: "Ioana",
    cat: "Luna",
  },
  expectedForm: {
    Ioana: "name",
    Luna: "cat",
  },

  //You must convert initialForm object to be the same as expectedForm
  //Use this function
  execute: function (initialForm) {
    const result = {};

    return result;
  },
};

addCategory(categories.conversion_medium, exercise3_medium, "Exercise 3 Medium");
