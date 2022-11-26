import Message from "../../../Components/Message/Message";
import "./Conversation.css";

const Conversation = () => {
  const onlineStatusColors = {
    available: "#1BC98E",
    away: "#FF9900",
    offline: "#AD9CC4",
  };
  return (
    <div className="conversation">
      <div className="left-conversation">
        <div className="btn-div">
          <button className="back">Back</button>
          <button className="bot">Un Pause Bot</button>
        </div>
        <div className="chat-details">
          <div className="detail-row">
            <h6>Team</h6>
            <p>botanalytics</p>
          </div>
          <div className="detail-row">
            <h6>Channel</h6>
            <p>Yokko Channel</p>
          </div>
          <div className="detail-row">
            <h6>Total Messages</h6>
            <p>450</p>
          </div>
          <div className="detail-row">
            <h6>Date</h6>
            <p>8 December 2016</p>
          </div>
          <div className="detail-row">
            <h6>Total Users</h6>
            <p>2</p>
          </div>
        </div>
        <div className="recent-chats">
          <h2>Recent Chats</h2>
          <div className="chat-head">
            <img src="/assets/user1.png" alt="" />
            <div>
              <h3>Ioana Mircea</h3>
              <p style={{ color: onlineStatusColors.available }}>
                <div
                  style={{ backgroundColor: onlineStatusColors.available }}
                  className="status-dot"
                ></div>{" "}
                Available
              </p>
            </div>
          </div>
          <div className="chat-head">
            <img src="/assets/user1.png" alt="" />
            <div>
              <h3>Ioana Mircea</h3>
              <p style={{ color: onlineStatusColors.away }}>
                <div
                  style={{ backgroundColor: onlineStatusColors.away }}
                  className="status-dot"
                ></div>{" "}
                Away
              </p>
            </div>
          </div>
          <div className="chat-head">
            <img src="/assets/user1.png" alt="" />
            <div>
              <h3>Ioana Mircea</h3>
              <p style={{ color: onlineStatusColors.offline }}>
                <div
                  style={{ backgroundColor: onlineStatusColors.offline }}
                  className="status-dot"
                ></div>{" "}
                Offline
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-conversation">
        <h2 className="date">Today - 21 November 2021</h2>
        <div className="chat-room">
          <Message
            img="/assets/user1.png"
            msg="Perspiciatis unde omnis iste natus error sit voluptatem"
            date="1 min ago"
          />
          <Message
            img="/assets/user1.png"
            msg="Perspiciatis unde omnis iste natus error sit voluptatem"
            date="1 min ago"
            userSent
          />
          <Message
            img="/assets/user1.png"
            msg="Perspiciatis unde omnis iste natus error sit voluptatem"
            date="1 min ago"
          />
          <Message
            img="/assets/user1.png"
            msg="Perspiciatis unde omnis iste natus error sit voluptatem"
            date="1 min ago"
            userSent
          />
          <Message
            img="/assets/user1.png"
            msg="Perspiciatis unde omnis iste natus error sit voluptatem"
            date="1 min ago"
          />
          <Message
            img="/assets/user1.png"
            msg="Perspiciatis unde omnis iste natus error sit voluptatem"
            date="1 min ago"
            userSent
          />
        </div>
        <div className="send-message">
          <input type="text" placeholder="Write your message here..." />
          <div className="right-send-message">
            <img src="/assets/ico-clip.png" alt="" />
            <img src="/assets/ico-emoji.png" alt="" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
