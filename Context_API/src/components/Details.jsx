import React, { useContext } from "react";
import { userContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const { users } = useContext(userContext);

  const { id } = useParams();

  console.log(users[id]);
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/user');
  };

  return (
    <div className="flex flex-col items-start mt-8 gap-2 px-12 py-8">
      <h1 className="text-3xl">Details</h1>
      <div>Name : {users[id].name}</div>
      <div>City : {users[id].city}</div>
      <button
        onClick={handleBack}
        className="px-5 py-3 bg-red-200 rounded-lg mt-5 text-white font-semibold"
      >
        Go Back
      </button>
    </div>
  );
}

export default Details;
