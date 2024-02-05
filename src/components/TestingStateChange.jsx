import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "ayaan",
  },
  {
    id: 2,
    name: "tania",
  },
  {
    id: 3,
    name: "uddin",
  },
];
const TestingStateChange = () => {
  const [loaded, setLoaded] = useState(false);
  const [toggleTextVisible, setToggleTextVisible] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [elements, setElements] = useState(data);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded && <h3>Page Loaded</h3>}

      <div>
        {toggleTextVisible && <p> Text visible </p>}

        <button
          onClick={() => {
            setToggleTextVisible(!toggleTextVisible);
          }}
        >
          Toggle text
        </button>

        <button
          onClick={() => {
            setBtnDisabled(!btnDisabled);
          }}
        >
          Toggle button disabled
        </button>

        <h3>List</h3>
        {elements.map((item) => (
          <div key={item.id} data-testid="record">
            {item.id}: {item.name}
          </div>
        ))}
        <button
          onClick={() => {
            setElements((prevElements) => [
              ...prevElements,
              { id: 4, name: "manir" },
            ]);
          }}
        >
          Add to list
        </button>
        <button
          onClick={() => (prevElements) =>
            prevElements.filter((item) => item.id !== 2)}
        >
          Remove from list
        </button>
      </div>
    </div>
  );
};

export default TestingStateChange;
