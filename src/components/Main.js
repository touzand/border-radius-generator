import React, { useState } from "react";
import RangeSlider from "../components/RangeSlider";

function Main() {
  const [defaultValueRight, setDefaultValueRight] = useState(70);
  const [defaultValueTop, setDefaultValueTop] = useState(60);
  const [defaultValueLeft, setDefaultValueLeft] = useState(40);
  const [defaultValueBottom, setDefaultValueBottom] = useState(30);

const CopyToClipboar=()=> {
  /* Get the text field */
var copyText = document.getElementById("copy");

  /* Select the text field */
  //copyText.select();
  //copytext.setselectionrange(0, 99999); [> for mobile devices <]

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(`border-radius:${copyText.textContent};`);

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.textContent);

}

  const handleChangeRight = (e) => {
    setDefaultValueRight(e.target.value);
  };
  const handleChangeTop = (e) => {
    setDefaultValueTop(e.target.value);
  };
  const handleChangeLeft = (e) => {
    setDefaultValueLeft(e.target.value);
  };
  const handleChangeBottom = (e) => {
    setDefaultValueBottom(e.target.value);
  };

  return (
    <main>
      <div className="radius-container">
        <RangeSlider
          defaultValue={defaultValueTop}
          onChange={handleChangeTop}
        />
        <div style={{ display: "flex" }}>
          <div
            className="radius-example"
            style={{
              borderRadius: `${defaultValueTop}% ${Math.abs(
                defaultValueTop - 100
              )}% ${Math.abs(
                defaultValueBottom - 100
              )}% ${defaultValueBottom}% /${defaultValueRight}% ${defaultValueLeft}% ${Math.abs(
                defaultValueLeft - 100
              )}% ${Math.abs(defaultValueRight - 100)}%`,
            }}
          ></div>
        </div>
        <RangeSlider
          defaultValue={defaultValueRight}
          onChange={handleChangeRight}
        />
        <RangeSlider
          defaultValue={defaultValueLeft}
          onChange={handleChangeLeft}
          vertical={true}
        />
        <RangeSlider
          defaultValue={defaultValueBottom}
          onChange={handleChangeBottom}
        />
      </div>
      <div className="output">
        <div>Border radius:</div>
        <span className="output-gen" id='copy'>{`${defaultValueTop}% ${Math.abs(
          defaultValueTop - 100
        )}% ${Math.abs(
          defaultValueBottom - 100
        )}% ${defaultValueBottom}% / ${defaultValueRight}% ${defaultValueLeft}% ${Math.abs(
          defaultValueLeft - 100
        )}% ${Math.abs(defaultValueRight - 100)}%`}</span>
        <button onClick={CopyToClipboar}>Copy</button>
      </div>
      <div className="more">
      </div>
    </main>
  );
}

export default Main;
