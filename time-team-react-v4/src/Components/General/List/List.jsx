export function List({elementOne, elementTwo, elementThree, elementFour, elementFive, elementSix, 
  elementSeven, elementEight, elementNine, elementTen, elementEleven, elementTwelve, className}){
    return(
    <ul className={className}>
      <li>{elementOne}</li>
      <li>{elementTwo}</li>
      <li>{elementThree}</li>
      <li>{elementFour}</li>
      <li>{elementFive}</li>
      <li>{elementSix}</li>
      <li>{elementSeven}</li>
      <li>{elementEight}</li>
      <li>{elementNine}</li>
      <li>{elementTen}</li>
      <li>{elementEleven}</li>
      <li>{elementTwelve}</li>
    </ul>
 )
}