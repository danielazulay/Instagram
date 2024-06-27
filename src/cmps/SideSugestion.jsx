
import { Friend } from "./Friend";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";



export function SideSugestion({friendSave,btnFriend}){
    const user = useSelector((userSate) => userSate.userModule.user);
    const friends = useSelector((userSate) => userSate.userModule.users);

    // const [friend, setFriends] = useState([]);
    
    function checkFriend(id){
        return user.following.indexOf(id) !== -1 ? true : false
    }

    // useEffect(() => {
    //    let friends = userService.loadFrinds();
    //    console.log(friends)

    //    setFriends(friends)
    // }, []); 


    return(
        <div className="sugestion-container">
    
            <div className="sugestion-loginuser">
            <CircleImg  img={user.imgUrl}  height={44} width={44} />
            <div className="login-user">
              <h6 >{user.email}</h6>
                <h6 className="gray">{user.fullname}</h6>
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