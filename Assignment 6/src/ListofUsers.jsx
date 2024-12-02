import { useState } from "react"


function ListofUsers(){
const [users, setUsers] = useState([
    {name:"Rachel",age:20, id:1},
    {name:"Joe", age:24, id:2},
    {name:"Sam", age:22, id: 3}
])
const[editName, setEditName] = useState("")
const[editAge, setEditAge] = useState("")
const[editId, setEditId] = useState(null)


function handleNameEdit(e){
    setEditName(e.target.value)
}
function handleAgeEdit(e){
    setEditAge(e.target.value)
}
function handleIdEdit(e){
    setEditId(e.target.value)
}
const handleEditClick = (user) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditAge(user.age);
  };
const handleSave = (id) => {
    setUsers(users.map(user => 
      user.id === id 
      ? { ...user, name: editName, age: editAge } 
      : user
    ));
    setEditId(null);
    setEditName('');
    setEditAge('');
  };


return(
<div className="Container">
<h2>User List</h2>
<ul>
        {users.map(user => (
          <li key={user.id}>
            {editId === user.id ? (

<div>
   <input type="text" placeholder="Name" 
    value={editName} onChange={handleNameEdit}/>
    
    <input type="number" value={editAge}
     placeholder="Age" onChange={handleAgeEdit}/> 
     
      <button onClick={() => handleSave(user.id)}>Save</button>

</div>
  ) : (
<div>
{user.name} ({user.age} years old)
<button onClick={() => handleEditClick(user)}>Edit</button>
</div>


)}
</li>
))}
</ul>

</div>


);
}
export default ListofUsers