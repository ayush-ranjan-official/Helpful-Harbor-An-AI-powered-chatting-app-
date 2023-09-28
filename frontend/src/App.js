import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import AIpage from "./Pages/AIBotpage";
import Homepage_video from './Pages/video_call/homepage_video';
import Roompage_video from './Pages/video_call/roompage_video';
import Homepage_voice from './Pages/voice_call/homepage_voice';
import Roompage_voice from './Pages/voice_call/roompage_voice';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/AIBot" component={AIpage} />
      <Route path = "/video" component={Homepage_video} />
      <Route path = "/room/:roomId" component={Roompage_video}/>
      <Route path = "/voice" component={Homepage_voice} />
      <Route path = "/room1/:roomId" component={Roompage_voice}/>
    </div>
  );
}

export default App;
