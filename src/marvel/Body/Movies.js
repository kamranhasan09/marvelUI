import React from "react";

const Card = (prop) => {
  return (
    <>
      <div
        className="card  text-dark shadow p-2 mb-5  rounded"
        style={{ width: "18rem" }}
      >
        <img src={prop.img} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{prop.title}</h5>
          <strong className="card-text">Release Date</strong>
          <p className="card-text">{prop.date}</p>
          <p className="card-text">{prop.about}</p>
          <button
            type="button"
            className="btn btn-primary shadow  w-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Watch Trailer Now
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className=" modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-dark" id="exampleModalLabel">
                    {prop.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <iframe
                    width="100%"
                    height="98%"
                    src={prop.ytlink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
