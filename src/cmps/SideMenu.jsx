import { SvgService } from "../services/svg.service";

export function SideMenu(){

    return(
        <div className="side-menu">
             <div
                    className="instagran-logo"
                    dangerouslySetInnerHTML={{
                      __html: SvgService.getSvg("instagran"),
                    }}
                  />
        <ul className="side menu">
        <li className="list-menu">
                    <div
                        className="icon"
                        dangerouslySetInnerHTML={{
                            __html: SvgService.getSvg("home"),
                        }}
                    />
                    Home
                </li>
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>Create</li>
            <li>Profile</li>
            <div>
                <li>Threads</li>
                <li>More</li>
            </div>
        </ul>
        </div>
    )
}