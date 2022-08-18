import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN } from "@fortawesome/free-solid-svg-icons";
import {
  faXbox,
  faPlaystation,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const HomeMenu = () => {
  return (
    <div>
      <h3>platforms</h3>
      <div className="platform">
        <FontAwesomeIcon icon={faPlaystation} className="menuLogo" />
        <p>Plastation</p>
      </div>
      <div className="platform">
        <FontAwesomeIcon icon={faWindows} className="menuLogo" />
        <p>PC</p>
      </div>
      <div className="platform">
        <FontAwesomeIcon icon={faN} className="menuLogo" />
        <p>Nintendo</p>
      </div>
      <div className="platform">
        <FontAwesomeIcon icon={faXbox} className="menuLogo" />
        <p>Xbox</p>
      </div>
      <div className="platform">
        <FontAwesomeIcon icon={faApple} className="menuLogo" />
        <p>Apple</p>
      </div>
    </div>
  );
};
export default HomeMenu;
