export function Image({src, className, loading}){
  return(
    <img src={src} className={className} loading={loading}></img>
  )
}