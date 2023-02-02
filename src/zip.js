import JSZip from "jszip";
import { saveAs } from "file-saver";

const Zip = () => {
  const zipBtnClickHandler = () => {
    const zip = new JSZip();

    zip.file("Hello.txt", "Hello World\n");

    const img = zip.folder("images");
    img.file("smile.gif", "image");

    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "example.zip");
    });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Damion&display=swap"
        rel="stylesheet"
      />

      <button className="noselect" onClick={zipBtnClickHandler}>
        Zip Download
      </button>
    </>
  );
};

export default Zip;
