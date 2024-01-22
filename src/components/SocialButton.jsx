import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialButton = ({ github, facebook, linkedin}) => {
  return(
    <>{github && <FontAwesomeIcon icon={faGithub} size="3x" />}
    {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" />}
    {linkedin && <FontAwesomeIcon icon={faLinkedin} size="3x" />}</>
  )
}

export default SocialButton;