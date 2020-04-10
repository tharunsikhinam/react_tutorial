import React, {Component} from 'react'

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
        {list.map((ele,index)=>{
            return <li
                style={{fontSize: fontSize}}>{ele}
                {deleteItem ? <button onClick={(event)=>{
                    onDeleteItemClick(index)
                }}>Delete</button> : null}
            </li>
        })}
    </div>
}

export default ListComponent;