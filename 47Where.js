const where = () => {
  const reg = /\s+at\s(\S+)\s\(/g
  const trace = new Error().stack.toString();
  const str = reg.exec(trace) && reg.exec(trace)
  return str[1]
}
const a = () => {
  where()
}
a();
