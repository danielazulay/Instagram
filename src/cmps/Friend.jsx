import { CircleImg } from "./buttons/CircleImg";


export function Friend({user,friendSave}){

    return(
        <section className="Friends">
              <div className="sugestions">
        
        <CircleImg  img={user.imgUrl.medium}  height={44} width={44} />
        <div className="sugestion-name">
        <h6>{user.fullname}</h6>
        <h6 className="gray">{user.following.length} following</h6>

        </div>
        <button className="button-follow" onClick={()=>friendSave(user._id)}>{"Follow"}</button>
        </div>
        </section>
    )
}