// problem 2 - Fetch + Promises and Async/Await

// //task 1 - DEBUGGING
// async function fetchData() {
//     try {
//         const response =  await fetch("invalid-url");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Failed to fetch', error)
//     }
// }
// fetchData();


// task2 - output based question 
// (write a function to fetch data from two API , merge and analyze the data, and create a visual representation)
const URL = "https://users-87ac9-default-rtdb.firebaseio.com/products.json";
async function fetchDataFromApi() {
    try {
        const response1 = await fetch("https://fakestoreapi.com/products");
        const data1 = await response1.json();

        const response2 = await fetch(URL);
        const data2 = await response2.json();

        // Remove null entries from data2
        data2 = data2.filter(product => product !== null);

        const mergedData = mergedData(data1 , data2)
        console.log("My Merged data",mergedData);
        displayData(mergedData);

        // create a visual representation here
    } catch (error) {
        console.log('Failed to fetch', error)
    }
}

fetchDataFromApi();

//merge data based on title property from both api .from data1(id, price, description, category, image, rating) and Fields data2 (sellerName, availability, manufacturingDate, warranty)  .if a product exist in one databse but not in other then include only the availbale field

function mergedData(data1 , data2){
    const merged=[];
    
    // Map data1 entries with matching data2
    data1.forEach(product1 => {
        const product2 = data2.find(product2 => product2.title === product1.title);
        
        if(product2){
            merged.push({...product1,...product2});
        }else{
            merged.push({...product1});
        }
    });

     // Include entries in data2 that are not in data1
     data2.forEach(product2 => {
        const product1 = data1.find(product1 => product1.title === product2.title);
        if (!product1) {
            merged.push({ ...product2 });
        }
    });

    return merged;
    
}

function displayData(mergedData){
    console.log('Displaying data:', data);


}

