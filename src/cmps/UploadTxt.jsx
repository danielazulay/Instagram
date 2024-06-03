
import { CircleImg } from "../cmps/buttons/CircleImg";

export function UploadTxt({ setText,text, url, user, }) {


  function handleChange(event) {
    setText(event.currentTarget.value);
  }



  return (

    <div className="upload-text">
      <div className="img-container">
        <img className="img-share" src={url} alt="foto" />
      </div>
      <div className="desc-container">
      <div className="detail-share">
        <CircleImg img={user.imgUrl} />
        <h2>{user.fullname}</h2>
        </div>
      <form>
        <input type="text" placeholder="Write a caption..." onChange={handleChange} value={text} className="input-share" ></input>
    
      </form>
      </div>

      {/* <div className="detail-share">
        <CircleImg img={url} />
        </div> */}
    </div>

  );
}
