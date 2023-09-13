// console.log(navigator);
const displayLocation = () =>{
    navigator .geolocation.getCurrentPosition((posi)=>{
        console.log(posi.coords);
        let lat= (posi.coords.latitude).toFixed(2)
        let long= (posi.coords.longitude).toFixed(2)
        showLocation.innerHTML = `
        <h1> your currently at ${lat} and ${long}<h1>`
    })
}