import React from "react";
import "../Home/Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="one">
      <div className="one-card">
        <div className="model-title">Add Employee Details</div>
        <div>
          <button
            className="mr-2"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlKOAbkBiYkuW0b_t792Svo4EkWtz1uRhrrqCGCP_GA&s"
          alt="Avatar"
          class="avatar"
          className="avatar"
        ></img>
    </div>
      <form className="">
        <input
          type="text"
          id="fname"
          name="fname"
          value="First Name"
          className="first-name"
        />

        <input
          type="text"
          id="lname"
          name="lname"
          value="Last Name"
          className="last-name"
        />
        <br />

        <input
          type="text"
          id="fname"
          name="fname"
          value="Pension ID"
          className="pension-id"
        />
        <br />

        <input
          type="text"
          id="fname"
          name="fname"
          value="Email"
          className="email"
        />
        <input
          type="text"
          id="lname"
          name="lname"
          value="Mobile Number"
          className="mobile-number"
        />
        {/* ID proof */}
        <h1 className="id-proof-title">ID proof</h1>

        <div class="id-proof-container">
          <label for="dropzone-file" class="id-proof-label">
            <div class="svg-div">
              <svg
                aria-hidden="true"
                class="svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="svg-p">
                <span class="svg-span">Click to upload</span> or drag and drop
              </p>
              <p class="svg-format">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </form>

      <div className="footer">
        <button
          className="btn-cancel"
          onClick={() => {
            setOpenModal(false);
          }}
          id="Btn"
        >
          Cancel
        </button>
        <button className="btn-save" id="Btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default Modal;
