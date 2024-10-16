import { act, useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditing() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
