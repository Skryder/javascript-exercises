/*const removeFromArray = function(input) {
    let output = [];
    const toRemove = Array.from(arguments);
    input.forEach(element => {
        let push = true;
        for (let ii = 1; ii < toRemove.length; ii++) //ignore the first element (0) as it would be the input.
        {
            if(element === toRemove[ii]) {
                push = false;
            }
        }
        if(push) {
            output.push(element);
        }
    });
    return output;
};*/

const removeFromArray = function(input, ...args) {
    const output = [];
    input.forEach(element => {
        if (!args.includes(element)) {
            output.push(element);
        }
    });
    return output;
}



removeFromArray([1,2,3,4], 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
