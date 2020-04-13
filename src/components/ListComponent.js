import React, {Component} from 'react'
import {ListGroup,
    Button
} from 'react-bootstrap'

// class ListComponent extends Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log("Props listComponent", this.props )
//         return <div>
//             List React Component
//             {
//                 this.props.list.map((ele)=>{
//                     return <li>{ele}</li>
//                 })
//             }
//         </div>
//     }
// }

function ListComponent ({list , fontSize, onDeleteItemClick, deleteItem}) {
    return <div>
        List No-React Component
        <ListGroup>
        {list.map((ele,index)=>{
            return <ListGroup.Item key={index}
                style={{fontSize: fontSize}}>{ele}
                {deleteItem ? <Button

                    onClick={(event)=>{
                    onDeleteItemClick(index)
                }}>Delete</Button> : null}
            </ListGroup.Item>
        })}
        </ListGroup>
    </div>
}

export default ListComponent;