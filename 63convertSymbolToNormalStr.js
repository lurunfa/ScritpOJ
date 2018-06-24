const convertSymbolToNormalStr = (symbols) => {
	let SymKeys = Object.getOwnPropertySymbols(symbols)
	for(let i of SymKeys){
		let keyStr = i.toString().slice(7,-1)
		symbols[keyStr] = symbols[i];
		delete symbols[i]
	}
	return symbols
}
console.log(convertSymbolToNormalStr({ [Symbol('name')]: 'Jerry' }) )