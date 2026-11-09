import { List } from "../../General/List/List";
import { Link } from "../../General/Link/Link";

export function Contacts(){
  return(
    <div className = "member-contacts-box">
      <List
        elementOne={<Link href="https://t.me/timeteamhelp" text="Телеграм-канал"/>}
        elementTwo={<Link href="https://t.me/Mariia12085" text="Мария"/>}
        elementThree={<Link href="https://t.me/simplyred30" text="Вероника"/>}
        elementFour={<Link href="https://t.me/staffchikzy" text="Staffttzhe"/>}
        elementFive={<Link href="https://t.me/gleban_kaban" text="Глеб"/>}
        elementSix={<Link href="https://t.me/Veraaaa4" text="Вера"/>}
        elementSeven="Sergio M - ?"
        elementEight={<Link href="https://t.me/sozvezdietara" text="Ольга"/>}
        elementNine={<Link href="https://t.me/IKar_63" text = "Игорь"/>}
        elementTen={<Link href="https://t.me/OLEG_NOVISAD" text="Олег"/>}
        elementEleven={<Link href="https://t.me/NatashaArno_olivier" text="Francesca"/>}
        elementTwelve={<Link href="https://t.me/W_Lad004" text="Владимир"/>}
        className="member-contacts"
      />
    </div>
  )
}