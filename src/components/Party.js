import { useState } from "react";
import "./style.css";

export default function Party(props) {
  const [isVoting, setIsVoting] = useState(false);

  const [secondButtonClass, setSecondButtonClass] = useState("secondButtons ");
  const [firstButtonClass, setFirstButtonClass] = useState("voteNow ");

  function verification() {
    setIsVoting(true);
  }

  function cancelChine() {
    setIsVoting(false);
  }
  return (
    <div className="party">
      <img src={props.isImg} alt="img" />
      <div>{props.votesNumber}/10</div>
      {!isVoting && (
        <div className="firstButton">
          {" "}
          <button
            className={firstButtonClass}
            onClick={verification}
            id={props.key}
          >
            Vote Now
          </button>
        </div>
      )}
      {isVoting && (
        <div className={secondButtonClass}>
          <p>Are U Sure?</p>
          <div className="verifyButtons">
            <button className="cancel" onClick={cancelChine}>
              cancel
            </button>
            <button onClick={props.onClick1} className="ok" id={props.id}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
