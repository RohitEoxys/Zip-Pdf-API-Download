import { saveAs } from "file-saver";
import JsFileDownloader from "js-file-downloader";

const Download = () => {
  const fileUrl =
    "https://unify.eoxyslive.com/images/jobs/RAJASTHAN%20TECHNICAL%20UNIVERSITY%2C%20Rawatbhata%20Road%2C%20Kota%20%28Raj.%29.pdf";

  const fileDownloader = () => {
    new JsFileDownloader({
      url: fileUrl,
    })
      .then(function (data) {
        // Called when download ended
        saveAs(data, "hey");
      })
      .catch(function (error) {
        // Called when an error occurred
        console.log(error);
      });
  };
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Damion&display=swap"
        rel="stylesheet"
      />

      {/* <button className="noselect" onClick={fileDownloader}>
        File Download
      </button> */}
      <a className="noselect" href={fileUrl} download={fileUrl} target="_blank">
        Download
      </a>
    </>
  );
};

export default Download;
