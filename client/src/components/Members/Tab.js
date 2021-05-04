import { infoAnimation } from './animation';

import '../../css/Members/Tab.css';

const Tab = (props) => {

  const handleClick = () => {
    props.setCurr(props.el);
    infoAnimation(props.infoRef);
  }

  const source = props.el.icon_url.match(/http/)!==null?props.el.icon_url:`./assests/${props.el.icon_url}`;

  return (
    <div className="iconTab" onClick={handleClick}>
      <div className="icon">
        {
          props.el.icon_url!==undefined?
          <img src={source} alt=" "></img>:
          ""
        }
      </div>
      <p className="name">{props.el.name || ""}</p>
    </div>
  )
}

export default Tab;