export default function Party(props) {
  return (
    <div className="party">
      <img src={props.isImg} alt="img" />
      <div>{props.votesNumber}/10</div>
      <div className="firstButton">
        {" "}
        <button
          className={props.firstButtonClass}
          onClick={props.onClick3}
          id={props.key}
        >
          Vote Now
        </button>
      </div>
      <div className={props.secondButtonClass}>
        <p>Are U Sure?</p>
        <div className="verifyButtons">
          <button className="cancel" onClick={props.onClick2}>
            cancel
          </button>
          <button onClick={props.onClick1} className="ok" id={props.id}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
