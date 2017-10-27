var num = 99;
while (num >= 0) {
    if (num > 1) {
    	// console.log(num);
    	console.log(num + " bottles of juice on the wall! ");
    	console.log(num + " bottles of juice! Take one down, pass it around... ");
    	console.log(num - 1 + " bottles of juice on the wall!");
    } else if (num === 1) {
    	console.log(num + " bottle of juice on the wall! ");
    	console.log(num + " bottle of juice! Take one down, pass it around... ");
    	console.log(num - 1 + " bottle of juice on the wall!");
    } else {
    	console.log(num + " bottles of juice on the wall! ");
    	console.log(num + " bottles of juice! Take one down, pass it around... ");
    	console.log(num - 1 + " bottles of juice on the wall!");
    }
    num--;
}