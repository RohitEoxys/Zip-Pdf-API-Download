import React from "react";
import axios from "axios";

const Downladapi = () => {
  const url =
    "https://unify.eoxyslive.com/images/jobs/RAJASTHAN%20TECHNICAL%20UNIVERSITY%2C%20Rawatbhata%20Road%2C%20Kota%20%28Raj.%29.pdf";

  const downloadFile = async (evt) => {
    evt.preventDefault();
    await axios({
      url: url,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf");
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <div>
        <button onClick={(evt) => downloadFile(evt)}>Download</button>
      </div>
    </>
  );
};

export default Downladapi;
