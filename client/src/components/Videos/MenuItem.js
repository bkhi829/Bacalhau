const MenuItem = (props) => {
  return (
    <li className={`menuItem ${props.activePlaylist._id===props.ele._id?"active":""}`} onClick={()=>{props.handleListItemClick(props.ele)}}>
      <span className="itemName">{props.ele.name}</span>
    </li>
  )
}

export default MenuItem;