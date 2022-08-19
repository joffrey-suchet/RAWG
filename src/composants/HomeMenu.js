import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import {
  faXbox,
  faPlaystation,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const array = [
  {
    platform: "Playstation",
    num: 2,
    logo: <FontAwesomeIcon icon={faPlaystation} />,
  },
  {
    platform: "PC",
    num: 1,
    logo: <FontAwesomeIcon icon={faWindows} />,
  },
  {
    platform: "Xbox",
    num: 3,
    logo: <FontAwesomeIcon icon={faXbox} />,
  },
  {
    platform: "Nintendo",
    num: 7,
    logo: <FontAwesomeIcon icon={faN} />,
  },
  {
    platform: "Apple",
    num: 5,
    logo: <FontAwesomeIcon icon={faApple} />,
  },
];

const HomeMenu = (props) => {
  const setPlatform = props.setPlatform;
  const platform = props.platform;
  const genres = props.genres;
  const setGenres = props.setGenres;

  const [PlayStation, setPlaystation] = useState(false);
  const [Pc, setPc] = useState(false);
  const [Xbox, setXbox] = useState(false);
  const [Nintendo, setNintendo] = useState(false);
  const [Apple, setApple] = useState(false);
  const [action, setAction] = useState(false);
  const [adventure, setAdventure] = useState(false);
  const [rpg, setRpg] = useState(false);
  const [shooter, setShooter] = useState(false);
  const [sport, setSport] = useState(false);

  const searchbyplatform = (num) => {
    const result = platform.indexOf(num);
    if (result === -1) {
      const tabToPush = [...platform];
      tabToPush.push(num);
      setPlatform(tabToPush);
    } else {
      const numToSplice = [...platform];
      numToSplice.splice(result, 1);
      setPlatform(numToSplice);
    }
  };

  const searchbyGenres = (num) => {
    console.log(sport);
    const result = genres.indexOf(num);
    if (result === -1) {
      const tabToPush = [...genres];
      tabToPush.push(num);
      setGenres(tabToPush);
    } else {
      const numToSplice = [...genres];
      numToSplice.splice(result, 1);
      setGenres(numToSplice);
    }
  };

  return (
    <div>
      <h3>Platforms</h3>
      {array.map((platform, index) => {
        return (
          <div
            className="platform"
            key={index}
            onClick={() => {
              searchbyplatform(platform.num);
            }}
          >
            <p className="menuLogo">{platform.logo}</p>
            <p style={{ color: "red" }}>{platform.platform}</p>
          </div>
        );
      })}
      <h3>Genres</h3>
      <p
        className="platform"
        onClick={() => {
          searchbyGenres(4);
        }}
      >
        Action-4
      </p>
      <p
        className="platform"
        onClick={() => {
          searchbyGenres(3);
        }}
      >
        Adventure-3
      </p>
      <p
        className="platform"
        onClick={() => {
          searchbyGenres(5);
        }}
      >
        RPG-5
      </p>
      <p
        className="platform"
        onClick={() => {
          searchbyGenres(2);
        }}
      >
        Shooter-2
      </p>
      <p
        className="platform"
        onClick={() => {
          searchbyGenres(15);
        }}
      >
        sport-15
      </p>
    </div>
  );
};
export default HomeMenu;
