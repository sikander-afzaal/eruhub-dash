import "./Message.css";

const Message = ({ img, msg, date, userSent }) => {
  return (
    <div className={`message ${userSent ? "loggedUserMsg" : ""}`}>
      <img src={img} alt="" />
      <div>
        <p>{msg}</p>
        <h6>{date}</h6>
      </div>
    </div>
  );
};

export default Message;
