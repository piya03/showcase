import React, { useState } from "react";
import CommonToggleButton from "../../common/components/CommonComponent/CommonToggleButton";
import { Formik } from "formik";
const RMLists = () => {
  const [activeRM, setActiveRM] = useState([]);
  const rmNames = [
    {
      name: "Abhishek Sharma",
      id: 1,
      active: false,
    },
    {
      name: "Guru Kini",
      id: 2,
      active: false,
    },
    {
      name: "Nilam Kumari",
      id: 3,
      active: false,
    },
    {
      name: "Kushagra Gupta",
      id: 4,
      active: false,
    },
    {
      name: "Raghvendra Singh",
      id: 5,
      active: false,
    },
    {
      name: "Rahul Shinde",
      id: 6,
      active: false,
    },
    {
      name: "Vishwas Saini",
      id: 7,
      active: false,
    },
  ];
  const [rnName, setRmName] = useState(rmNames);
  console.log(activeRM, "valueRM");
  return (
    <Formik
      initialValues={{
        rmAction: "",
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        setFieldError,
        validateForm,
      }) => {
        return (
          <div className="px-4">
            <div className="flex p-4 text-black-500 text-base">
              <p className="pb-4">RM Name</p>
              <p className="ml-auto">Action</p>
            </div>

            {rmNames.map((each, i) => {
              return (
                <div className="flex p-4 text-black-500 text-base">
                  <p key={each?.id} className="py-3">
                    {each?.name}
                  </p>
                  <CommonToggleButton
                    name={each?.name}
                    Id={each?.id}
                    labelFor={each?.id}
                    checked={each?.id}
                    onChange={(e) => {
                      let checked = e.target.checked;

                      setRmName(
                        rmNames.map((elem) => {
                          if (elem.id === each.id) {
                            elem.active = checked;
                          }
                          return elem;
                        })
                      );
                      setActiveRM(each?.id);
                      console.log(activeRM, "testingggg");
                      console.log(each?.id, "checkEach");
                    }}
                    stylesContainer={{
                      marginLeft: "auto",
                      marginBottom: "0",
                    }}
                  />
                  {/* <input
                    onChange={(e) => {
                      let checked = e.target.checked;
                      setData(
                        data.map((indata) => {
                          if (indata.rollNo === each.rollNo) {
                            indata.selectedPerson = checked;
                          }
                          return indata;
                        })
                      );
                    }}
                    type="checkbox"
                    checked={each.selectedPerson}
                  /> */}
                </div>
              );
            })}
            <header
              style={{
                borderBottom: "1px solid #48545E",
                bottom: "15px",
              }}
              className="flex ml-auto relative pb-3 my-1"
            ></header>
            <div className="flex">
              <button
                className={
                  "text-black-500 w-56 h-10 mr-5 bg-white rounded-md border border-black-500"
                }
              >
                Discard
              </button>
              <button
                className={
                  "bg-tealCol-100 w-56 h-10 mr-5 text-white rounded-md "
                }
              >
                Save
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default RMLists;
