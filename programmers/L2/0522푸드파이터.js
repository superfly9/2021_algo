// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const sol = (howMany,index,capacity)=>{
				let result = [];
				while (capacity.length > 0 ) {
						capacity[index] -= 1;
						if (capacity[index] === 0) {
							capacity.splice(index,1);
							result.push(index);
							console.log('result:',result)
							continue;
						}
					index++
					if (index === howMany) {
						index = 0;
					}
				}
		return result.split(' ');
	}
	
	for await (const line of rl) {
		const [paricipant,first,capacity] = line.split(' ')
		const result = sol(paricipant,first,capacity)
		console.log('Hello Goorm! Your input is', paricipant,first,capacity);
		rl.close();
	}
	
	process.exit();
})();


const sol = (howMany,index,capacity)=>{
    let result = [];
    while (capacity.length > 0 ) {
            capacity[index] -= 1;
            if (capacity[index] === 0) {
                capacity.splice(index,1);
                result.push(index);
                console.log('result:',result)
                continue;
            }
        index++
        if (index === howMany) {
            index = 0;
        }
    }
return result.split(' ');
}
console.log(sol(5,4,[8,6,7,7,1]))
