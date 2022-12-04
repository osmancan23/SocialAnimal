import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

const OtherCard = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/Forum/ForumDetail");
  };

  const forumRef = collection(db, "forums");


  const [forum, setForum] = useState([]);
  useEffect(() => {
    return onSnapshot(forumRef, (snapshot) => {
      setForum(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  console.log(forum);



  return (
<>
{forum.map((item) => {
        if (item.subject === "Diğerleri") {
          return (
            <div
              className="mt-10  flex w-full cursor-pointer gap-x-10 rounded-lg bg-[##F7F7F7] p-10 shadow-outlineShadow"
              key={item.id}
              onClick={handleRoute}
            >
               <div className="h-[80px] w-[80px] rounded-[50%] bg-slate-500" />
        <div className="mt-5 flex flex-col">
          <div className="flex gap-x-10">
            <p className="font-medium">OSMANCAN AKAGÜNDÜZ</p>
            <div className="flex gap-x-10">
              <p className="font-medium">
              Cinsi :{" "}
                      <span className="font-bold">{item.questionTitle}</span>
              </p>
            </div>
          </div>
          <p className="mt-5">{item.questionDescription}</p>
        </div>
            </div>
          );
        }
      })}
</>
  );
};


export default OtherCard;
