// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import html2pdf from "html2pdf.js";
import * as htmlToImage from "html-to-image";
// import "svg2pdf.js";
import { SyntheticEvent, useRef } from "react";
// import jsPDF from "jspdf";
// import htmlToSvg from "htmlsvg";

export const App = () => {

  const element = useRef(null);
  const options = {
    margin: [30, 80, 0, 0],
    filename: "table.pdf",
    html2canvas: { scale: 5 },
    jsPDF: { orientation: "l", format: "a4" },
  };

  const click = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (element.current)
    
      htmlToImage.toSvg(element.current).then(function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;

        document.body.appendChild(img);

        html2pdf().set(options).from(img).save();
      });
  };

  return (
    <article>
      <form>
        <input type="button" onClick={click}/>
      </form>
      <div ref={element} className="table">
        Ге&shy;не&shy;ра&shy;тор таб&shy;лиц
      </div>
    </article>
  );
};
