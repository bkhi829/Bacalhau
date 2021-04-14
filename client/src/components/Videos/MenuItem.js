const MenuItem = (props) => {
  return (
    <li className={`listItem ${props.activePlaylist._id===props.ele._id?"active":""}`} onClick={()=>{props.handleListItemClick(props.ele)}}>
      <span className="listName">{props.ele.name}</span>
    </li>
  )
}

export default MenuItem;