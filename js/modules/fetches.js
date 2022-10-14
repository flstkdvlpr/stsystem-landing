function fetches(){
    try{
    fetch('js/price.json')
    .then(data => data.json())
    .then(res => console.log(res));
    } catch(error){
        console.log("fetch ругается");
    }
}


export default fetches;