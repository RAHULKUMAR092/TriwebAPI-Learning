

function FirstComponent(props){
    

    return <div className="modal">
        <h1>{props.owner} Application</h1>
        <p>its application {props.reason}</p>
        <button onClick={props.closeModal}>close</button>
      </div>
    

}

export default FirstComponent;