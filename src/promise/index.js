const smtWillhappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('hey!');
        } else {
            reject('Whooops!');
        }
    });
};

smtWillhappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const smtWillhappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            },2000);
        } else {
            const error = new Error('Whoops');
            reject(error);
        }
    })
};

smtWillhappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([smtWillhappen(), smtWillhappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })