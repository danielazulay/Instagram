import EmojiPicker from "emoji-picker-react";

console.log("clicked")

export function Emoji({setPost,height,style}){

   return( <EmojiPicker
    searchDisabled="true"
    reactionsDefaultOpen={false}
    previewConfig={{ showPreview: false }}
    emojiStyle="google"
    onEmojiClick={(e) =>
      setPost((value) => value + e.emoji)
    }
    allowExpandReactions="false"
    height= {height}
    style={style}
  />
)


}