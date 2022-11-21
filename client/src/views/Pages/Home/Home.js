import React from "react";
import Modal from "../Home/Modal";
import { useState } from "react";
import "../Home/Home.css";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="">
        <div>
          <article className="article">
            Pensioners in India must submit a life certificate every year to
            receive pension in their bank account. There are 2 types of
            pensioners who must submit their life certificate once a year.
            Family pension - to be submitted in November Pension for self - to
            be submitted in January
          </article>
        </div>

        <p className="p1">Select your pension type:</p>
        <select className="drop-down">
          <option>--Family pension--</option>
          <option>--Pension for self--</option>
        </select>
      </div>

      <div className="btn-container">
        <button
          className="upload-btn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Upload Life certificate
        </button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}
