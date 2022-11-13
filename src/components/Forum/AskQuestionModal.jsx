import React, { useState } from "react";
import Modal from "react-modal";
import {MdOutlineCancel} from "react-icons/md"

const AskQouestionModal = ({ modalIsOpen, setModalIsOpen, className }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  var modalStyles = { overlay: { zIndex: 50 } };

  const [selected, setSelected] = useState("Köpekler");
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  const handleClose = () => {
    setModalIsOpen(false);
    };

    


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
      className={`relative  z-50 h-[836px] w-[913px] rounded-[16px] bg-white shadow-[0_0_10px_0_rgba(55,164,146,0.5)] focus:outline-none ${
        className ? className : ""
      }`}
      overlayClassName="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#999999] bg-opacity-50"
    >
        <MdOutlineCancel size={36} className="absolute top-12 right-12 text-brand-3 cursor-pointer" onClick={handleClose}/>
      <h1 className="mt-[50px] text-center text-4xl ">Soru Sor</h1>
      <div className="ml-[30px] mt-[100px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-xl font-semibold">
          Konu
        </label>
        <select
          value={selected}
          onChange={handleChange}
          className="h-[50px] w-[400px] border p-3"
        >
          <option value="Köpekler" className="mt-[20px] text-lg">
            Köpekler
          </option>
          <option value="Kediler" className="mt-[20px] text-lg">
            Kediler
          </option>
          <option value="Kuşlar" className="mt-[20px] text-lg">
            Kuşlar
          </option>
          <option value="Diğerleri" className="mt-[20px] text-lg">
            Diğerleri
          </option>
        </select>
      </div>
      <div className="ml-[30px] mt-[100px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-xl font-semibold">
          Soru Başlıgı
        </label>
        <input
          type="text"
          className="h-[50px] w-[400px] rounded-lg border p-3 text-lg outline-none"
        />
      </div>
      <div className="ml-[30px] mt-[50px] flex flex-col gap-y-3">
        <label htmlFor="select" className="text-xl font-semibold">
          Soru
        </label>
        <textarea
          type="text"
          className="h-[100px] max-w-[800px] rounded-lg border p-3 text-lg outline-none"
        />
      </div>
      <div className="flex gap-x-5 ml-[60px]">
        <button className="mt-[100px] ml-[30px] h-[50px] w-[100px] rounded-lg border p-3 text-lg outline-none bg-brand-3 flex justify-center items-center text-white" onClick={handleClose}>
          İPTAL
        </button>
        <button className="mt-[100px] ml-[30px] h-[50px] w-[100px] rounded-lg border p-3 text-lg outline-none bg-brand-3 flex justify-center items-center text-white">
          GÖNDER
        </button>
      </div>
    </Modal>
  );
};

export default AskQouestionModal;
