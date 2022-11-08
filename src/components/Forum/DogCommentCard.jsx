import React from "react";
import { useNavigate } from "react-router-dom";
const DogCommentCard = () => {
  const navigate = useNavigate();
 const handleRoute = () => {
    navigate("/Forum/ForumDetail");
  };

  return (
    <div className="mt-10  cursor-pointer p-10 shadow-outlineShadow flex w-full gap-x-10 rounded-lg bg-[##F7F7F7]" onClick={handleRoute}>
    
      <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
      <div className="mt-5 flex flex-col">
        <div className="flex gap-x-10">
          <p className="font-medium">OSMANCAN AKAGÜNDÜZ</p>
          <div className="flex gap-x-10">
            <p className="font-medium">
              KONU:<span className="font-bold">Köpek</span>
            </p>
            <span className="font-medium">08.08.2022</span>
          </div>
        </div>
        <p className="mt-5">Köpeklerin bakımı nasıl olmalı</p>
      </div>
    </div>
  );
};

export default DogCommentCard;