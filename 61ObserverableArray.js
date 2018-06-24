function ObserverableArray() {
    return new Proxy([], {
        get:function (target, key) {
            const arr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
            if(arr.indexOf(key)!==-1) console.log(key)
            return target[key]
        }
    })
}
// function ObserverableArray() {
//     return new Proxy([], {
//       get:function(target, propKey) {
//         typeof target[propKey] == 'function' && console.log(propKey);
//         return target[propKey]
//       }
//     })
//   }
const a = new ObserverableArray();
a.push('aa')