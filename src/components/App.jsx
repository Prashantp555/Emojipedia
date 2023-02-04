import React from "react";
import Data from "./Data";
import EmojiData from "../emojipedia";

function generateData(emojiData) {
  return (
    <Data
      key={emojiData.id}
      emoji={emojiData.emoji}
      name={emojiData.name}
      meaning={emojiData.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <div className="dictionary">{EmojiData.map(generateData)}</div>
    </div>
  );
}

export default App;
