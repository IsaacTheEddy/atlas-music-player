import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayList } from "./PlayList";
import { Skelton } from "./Skeleton/Skeleton";
import { useState } from "react";

function App() {
  const [a, setA] = useState(false);
  return (
    <>
      {a === false ? (
        <Skelton />
      ) : (
        <div className="flex h-full min-h-screen flex-col bg-KindaGray dark:bg-DarkChocalate dark:text-white">
          <div className="mx-auto flex flex-col rounded-2xl border-8 border-double border-Mocha md:flex-row">
            <div className="min-h-80% flex h-fit flex-col justify-between rounded-es-lg border-Lightpink p-4 md:border-r-4 dark:border-Mocha">
              <MusicPlayer />
            </div>
            <div className="min-h-80% flex h-fit flex-col justify-between p-4">
              <PlayList />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
