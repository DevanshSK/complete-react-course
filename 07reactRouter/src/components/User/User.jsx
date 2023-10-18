import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="m-4 p-4 text-center rounded bg-gray-800 text-white font-bold text-2xl">
      UserID: {userId}
    </div>
  );
};

export default User;
