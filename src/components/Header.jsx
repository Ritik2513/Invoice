import React from "react";

function Header({ handlePrint }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Invoice
          </h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 "
              >
                Print
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
