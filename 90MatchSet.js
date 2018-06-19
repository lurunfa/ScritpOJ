const isSameSet = (s1, s2) => {
    return [...s1].every(item=>s2.has(item)) && [...s2].every(item=>s1.has(item))
}