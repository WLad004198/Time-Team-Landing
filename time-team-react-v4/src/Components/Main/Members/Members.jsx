import { Image } from "../../General/Image/Image"
import { HeadingSecondary } from "../../General/Headings/Heading-secondary/Heading-secondary"
import { Paragraph } from "../../General/Paragraph/Paragraph"
import memberImage from "/src/assets/Images/dummy-profile-image.jpg"
export function Members(){
  const memberName = "Имя"
  const imageClassName = "member-image"
  const nameClassname = "heading-secondary"
  const headingText = "Имя"
  const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const servicesClassname = "member-services"
  return(
    <div className = "members-list-box">
    <div className="member-card member-card-one">
     <div className="member-image-box member-image-box-one">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-one">
      <HeadingSecondary
      text={headingText}
      className={nameClassname}/>
     </div>
     <div className="member-services-box member-services-box-one">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
     </div>
    </div>

    <div className="member-card member-card-two">
     <div className="member-image-box member-image-box-two">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-two">
      <HeadingSecondary
      text={headingText}
      className={nameClassname}/>
     </div>
     <div className="member-services-box member-services-box-two">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
     </div>
    </div>
 
    <div className="member-card member-card-three">
     <div className="member-image-box member-image-box-three">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-three">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
     </div>
     <div className="member-services-box member-services-box-three">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
     </div>
    </div>
    
    <div className="member-card member-card-four">
     <div className="member-image-box member-image-box-four">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-four">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
     </div>
     <div className="member-services-box member-services-box-four">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
     </div>
    </div>

    <div className = "member-card member-card-five">
     <div className="member-image-box member-image-box-five">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-five">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
     </div>
     <div className="member-services-box member-services-box-five">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
     </div>
    </div>

    <div className="member-card member-card-six">
     <div className="member-image-box member-image-box-six">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-six">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
     </div>
     <div className="member-services-box member-services-box-six">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
     </div>
    </div>

    <div className="member-card member-card-seven">
     <div className="member-image-box member-image-box-seven">
      <Image
      src={memberImage}
      className={imageClassName}/>
     </div>
     <div className="member-name-box member-name-box-seven">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
    </div> 
    <div className="member-services-box member-services-box-seven">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
    </div>
  </div>

  <div className="member-card member-card-eight">
    <div className="member-image-box member-image-box-eight">
      <Image
      src={memberImage}
      className={imageClassName}/>
    </div>
    <div className="member-name-box member-name-box-eight">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
    </div>
    <div className="member-services-box member-services-box-eight">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
    </div>
  </div>

  <div className="member-card member-card-nine">
    <div className="member-image-box member-image-box-nine">
      <Image 
      src={memberImage}
      className={imageClassName}/>
    </div>
    <div className="member-name-box member-name-box-nine">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
    </div>
    <div className="member-services-box member-services-box-nine">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
    </div>
  </div>

  <div className="member-card member-card-ten">
    <div className="member-image-box member-image-box-ten">
      <Image
      src={memberImage}
      className={imageClassName}/>
    </div>
    <div className="member-name-box member-name-box-ten">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
    </div>
    <div className="member-services-box member-services-box-ten">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
    </div>
  </div>

  <div className="member-card member-card-eleven">
    <div className="member-image-box member-image-box-eleven">
      <Image
      src={memberImage}
      className={imageClassName}/>
    </div>
    <div className="member-name-box member-name-box-eleven">
      <HeadingSecondary
      text={memberName}
      className={nameClassname}/>
    </div>
    <div className="member-services-box member-services-box-eleven">
      <Paragraph
      text={paragraphText}
      className={servicesClassname}/>
    </div>
  </div>
    </div>
  )
}