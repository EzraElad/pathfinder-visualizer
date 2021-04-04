import React from 'react'
import Node from '../Node/Node'
import "./Grid.scss"

export default function Grid({width, height}) {
    console.log(width,height)
    const createGrid = (w,h) => {
        //[ 
        //[ , , , ]
        //[ , , , ]
        //[ , , , ]
        //]
        let matrix = []
        for (let r = 0; r < h; r++) {
            let row = []
            for (let c = 0; c < w ; c++) {
                let nodeState = ""
                if( r == 4 && c == 4){
                    nodeState = "start"
                }
                else if(r == 20 && c == 45){
                    nodeState = "end"
                }
                row.push(<Node key={r+c} nState={nodeState} row={r} col={c}/>)
            }
            matrix.push(row);
        }
        console.log(matrix)
        return matrix
    }
    return (
        <section className="grid">
            <button>Find</button>
            {createGrid(width,height)}
        </section>
    )
}
