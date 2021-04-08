import Slogan from './Slogan';
import Description from './Description';
import LikeCount from './LikeCount';

import '../../css/HomePage/HomePage.css';

const HomePage = ()=>(
  <div className="HomePage">
    <Slogan />
    <Description />
    <LikeCount />
  </div>
)

export default HomePage;