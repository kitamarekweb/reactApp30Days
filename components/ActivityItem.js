import React from 'react'

class ActivityItem extends React.component {
  render() {
    const {activity} = this.props;
    return (
      <div className="item">
        <div className="avatar">
          {/*   <img
           alt='Doug'
           src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
           */}
          <img src={activity.user.avatar} alt={activity.user.name}/>
          Doug
          {activity.user.name}
        </div>

        <span className="time">
            An hour ago:
          {activity.timestamp}
          </span>
        <p>Ate lunch</p>
        <p>{activity.text}</p>
        <div className="commentCount">
          2,
          {activity.comments.length}
        </div>
        <br/>
      </div>
    )
  }
}

export default ActivityItem