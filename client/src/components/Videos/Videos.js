import axios from 'axios';
import Menu from './Menu';

import '../../css/Videos/Videos.css';

const Videos = ()=>{

  //channelID: UC1WLQD_3Lblql-PFN6Qgcqw
  //upload: UU1WLQD_3Lblql-PFN6Qgcqw
  //playlistID: PLHdAqjAuBDsGMzCocfCVbNuOq9G77YL73 (All)
  //API_KEY : AIzaSyD11BphLx79Dm-vy5Bfop8cpRtz1hr2LUo

  // axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1WLQD_3Lblql-PFN6Qgcqw&order=date&key=AIzaSyD11BphLx79Dm-vy5Bfop8cpRtz1hr2LUo")
  // .then(data=>console.log(data));

  return (
    <div className="VideosPage">
      <main className="VideosMain">
        <Menu />
      </main>
    </div>
  )
}

export default Videos;