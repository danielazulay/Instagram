import { SideMenu } from "../cmps/SideMenu";



export function Profile({user}) {
    console.log(user)
  
  return (
    <div className="profile-page">
          <SideMenu user={user} />

    </div>
  );



}