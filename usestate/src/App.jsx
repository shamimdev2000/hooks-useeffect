import { useEffect, useState } from "react"


function App() {
const[demo, setDemo] = useState([])
 useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(response => response.json())
 .then(json => setDemo (json))
}, [])
 const sliceDemo = demo.slice(0, 200)
return (
<>
<div className="shamim">
</div>
 <div className="Main">
 {
sliceDemo.map((item)=>(
<div className="userId">
<h1> userId : {item.userId}</h1>
<h1>id: {item.id}</h1>
<h1>title: {item.title}</h1>
</div>
))
}

</div>
 </>
);

}
export default App
