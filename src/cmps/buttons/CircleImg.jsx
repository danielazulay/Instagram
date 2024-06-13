export function CircleImg({img,height,width}) {
   return(
      <img className="logo" src={img} alt="imgProfile" style={{ height: `${height}px`, width: `${width}px` }} />

   )
}