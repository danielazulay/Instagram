
import { useEffect } from "react";
import { Friend } from "./Friend";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";
import { utilService } from "../services/util.service";



export function SideSugestion({friendSave}){
    const logingInUser = useSelector((userSate) => userSate.userModule.user);
     const friends = useSelector((userSate) => userSate.userModule.users);

    // const [friend, setFriends] = useState([]);

    useEffect(()=>{
        utilService.loadFromStorage("friends")
    })
    
    function checkFriend(id){
        return logingInUser.following.indexOf(id) !== -1 ? true : false
    }

    // useEffect(() => {
    //    let friends = userService.loadFrinds();
    //    console.log(friends)

    //    setFriends(friends)
    // }, []); 

if(!friends) return <>...loading sugestions</>
    return(
        <div className="sugestion-container">
    
            <div className="sugestion-loginuser">
            <CircleImg  img={logingInUser.imgUrl}  height={44} width={44} />
            <div className="login-user">
              <h6 >{logingInUser.email}</h6>
                <h6 className="gray">{logingInUser.fullname}</h6>
                </div>
            </div>
            <h5 className="suggestion-title gray">Suggested for you</h5>
            {friends.map((el, index) => (

                <div className="sugestions" key={index}>
                    <Friend user={el} txt="Suggested for you" checkFriend={checkFriend} friendSave={friendSave}/>
              </div>
        
            ))}
        </div>
    )
}