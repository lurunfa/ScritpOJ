const exchange = (a, b) => {
	const propA = Object.getPrototypeOf(a);
	const propB = Object.getPrototypeOf(b);
	Object.setPrototypeOf(a,propB)
	Object.setPrototypeOf(b,propA)
}
//简写
const exchange = (a, b) => {
  const protos = [a, b].map(o => Object.getPrototypeOf(o)); //这里的分号是必要的
  [b, a].forEach((o, i) => Object.setPrototypeOf(o, protos[i]))
}