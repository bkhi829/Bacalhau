import {Link} from 'react-router-dom';

import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <Link to='/'><h2 className="title">馬介休 Bacalhau</h2></Link>
      <ul>
        <Link to='/members'><li>成員介紹</li></Link>
        <Link to='/videos'><li>影片系列</li></Link>
        <hr />
      </ul>
    </header>
  )
}

export default Header;