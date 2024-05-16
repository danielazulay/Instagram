


export function StoryDetails({story,onCloseStory}) {




    return (

        <div className="story-details">
            <button className="story-button" onClick={onCloseStory}>x</button>
        <div className="story">
        <img className="img-story" src={story.imgUrl}></img>
        <div className="story-coment"><h3>{story.fullname}</h3></div>
        </div>
        </div>


    )
}