export function FormPost({handleSubmit,setSelected,handleChange,post}){
    return(
<div className="formPost">
     <form onSubmit={handleSubmit} >
      <input
        onClick={() => setSelected(false)} // how to make close when click out
        type="text"
        placeholder=" Add comment..."
        onChange={handleChange}
        value={post}
      ></input>
        <button className="post" type="submit">
    POST
  </button>
    </form>
    </div>

    )
}