import React , { useState } from 'react';


function App() {

  const [isEditMode , setIsEditMode] = useState(false)

  const [userData , setUserData] = useState({
    name : "Jane Doe", 
    email : "jane.doe@example.com", 
    bio: "Web Developer"
  });

  const [successMessage , setSuccessMessage] = useState("")
  
  const handleSave = (updatedUser) => {
    setUserData(updatedUser)
    setSuccessMessage("Profile updated successfully!")
    setTimeout(() => setSuccessMessage(""), 5000)  // clear message after 5 seconds
  }

  return (
    <>
    <button onClick={()=> setIsEditMode(!isEditMode)}>
      { isEditMode ? "View Profile" : "Edit Profile" }
    </button>
    {successMessage && <p style={{color:"green"}}>{successMessage}</p>}
    { isEditMode ? (
      <EditProfile user={userData} onSave={handleSave} />
    ) : (
      <UserProfile user={userData} />
    )}
    </>
  )
}



function UserProfile({user}) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  )
}


function EditProfile({user , onSave}) {
  const  [updatedUser , setUpdatedUser] = useState(user) ;


  const handleChange = (e) => {
    setUpdatedUser({...updatedUser, [e.target.name] : e.target.value})
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSave(updatedUser)
    }}>
      <div>
      <input type="text" name="name" value={updatedUser.name} onChange={handleChange} />
      <input type="email" name="email" value={updatedUser.email} onChange={handleChange}  />
      <textarea name="bio" value={updatedUser.bio} onChange={handleChange} />
      <button type="submit">Save</button>
      </div>
    </form>
  )
}
export default App
