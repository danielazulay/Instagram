export function FormPost({onPostSubmit,setSelected,handleChange,post}){
    return(

     <form  className="form-post" onSubmit={onPostSubmit}  >
      <input
        className="input-post"
        onClick={() => setSelected(false)} // how to make close when click out
        type="text"
        placeholder=" Add comment..."
        onChange={handleChange}
        value={post}
      ></input>
        <button className={`button-post ${!post ? 'hide' : 'show'}`} type="submit">
    POST
  </button>
    </form>


    )
}