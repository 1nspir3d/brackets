module.exports = 
function check(str, bracketsConfig) {
  const stack = [];
    const brackets = Object.fromEntries(bracketsConfig);

    for (const el of str.split``) {
        if (stack[stack.length - 1] === el) {
            stack.pop();
        } else if (brackets[el]) {
            stack.push(brackets[el]);
        } else {
            return false;
        }
    }

    return stack.length === 0;
};


