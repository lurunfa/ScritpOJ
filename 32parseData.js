const parseData = (data) => {
    const keys = [];
    const result = [];
    data.metaData.forEach(item => {
        keys.push(item.name);
    })
    const toProcess = data.rows
    for (let i = 0; i < toProcess.length; i++) {
        const obj = {};

        for (let j = 0; j < toProcess[i].length; j++) {
            obj[keys[j]] = toProcess[i][j];
        }
        result.push(obj);

    }
    return result;
}
const a = {
    rows: [
        ["Lisa", 16, "Female", "2000-12-01"],
        ["Bob", 22, "Male", "1996-01-21"]
    ],
    metaData: [{
            name: "name",
            note: ''
        },
        {
            name: "age",
            note: ''
        },
        {
            name: "gender",
            note: ''
        },
        {
            name: "birthday",
            note: ''
        }
    ]
};
console.log(parseData(a));