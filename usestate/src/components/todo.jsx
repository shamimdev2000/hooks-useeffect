import React from "react"

 const Details = (props) => {
    const {userId, id, title, completed } = props.result

    
  return (
    <div className="dataDetails">
        <h1>Userid:{userId}</h1>
        <h1>Id:{id}</h1>
        <h1>Title:{title}</h1>
        <h1>Completed:{completed}</h1>
    </div>
  )
}

export default Details