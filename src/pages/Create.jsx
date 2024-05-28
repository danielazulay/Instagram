export function Create({onCloseCreate}){

    return(
        <div className="profile-model" >
           <button className="profile-button" onClick={onCloseCreate}>x</button>
            <div className="model">
            <div className="header"><h3>Create new post</h3></div>
           <div className="form-modal">
            <h2>Drag photos and videos here</h2>
            </div>
            </div>
        </div>
    )
}