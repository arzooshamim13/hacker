console.log("helo world")

const myPromise = new Promise((resolve, reject) => {
    var isCivic= true
    if(isCivic){
        resolve("pakistan zindabad")
    }else{
        reject("pakistan phir sey zindabad")
    }
})
.then((answer)=>{
    console.log(answer)
})
.catch((error)=>{
    console.log(error)
})

fetch("https://api.escuelajs.co/api/v1/products/")

.then((xra) => {

    
    return xra.json()
    
})
.then((response)=>{
    console.log("ok",response)
    fnCall(response)
})
.catch((error)=>{
    console.log("error",error)
})

function fnCall(item){
    const parent = document.getElementById("parent")
for (const product of response) {
    parent.innerHTML += `<div class="container">
            <div class="card m-5" style="width: 18rem;">
                <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>`    
}

    // parent.appendChild(ui)
}
fnCall()
