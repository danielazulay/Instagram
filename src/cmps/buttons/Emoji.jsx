import EmojiPicker from "emoji-picker-react";

export function Emoji({setSelected,setPost,height,style}){

   return( <EmojiPicker
    searchDisabled="true"
    reactionsDefaultOpen={false}
    previewConfig={{ showPreview: false }}
    emojiStyle="google"
    onEmojiClick={(e) =>{
      setPost((value) => value + e.emoji)
      setSelected(false)
    }
 
      
    }
    allowExpandReactions="false"
    height= {height}
    style={style}
  />
)


}