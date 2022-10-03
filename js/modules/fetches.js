function fetches(){
    try{
    fetch('http://localhost:3000/offers')
    .then(data => data.json())
    .then(res => console.log(res));
    } catch(error){
        console.log("fetch ругается");
    }
}


export default fetches;