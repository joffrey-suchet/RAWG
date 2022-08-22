import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import {
  faXbox,
  faPlaystation,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const dataOfPlatform = [
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

const dataOfGenres = [
  {
    genre: "Action",
    num: 4,
  },
  {
    genre: "Adventure",
    num: 3,
  },
  {
    genre: "RPG",
    num: 5,
  },
  {
    genre: "Shooter",
    num: 2,
  },
  {
    genre: "Sport",
    num: 15,
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
    <div className="homeMenu">
      <h3>Platforms</h3>
      {dataOfPlatform.map((platformFiltre, index) => {
        return (
          <div
            className="platform"
            key={index}
            onClick={() => {
              searchbyplatform(platformFiltre.num);
            }}
          >
            <p className="menuLogo">{platformFiltre.logo}</p>
            <p
              style={{
                color:
                  platform.indexOf(platformFiltre.num) !== -1
                    ? "green"
                    : "white",
              }}
            >
              {platformFiltre.platform}
            </p>
          </div>
        );
      })}
      <h3 className="genres">Genres</h3>
      {dataOfGenres.map((genreFiltrer, index) => {
        return (
          <div
            className="genre"
            key={index}
            onClick={() => {
              searchbyGenres(genreFiltrer.num);
            }}
          >
            <p
              style={{
                color:
                  genres.indexOf(genreFiltrer.num) !== -1 ? "green" : "white",
              }}
            >
              {genreFiltrer.genre}
            </p>
          </div>
        );
      })}
      {/* <p
        className="genre"
        onClick={() => {
          searchbyGenres(4);
        }}
      >
        Action-4
      </p>
      <p
        className="genre"
        onClick={() => {
          searchbyGenres(3);
        }}
      >
        Adventure-3
      </p>
      <p
        className="genre"
        onClick={() => {
          searchbyGenres(5);
        }}
      >
        RPG-5
      </p>
      <p
        className="genre"
        onClick={() => {
          searchbyGenres(2);
        }}
      >
        Shooter-2
      </p>
      <p
        className="genre"
        onClick={() => {
          searchbyGenres(15);
        }}
      >
        sport-15
      </p> */}
    </div>
  );
};
export default HomeMenu;
