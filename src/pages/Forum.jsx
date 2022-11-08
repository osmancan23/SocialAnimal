import React ,{useState} from "react";
import { Container } from "../components/Container";
import ForumCard from "../components/Forum/ForumCard";
import "../index.css";
import dog from "../images/dog.jpg";
import cat from "../images/cat.jpg";
import birds from "../images/birds.jpg";
import animal from "../images/animal.jpg";
import CatCommentCard from "../components/Forum/CatCommentCard";
import DogCommentCard from "../components/Forum/DogCommentCard";
import BirdsCommentCard from "../components/Forum/BirdsCommentCard";



const Forum = () => {
  const forumCategory = [
    {
      id: 1,
      name: "Köpekler",
      image: dog,
    },
    {
      id: 2,
      name: "Kediler",
      image:  cat
    },
    {
      id: 3,
      name: "Kuşlar",
      image: birds ,
    },
    {
      id: 3,
      name: "Diğerleri",
      image: animal ,
    }
  ];
  const [active, setActive] = useState("Köpekler");
  return (
    <div>
      <Container>
        <h2 className="mt-20 [120px] text-[36px] font-semibold">Konular</h2>
        <div className="mt-[50px] flex gap-x-10">
          {forumCategory.map((item,index) => (
            <ForumCard key={item.id} name={item.name} image={item.image} active={active} setActive={setActive} />
          ))}
        </div>
        <div className="max-w-[200px] h-[40px] bg-brand-3 text-white flex justify-center items-center rounded-xl mt-[50px] cursor-pointer text-xl">+ Soru Sor</div>

        <div className="flex flex-col mt-10">
    {active === "Köpekler" && <DogCommentCard />}
    {active === "Kediler" && <CatCommentCard />}
    {active === "Kuşlar" && <BirdsCommentCard />}


        
        </div>
      </Container>
    </div>
  );
};

export default Forum;
