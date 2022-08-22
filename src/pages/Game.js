import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Game = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [gameSeries, setGameSeries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        //  const response = await axios.get(
        //   `https://rawg-server.herokuapp.com/game/${id}`
        // );
        const response = await axios.get(`http://localhost:3006/game/${id}`);

        setData(response.data);
        // console.log(response.data);
      };
      fetchData();
    } catch (error) {
      console.log("catch of useEffect=>", error);
    }
    try {
      const fetchGameSeries = async () => {
        const responseOfGameSeries = await axios.get(
          `http://localhost:3006/game/${id}/game-series`
        );

        setGameSeries(responseOfGameSeries.data);
        setIsLoading(false);
      };
      fetchGameSeries();
    } catch (error) {
      console.log("catch of request game-series=>", error);
    }
  }, []);

  return isLoading ? (
    <div>
      <h1>Chargement de la page</h1>
      <h1>Chargement de la page</h1>
      <h1>Chargement de la page</h1>
      <h1>Chargement de la page</h1>
    </div>
  ) : (
    <main>
      <div className="gameDetails">
        <img
          className="principalPicture"
          src={data.background_image}
          alt="principalPicture"
        />

        <div>
          <h1>{data.name}</h1>
          <div className="released">
            <p>Released</p>
            <p>{data.released}</p>
          </div>
          <div className="rating">
            <p>Rating</p>
            <p>{data.rating} / 5</p>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="similarGame">
        {gameSeries.results.map((game, index) => {
          return (
            <div className="carrousel" key={index}>
              <h3>{game.name}</h3>
              <img
                className="pictureofSimilarGame"
                src={game.background_image}
                alt="gamePicture"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Game;
