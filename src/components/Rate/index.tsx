// Hooks
import { useState } from "react";

type Props = {
  callback: (rating: string) => void;
};

const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState("5");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={handleChange}
      />
      {value}
      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </div>
  );
};

export default Rate;
