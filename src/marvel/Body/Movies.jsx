import { useState, useRef, useEffect } from "react";

const Card = (prop) => {
  const [iframeSrc, setIframeSrc] = useState("");
  const iframeRef = useRef(null);
  const modalId = `modal-${prop.id}`;
  const labelId = `example-${prop.id}`;

  useEffect(() => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const handleShow = () => {
      setIframeSrc(prop.ytlink);
    };

    const handleHide = () => {
      setIframeSrc("");
      if (iframeRef.current) {
        iframeRef.current.src = "";
      }
    };

    modal.addEventListener("show.bs.modal", handleShow);
    modal.addEventListener("hidden.bs.modal", handleHide);

    return () => {
      modal.removeEventListener("show.bs.modal", handleShow);
      modal.removeEventListener("hidden.bs.modal", handleHide);
    };
  }, [modalId, prop.ytlink]);

  return (
    <>
      <div
        className="card container text-dark p-2 shadow mb-5 rounded"
        style={{ width: "18rem", height: "40rem" }}>
        <div className="d-flex flex-column h-100">
          <img src={prop.img} className="card-img-top" alt="..." />
          <div className="card-body mb-2 flex-grow-1">
            <h5 className="card-title">{prop.title}</h5>
            <strong className="card-text">Release Date</strong>
            <p className="card-text">{prop.date}</p>
            <p className="card-text">{prop.about}</p>
          </div>
          <button
            type="button"
            className="btn btn-primary shadow w-100 mt-auto"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          >
            Watch Trailer Now
          </button>

          <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            aria-labelledby={labelId}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-fullscreen">
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
                    src={iframeSrc || null}
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
    </>
  );
};

export default Card;