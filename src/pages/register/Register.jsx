import React, { useRef, useState } from "react";
import BasicData from "./BasicData";
import SignBanner from "./SignBanner";
import AdditionalData from "./AdditionalData";
import TagData from "./TagData";

function Register() {
  const [activePage, setActivePage] = useState({
    page: true,
    page2: false,
    page3: false,
  });

  const goUp = () => {
    window.scrollTo(0, 0);
    console.log("Active");
  };

  const form = useRef(null);
  const sendData = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(form.current.target);
    fetch("https://www.data.com", {
      method: "POST",
      body: JSON.stringify(data),
    }).catch((err) => console.error(err));

    console.log(data);
  };

  return (
    <main className=" flex justify-center bg-[#FAF8F6] ">
      <div className=" my-0 sm:my-[20px] md:my-[40px] max-w-[1600px]  grid grid-cols-1 xl:grid-cols-2 gap-[25px] w-full h-full">
        <SignBanner />
        <div className=" bg-[#FAF8F6] px-0 mx-0 sm:mx-[20px] sm:px-[40px] min-h-[100vh]  rounded-[8px] shadow-lg">
          <form
            ref={form}
            className="w-full h-full"
            onSubmit={(event) => {
              sendData(event);
            }}
          >
            {activePage.page && (
              <BasicData
                button={() => {
                  goUp();
                  console.log("hey");
                  setActivePage({
                    page: false,
                    page2: true,
                    page3: false,
                  });
                }}
              />
            )}
            {activePage.page2 && (
              <AdditionalData
                title="Страница 2"
                goBack={() => {
                  goUp();
                  console.log("hey");
                  setActivePage({
                    page: true,
                    page2: false,
                    page3: false,
                  });
                }}
                button={() => {
                  goUp();

                  setActivePage({
                    page: false,
                    page2: false,
                    page3: true,
                  });
                }}
              />
            )}
            {activePage.page3 && (
              <TagData
                title="Страница 3"
                goBack={() => {
                  goUp();

                  setActivePage({
                    page: false,
                    page2: true,
                    page3: false,
                  });
                }}
                button={() => {
                  console.log("Регистрация!");
                }}
              />
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
