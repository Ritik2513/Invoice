import React from "react";

function Notes({ notes }) {
  return (
    <>
      <section className="mt-10 mb-5">
        {/* textarea */}
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </>
  );
}

export default Notes;
