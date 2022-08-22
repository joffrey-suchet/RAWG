import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Game = () => {
  const { gameId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(gameId);
  useEffect(() => {
    try {
      const fetchData = async () => {
        //  const response = await axios.get(
        //   `https://rawg-server.herokuapp.com/game/${id}}`
        // );
        const response = await axios.get(
          `http://localhost:3006/games/${gameId}}`
        );

        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("catch of useEffect=>", error);
    }
  }, []);

  return isLoading ? (
    <h1>Chargement de la page</h1>
  ) : (
    <main>
      <h1>Game page</h1>
      <h1>Game page</h1>
      <h1>Game page</h1>
      <h1>Game page</h1>
      {/* {data.map((details, index) => {
        return (
          <div key={index} className="main">
            <h1>{details.name}</h1>
            <p>{details.description}</p>
            <p>{details.released}</p>
            <p>{details.website}</p>
          </div>
        );
      })} */}
    </main>
  );
};
export default Game;
