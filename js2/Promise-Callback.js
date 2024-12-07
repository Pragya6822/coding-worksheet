// Problem 1 - Promises & Callback

// task1
function fetchUser(callback) {
    setTimeout(() => {
        const user = "sample data"; // Should fetch a valid user object
        callback(user); // Bug: Cannot read property 'name'
    }, 1000);
}

fetchUser((name) => console.log(name));


// task2- Output based question 

function mockApi (url){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve({data: `My response from ${url}`});
        }, 1000)
    });    
}

async function fetchSequentialData(){
    try{
        const firstApi = await mockApi('https://dummyapi.online/api/users')
        console.log('FIRST API RESULT: ' , firstApi)

        const SecondApi = await mockApi('https://dummyapi.online/api/social-profiles')
        console.log('SECOND API RESULT: ' , SecondApi)

        const combineApi = {
            ...firstApi,
            ...SecondApi
        }
        console.log('COMBINED API RESULT: ', combineApi)
    } catch(err){
        console.error('Error in fetching data'.error)
    }
}
fetchSequentialData()


