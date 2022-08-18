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

import HomeMenu from "../composants/HomeMenu";

const Home = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const input = props.input;

  useEffect(() => {
    try {
      const fetchData = async () => {
        // const response = await axios.get(
        //   `https://rawg-server.herokuapp.com/home?search=${props.input}`
        // );
        const response = await axios.get(
          `http://localhost:3006/home?search=${input}`
        );
        // console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("catch home request==>", error.message);
    }
  }, [input]);

  return isLoading ? (
    <h1>chargement en cours</h1>
  ) : (
    <section>
      <div className="menu">
        <HomeMenu />
      </div>
      <div className="allGames">
        {data.results.map((game, index) => {
          return (
            <div className="gamesheet" key={index}>
              <div className="pictureo=OfGame">
                <img
                  className="gamePicture"
                  src={game.background_image}
                  alt="gamePicture"
                />
              </div>
              <div className="titleAnddetails">
                {game.parent_platforms.map((platforms, index) => {
                  return (
                    <div>
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
                          <FontAwesomeIcon icon={faApple} className="logo" />
                        )}
                      </p>
                    </div>
                  );
                })}
                <p className="rating">
                  {game.rating} / {game.rating_top}
                  <p className="ratingNumbers">{game.ratings_count} votes</p>
                </p>
              </div>
              <h2>{game.name}</h2>
              <div className="details">
                <div className="allGenres">
                  <div>
                    <p>Genres: </p>
                  </div>
                  <div className="genre">
                    {game.genres.map((genre, index) => {
                      return <p key={index}>{genre.name}/</p>;
                    })}
                  </div>
                </div>
                <div className="released">
                  <p>released: </p>
                  <p>{game.released}</p>
                </div>

                <div className="suggestion">
                  <p>Suggestions:</p>
                  <p>{game.suggestions_count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Home;
