import { infoAnimation } from './animation';

import '../../css/MemberPage/Tab.css';

const Tab = (props) => {

  const handleClick = () => {
    props.setCurr(props.el);
    infoAnimation(props.infoRef);
  }

  return (
    <div className="iconTab" onClick={handleClick}>
      <div className="icon">
        {
          props.el.icon_url!==undefined?
          <img src={`./assests/${props.el.icon_url}.jpg`} alt=" "></img>:
          ""
        }
      </div>
      <p className="name">{props.el.name || ""}</p>
    </div>
  )
}

export default Tab;