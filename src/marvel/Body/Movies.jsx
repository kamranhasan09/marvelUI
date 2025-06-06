import React, { useRef, useEffect } from "react";

const Card = (prop) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const modal = document.getElementById(prop.id);
    if (!modal) return;

    const handleHide = () => {
      if (iframeRef.current) {
        iframeRef.current.src = prop.ytlink;
      }
    };

    modal.addEventListener("hidden.bs.modal", handleHide);

    return () => {
      modal.removeEventListener("hidden.bs.modal", handleHide);
    };
  }, [prop.id, prop.ytlink]);

  return (
    <>
      <div
        className="card container text-dark p-2 shadow mb-5  rounded "
        style={{ width: "18rem" }}
      >
        <div className="">
        <img src={prop.img} className="card-img-top" alt="..." />
        <div className="card-body mb-2 ">
          <h5 className="card-title">{prop.title}</h5>
          <strong className="card-text">Release Date</strong>
          <p className="card-text">{prop.date}</p>
          <p className="card-text">{prop.about}</p>
          <button
            type="button"
            className="btn btn-primary shadow  w-100 "
            data-bs-toggle="modal"
            data-bs-target={'#'+prop.id}
          >
            Watch Trailer Now
          </button>

          <div
            className="modal fade"
            id={prop.id}
            tabIndex="-1"
            aria-labelledby={"example"+prop.id}
            aria-hidden="true"
          >
            <div className=" modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-dark" id={"example"+prop.id}>
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
                    ref={iframeRef}
                    width="100%"
                    height="98%"
                    src={prop.ytlink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
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