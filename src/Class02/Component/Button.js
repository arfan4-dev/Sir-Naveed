
function button(props){
    return(
    <div>
    <button style={{color:props.color}}>{props.title}</button>
    </div>
    )
}

export default button
// props 
// if we want to share any data from parent to child 