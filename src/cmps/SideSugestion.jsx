import { useEffect, useState } from "react";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";


export function SideSugestion(){
    const user = useSelector((userSate) => userSate.userModule.user);

    const [robots, setRobots] = useState([]);

    useEffect(() => {
        generateRobot();
    }, []); 

    // async function loadFrinds(){

        
    // }

    async function generateRobot(){

        let url = "https://randomuser.me//api"
        let tempArr = [];
        for(let i=0; i < 6;i++){
            let rb = await fetch(url);

            if (rb.ok) {

                let data = await rb.json();
            tempArr.push(data.results[0]);

            }
        }
        setRobots(tempArr);
    }

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
            {robots.map((el, index) => (
        
                <div className="sugestions" key={index}>
        
                <CircleImg  img={el.picture.medium}  height={44} width={44} />
                <div className="sugestion-name">
                <h6>{el.name.first+" "+el.name.last}</h6>
                <h6 className="gray">Suggested for you</h6>

                </div>
                <button className="button-follow">Follow</button>
                </div>

            ))}
        </div>
    )
}