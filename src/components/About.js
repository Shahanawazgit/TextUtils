import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#091e39" : "#E7EEF7",
          color: props.mode === "dark" ? "white" : "black",
          border: props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
          borderRadius: "5px",
        }}
      >
        <h1
          className="my-2"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          About Us
        </h1>
        <div className="accordion mb-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  borderRadius: "5px",
                }}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  borderRadius: "5px",
                }}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  borderRadius: "5px",
                }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
