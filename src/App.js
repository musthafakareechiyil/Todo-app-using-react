import React, {useState} from "react";
import "./App.css";


function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState("");
  const deleteToDo = (id) => {
	const confirmDelete = window.confirm("Are you sure you want to delete this ToDo item?");
	if (confirmDelete) {
	  setTodos(toDos.filter((todo) => todo.id !== id));
	}
  };
  const addTodo = () => {
	if (toDo.trim() !== "") {
	  setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
	  setToDo("");
	} else {
	  alert("ToDo cannot be empty!");
	}
  };
  
	return (
		<div className="app">
			<div className="mainHeading">
				<h1>ToDo List</h1>
			</div>
			<div className="subHeading">
				<br />
				<h2>Whoop, it's Wednesday 🌝 ☕ </h2>
			</div>
			<div className="input">
				<input
					value={toDo}
					onChange={(e) => setToDo(e.target.value)}
					type="text"
					placeholder="🖊️ Add item..."
				/>
				<i onClick={addTodo} className="fas fa-plus"></i>
				</div>
			<div className="todos">
			{toDos.map((obj)=>{
				return(	
				<div className="todo">
					<div className="left">
						<input onChange={(e)=>{
							console.log(obj)
							setTodos(toDos.filter(obj2=>{
								if(obj2.id===obj.id){
									obj2.status = e.target.checked
								}
								return obj2
							}))
						}} value={obj.status} type="checkbox" name="" id="" />
						<p className={obj.status? "completed":""}> {obj.text}</p>
					</div>
					<div className="right">
						<i className="fas fa-times"
						onClick={() => deleteToDo(obj.id)}
						></i>
					</div>
				</div>
				)})}
			</div>
		</div>
	);
}


export default App;
