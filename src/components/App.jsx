import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="flex flex-row">
        <div className="min-h-80% flex h-fit flex-col justify-between p-8">
          <MusicPlayer />
        </div>
        <div className="min-h-80% flex h-fit flex-col justify-between p-8">
          <h1 className="text-9xl">Left Side Things</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
