const fixVariables = (temp) => {
  if (temp < 30) {
    const msg = 'Pretty chilly.';
  } else if (temp < 70) {
    const msg = 'Not bad.';
  } else if (temp < 100) {
    const msg = 'On the hot side.';
  } else {
    const msg = 'I will die of heat.';
  }
  console.log(msg);
  console.log("And that's how I feel about the temp!");
  return msg;
};

const doubleAllItemsPurely = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};

const addChildToParentMutation = (parent, child) => {
  // this is how we can deeply clone any object, even if it contains other objects:
  // first we convert the parent object into a string
  // then, we parse it to turn it back into an object
  const stringifiedObj = JSON.stringify(parent);
  const clone = JSON.parse(stringifiedObj);

  // push the child object into the clone
  clone.children.push(child);
  return clone;
};

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  addChildToParentMutation,
};
