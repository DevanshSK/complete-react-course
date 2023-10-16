import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // Password generator logic
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    // reference method
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);

    // Direct method
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <main className="bg-[#262626] text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium">Password Generator</h1>
      <div className="w-full max-w-md bg-blue mx-auto shadow-md rounded-lg p-4 my-5 text-orange-500 bg-gray-800">
        {/* Button component */}
        <div className="flex w-full items-center space-x-2 ">
          <input
            className="flex flex-1 h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1  disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            ref={passwordRef}
            value={password}
            placeholder="Password"
            readOnly
          />
          <button
            type="button"
            onClick={copyPasswordToClipboard}
            className="rounded-md  bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Copy
          </button>
        </div>

        <div className="flex mt-4 text-sm justify-between gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
              id="length"
              className="cursor-pointer"
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="number"
              className="cursor-pointer"
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="character"
              className="cursor-pointer"
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
