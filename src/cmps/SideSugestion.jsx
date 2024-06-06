import { useEffect, useState } from "react";
import { CircleImg } from "./buttons/CircleImg";


export function SideSugestion(){

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
            <h5>Suggested for you</h5>
            {robots.map((el, index) => (
        
                <div className="sugestions" key={index}>
                            {console.log(el)}
                <CircleImg  img={el.picture.medium}  height={44} width={44} />
                <h5>{el.fullname}</h5>
                <h6>Suggested for you</h6>
                </div>

            ))}
        </div>
    )
}