const user = {
  name: 'John',
  hobbies: ['reading', 'coding', 'gaming'],
}

const clone = structuredClone(user);

clone.hobbies.push('cooking');

console.log(clone);
console.log(user);
