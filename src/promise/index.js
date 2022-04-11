const somethingWillhappen=()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey...');
        }else{
            reject('whooooops');
        }
    });
};

somethingWillhappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));



const somethingWillhappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        }else{
            const error = new Error ('whooooop!');
            reject (error);
        }
    });
}
somethingWillhappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));



    //ejectar varias promise

Promise.all([somethingWillhappen(), somethingWillhappen2()])
    .then(response =>{
        console.log('Array of results', response );
    })
    .catch (err => {
        console.error(err);
    })