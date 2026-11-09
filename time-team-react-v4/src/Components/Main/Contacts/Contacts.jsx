import { List } from "../../General/List/List";
import { Link } from "../../General/Link/Link";

export function Contacts(){
  return(
    <div className = "member-contacts-box">
      <List
        elementOne={<Link href="https://t.me/vladontech" text="Телеграм-канал"/>}
        elementTwo={'Имя'}
        elementThree={'Имя'}
        elementFour={'Имя'}
        elementFive={'Имя'}
        elementSix={'Имя'}
        elementSeven={'Имя'}
        elementEight={'Имя'}
        elementNine={'Имя'}
        elementTen={'Имя'}
        elementEleven={'Имя'}
        elementTwelve={'Имя'}
        className="member-contacts"
      />
    </div>
  )
}