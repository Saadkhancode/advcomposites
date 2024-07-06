import React from "react";

function Notbar() {
  return (
    <>
      <div className="bg-black p-3">
        <a
          className="flex h-full w-full items-center bg-theme-bg-hex text-white select-none justify-center"
          href="/policies/shipping-policy"
        >
          <div className="container w-fit flex-shrink self-center text-center">
            <div className="font-group-1 max-md:hidden">
              <p className="_p">SUMMER SALE - UP TO 70% OFF. T&amp;Cs APPLY.</p>
            </div>
            <div className="font-group-1 md:hidden">
              <p className="_p">SUMMER SALE - UP TO 70% OFF. T&amp;Cs APPLY.</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Notbar;
