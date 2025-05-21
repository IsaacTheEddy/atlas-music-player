import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayList } from "./PlayList";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="mx-auto flex flex-row">
        <div className="min-h-80% flex h-fit flex-col justify-between p-8">
          <MusicPlayer />
        </div>
        <div className="min-h-80% flex h-fit flex-col justify-between p-8">
          <PlayList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
