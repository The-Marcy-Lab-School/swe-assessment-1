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

const getUpdatedParent = (parent, child) => {
  // Copy the values of the parent object into a new object
  const clone = { ...parent };

  // Push the child object into the clone.
  // Hopefully the original parent object is not mutated too ¯\_(ツ)_/¯.
  clone.children.push(child);

  // Return the clone.
  return clone;
};

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  getUpdatedParent,
};
