const url = "https://jsonplaceholder.typicode.com/users"

const roles = ["Admin", "Editor", "Viewer"];
const ages = [25, 30, 35, 40, 45];


let userData = [];
// step 1 Fetch and display user data

async function fetchUser(){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Process the raw data to add role and age
        const userData = data.map((user, index) => ({
            id: user.id,
            name: user.name,
            role: roles[index % roles.length], // Cycle through roles
            age: ages[index % ages.length],   // Cycle through ages
        }));

        displayUserData(userData);
        console.log(userData);

        const freqMap = calculateFreq(userData);
        console.log("Frequency Map:", freqMap);

    } catch (error) {
        console.error("Error fetching user data:", error);
        const userContainer = document.getElementById('user-container');
        userContainer.innerHTML = '<p>Failed to load user data</p>';
    }
}

// step 2 Display user data in a formatted manner
function displayUserData(users){
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
            <h3>ID: ${user.id}</h3>
            <h2>Name: ${user.name}</h2>
            <p>Role: ${user.role}</p>
            <p>Age: ${user.age}</p>
        `;
        userContainer.appendChild(userDiv);
    });
}

fetchUser();


//create a frequency map for roles
function calculateFreq(users){
    return users.reduce((acc, user) =>{
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    },{})
}



// filter users bay on search term
function filterUsers(searchTerm) {
    const filteredUsers = userData.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayUserData(filteredUsers);
}

document.getElementById("search-input").addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    filterUsers(searchTerm);
});