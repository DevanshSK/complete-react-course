import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/devanshsk")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="m-4 p-4 text-center rounded bg-gray-800 text-white font-bold text-2xl">
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
