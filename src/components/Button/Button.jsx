import "./Button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="https://drive.google.com/file/d/1a1ZGdRf_AeU44aF5C5JXbczJljT5eunH/view?usp=sharing" className="btn pri" target={"blank"}>
        ENGLISH CV
      </a>
      <a href="https://drive.google.com/file/d/1oDan5VCRih4rSFhIos8vGlaE7Du-H6Ut/view?usp=sharing" className="btn sec" target={"blank"}>
      SPANISH CV
      </a>
    </div>
  );
}

export default Buttons;
