const MenuItem = (props) => {

  const handleClick = ()=>props.setActiveItem(props.listID);

  return (
    <li className={`listItem ${props.activeItem===props.listID?"active":""}`} onClick={()=>{handleClick(props.listID)}}>{props.label}</li>
  )
}

export default MenuItem;