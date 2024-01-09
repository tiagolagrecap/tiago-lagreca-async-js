
function firstFunction(){
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Waited for this")
            resolve()
        }, 1000)
    })
}

async function secondFunction(){
    console.log("started")
    
    firstFunction()

    console.log("finished")
}
secondFunction()




function getUser(id){

    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}


async function showUserName(id){
    
    try {
        const user = await getUser(id)

        console.log(`Name of the user is: ${user.data.first_name}`)
        
    } catch (err) {
        console.log(`Err: ${err}`)
    }
  
}

showUserName(3) 


 
const  fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    console.log(fetchPromise);

    fetchPromise.then((response) => {
        console.log(`Received response: ${response.status}`);
    });

    console.log("Started request");
 


     const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    
    fetchPromise
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].name)
        });
    

    const fetchPromise = fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    fetchPromise
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) =>{
        console.log(data[0].name)
    }); 


const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });



  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) =>{
    console.log(`${response.url}: ${response.status}`);
  })
.catch((error) => {
    console.error(`Error to find: ${error}`);
})





async function fetchProducts(){
    try{
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.error(` Not possible get the products ${error}`);
    }
}

fetchProducts(); 


async function fetchProducts(){
    try{
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            return data;
    } catch(error) {
        console.error(` Not possible to get products ${error}`);
    }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name)); 


