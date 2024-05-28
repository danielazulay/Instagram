export function FormPost({onPostSubmit,setSelected,handleChange,post}){
    return(

     <form onSubmit={onPostSubmit}  >
      <input
        onClick={() => setSelected(false)} // how to make close when click out
        type="text"
        placeholder=" Add comment..."
        onChange={handleChange}
        value={post}
      ></input>
        <button type="submit">
    POST
  </button>
    </form>


    )
}