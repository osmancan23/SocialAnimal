import React from "react";

const CatCommentCard = () => {
  return (
    <div className="mt-10 p-10 shadow-outlineShadow flex w-full gap-x-10 rounded-lg bg-[##F7F7F7]">
      <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
      <div className="mt-5 flex flex-col">
        <div className="flex gap-x-10">
          <p className="font-medium">OSMANCAN AKAGÜNDÜZ</p>
          <div className="flex gap-x-10">
            <p className="font-medium">
              KONU:<span className="font-bold">KEDİ</span>
            </p>
            <span className="font-medium">08.08.2022</span>
          </div>
        </div>
        <p className="mt-5">Kedilerin bakımı nasıl olmalı</p>
      </div>
    </div>
  );
};

export default CatCommentCard;
