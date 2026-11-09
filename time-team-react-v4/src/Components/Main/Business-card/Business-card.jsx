import { Image } from "../../General/Image/Image"
import TimeTeamBusinessCardImage from "time-team-react-v4/src/assets/Images/time-team-logo.jpg"
import { HeadingSecondary } from "../../General/Headings/Heading-secondary/Heading-secondary"
import { Paragraph } from "../../General/Paragraph/Paragraph";

export function BusinessCard(){
  return(
    <div className="business-card">
      <div className="business-card-image-box">
        <Image
         src={TimeTeamBusinessCardImage}
         className="business-card-image"
         >
         </Image>
      </div>
      <div className="business-card-info-box">
        <HeadingSecondary
        text="Time Team"
        className="heading-secondary">
        </HeadingSecondary>
        <Paragraph
        text="🔹Time Team - помощь
               для занятых людей🔹"
        className="business-card-paragraph">
        </Paragraph>
        <div className="business-card-sm-tag">
          <Image src="/src/assets/Images/Telegram_logo.svg"
          className="business-card-sm-logo">
          </Image>
          <Paragraph
          text="@timeTeam"
          className="business-card-sm-paragraph"
          >
          </Paragraph>
        </div>
      </div>
    </div>
  )
}