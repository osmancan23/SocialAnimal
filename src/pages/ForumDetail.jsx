import React, { useState } from "react";
import { Container } from "../components/Container";
import DogCommentCard from "../components/Forum/DogCommentCard";
import ReplyCard from "../components/Forum/ReplyCard";
import ReplyModal from "../components/Forum/ReplyModal";

const ForumDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <Container>
        <div className="mt-[100px] flex  h-[80px] flex-row items-center gap-x-3">
          <h1 className="text-5xl">SORULAR</h1>
          <div className="h-[2px] w-full flex-1 bg-black " />
        </div>
        <DogCommentCard/>
        <button className="mt-[50px] flex h-[40px] w-[200px] cursor-pointer items-center justify-center rounded-xl bg-brand-3 text-xl text-white outline-none" onClick={()=>setModalIsOpen(!modalIsOpen)}>
          + Bir Cevap Yaz
        </button>
        <div>
          <ReplyCard/>
        </div>
        <ReplyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      </Container>
    </div>
  );
};

export default ForumDetail;
