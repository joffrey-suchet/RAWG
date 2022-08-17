import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("https://api.rawg.io/api/games");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
    } catch (error) {
      console.log(error);
    }
  });

  return <h1>Home</h1>;
};
export default Home;
