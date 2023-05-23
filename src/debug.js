const fixVariables = (temp) => {
  if (temp < 30) {
    const msg = 'Pretty chilly';
  } else if (temp < 70) {
    const msg = 'not bad';
  } else if (temp < 100) {
    const msg = 'On the hot side';
  } else {
    const msg = 'I will die of heat';
  }
  console.log(msg);
  console.log("And that's how I feel about the temp  !");
  return msg;
};

const doubleAllItemsPurely = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};

const addChildToParentMutation = (parent, child) => {
  const clone = JSON.parse(JSON.stringify(parent));
  clone.children.push(child);
  return clone;
};

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  addChildToParentMutation,
};
