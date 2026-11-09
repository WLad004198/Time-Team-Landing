export function Link({href, text, className}){
  return(
    <a href={href} className={className}>{text}</a>
  )
}