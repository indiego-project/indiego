import React, { useMemo, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ImageResize from "quill-image-resize";
Quill.register("modules/ImageResize", ImageResize);

const toolbarOptions = [
  ["image"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "width",
];

const Editor = ({ placeholder, value, setValue, arrayRef }) => {
  const quillRef = useRef();

  // 이미지 처리를 하는 핸들러
  //에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다
  const imageHandler = () => {
    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append("file", file); // formData는 키-밸류 구조

      // 백엔드에 이미지를 보낸다.
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_SERVER_URI}/shows/uploads`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const IMG_URL = result.data.data;

        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);

        arrayRef.push(IMG_URL);
      } catch (error) {
        alert("이미지 업로드에 실패하였습니다");
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          // 이미지 처리는 mageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      placeholder={placeholder}
      value={value}
      theme="snow"
      modules={modules}
      formats={formats}
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      onChange={(e) => setValue(e)}
    />
  );
};

export default Editor;
