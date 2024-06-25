
import { useSelector } from "react-redux";



export function Search() {
  const user = useSelector((userSate) => userSate.userModule.user);



  return (
    <div className="searh">
    <div className="menu-search"><h1>search</h1></div>
        
      </div>


  );
}
