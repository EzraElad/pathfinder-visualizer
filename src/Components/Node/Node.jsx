import React, {useState} from 'react'
import "./Node.scss"

export default function Node({nState, row ,col}) {
    // state could be -> "start" , "end" , "wall", ""
    // console.log(state)
    const [nodeState, setNodeState] = useState(nState)
    
    return (
        <div id={`node-${row}-${col}`}
             className={`node ${nodeState}`}
             onMouseDown={"changing state and start creating wall"}
             //  onMouseEnter={"creat wall"}
             onMouseUp={"change state"}
             >
            
        </div>
    )
}
