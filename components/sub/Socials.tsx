import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Socials = () => {
  return (
    <div className="socials flex flex-row gap-8 ">
    <a target="_blank" href="https://github.com/fabioes99">
      <FontAwesomeIcon 
      size="2xl" 
      icon={faSquareGithub} 
      style={{color: "#ffffff", transition: "color 0.3s ease"} } 
      onMouseOver={(e) => e.currentTarget.style.color = "#C3A8FF3D"}
      onMouseOut={(e) => e.currentTarget.style.color = "#ffffff"}
      
      />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/fabio-esferra-simoes-9a816a14a">
      <FontAwesomeIcon 
      size="2xl" 
      icon={faLinkedin} 
      style={{color: "#ffffff", transition: "color 0.3s ease"}}
      onMouseOver={(e) => e.currentTarget.style.color = "#C3A8FF3D"}
      onMouseOut={(e) => e.currentTarget.style.color = "#ffffff"}
       />
    </a>
    <a target="_blank" href="https://wa.me//5515981544609?text=Gostaria%20de%20participar%20de%20uma%20entrevista?">
      <FontAwesomeIcon 
      icon={faSquareWhatsapp} 
      size="2xl" 
      style={{color: "#ffffff", transition: "color 0.3s ease"}}
      onMouseOver={(e) => e.currentTarget.style.color = "#C3A8FF3D"}
      onMouseOut={(e) => e.currentTarget.style.color = "#ffffff"}
      />
    </a>
  </div>
  );
};

export default Socials;