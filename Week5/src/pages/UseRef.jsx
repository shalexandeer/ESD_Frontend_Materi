import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus on the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>UseRef</h1>
      <input
        id='ref'
        type='text'
        ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
