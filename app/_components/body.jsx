"use client";

import MRR from "./mrr";

export default function Body() {
  return (
    <div className="flex flex-col sm:flex-row mt-32">
      <div className="flex-1 mx-auto sm:ml-10 md:ml-60">
        <div className="mb-12 max-w-md">
          <p className="whitespace-pre-line mb-8">
            hi, i'm{" "}
            <strong className="italic text-4xl">Prithvi J</strong>.
          </p>
          <p className="whitespace-pre-line mb-8">
            self proclaimed{" "}
            <strong className="italic">product developer</strong>.
          </p>
          <p className="whitespace-pre-line mb-8">
            currently placed at{" "}
            <strong className="italic underline">
              <a
                href="https://www.ust.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UST Global
              </a>
            </strong>
            .
          </p>
          <p className="whitespace-pre-line">
            {`building products, 
          earning money(currently none), 
          helping people and having fun.`}
          </p>
        </div>
      </div>
      <div className="flex-1 mx-auto mt-10 sm:mt-0">
        <MRR />
      </div>
    </div>
  );
}
