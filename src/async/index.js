const doSthAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test error'))
    })
}

const doSth = async () => {
    const sth = await doSthAsync();
    console.log(sth)
}

console.log("Before");
doSth();
console.log("After");

const anotherFunction = async () => {
    try {
        const sth = await doSthAsync();
        console.log(sth);
    } catch (error) {
        console.log(error)
    }
}

console.log("Before 1");
anotherFunction();
console.log("After 1");