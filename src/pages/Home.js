import { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN } from "@fortawesome/free-solid-svg-icons";
import {
  faXbox,
  faPlaystation,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://rawg-server.herokuapp.com/home`
        );
        // console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("catch home request==>", error.message);
    }
  }, []);

  return isLoading ? (
    <h1>chargement en cours</h1>
  ) : (
    <section>
      <div className="menu">menu</div>
      <div className="allGames">
        {data.results.map((game, index) => {
          return (
            <div className="gamesheet" key={index}>
              <div className="pictureo=OfGame">
                <img className="gamePicture" src={game.background_image} />
              </div>
              <div className="titleAnddetails">
                {game.parent_platforms.map((platforms, index) => {
                  return (
                    <p key={index} className="divLogo">
                      {platforms.platform.name === "PC" && (
                        <FontAwesomeIcon icon={faWindows} className="logo" />
                      )}
                      {platforms.platform.name === "PlayStation" && (
                        <FontAwesomeIcon
                          icon={faPlaystation}
                          className="logo"
                        />
                      )}
                      {platforms.platform.name === "Xbox" && (
                        <FontAwesomeIcon icon={faXbox} className="logo" />
                      )}
                      {platforms.platform.name === "Nintendo" && (
                        <FontAwesomeIcon icon={faN} className="logo" />
                      )}
                      {platforms.platform.name === "Apple Macintosh" && (
                        <FontAwesomeIcon icon={faApple} />
                      )}
                    </p>
                  );
                })}
              </div>
              <h2>{game.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Home;
