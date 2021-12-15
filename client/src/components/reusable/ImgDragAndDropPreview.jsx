import { useDropzone } from "react-dropzone";
import Upload from "../../assets/icons/upload.svg";
import React, { useState } from "react";

function ImgDragAndDrop({ setImage, yourImage }) {
  const [imgbox, setImgBox] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImgBox(true);
      return setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            <p className="addreview__test">Drop the photo here...</p>
            <img src={Upload} className="addreview__uploadimage" />
          </div>
        ) : !imgbox ? (
          <img
            className="vintages__uploadimage addreview__uploadimage"
            src={Upload}
          />
        ) : (
          ""
        )}
        <div>
          {yourImage.length > 0 &&
            yourImage.map((upFile) => {
              return (
                <div>
                  <img
                    className="addreview__previewimg"
                    src={upFile.preview}
                    style={{ width: "320px", height: "190px" }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ImgDragAndDrop;
