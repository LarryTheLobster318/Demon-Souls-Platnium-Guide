import React, { useEffect } from "react"

export default function GroupedSteps(props) {

  const initialSavedData = JSON.parse(localStorage.getItem("savedData") || '{}')

  useEffect(() => {
    const allInputs = Array.from(
      document.getElementsByTagName('input')
    );
    allInputs.forEach(element => {
      if (initialSavedData[element.id]) {
        element.checked = true;
      }
    });
  });

  function handleOnChange(e) {
    const targetInputId = e.target.id;
    const checked = e.target.checked;
    let savedData = JSON.parse(localStorage.getItem("savedData"));
    if (!savedData) {
      savedData = {};
    }
    savedData[targetInputId] = checked;
    localStorage.setItem("savedData", JSON.stringify(savedData));
  }


  return (
    <div>
      <h3 id={`${btoa(props.name)}`}>{props.name}</h3>
      <ul>
        {props.steps.map(function (step) {
          return (
            <li key={btoa(step.text)}>
              <div className="flex">
                <div className="flex items-center h-5">
                  <input id={`${btoa(step.text)}`} type="checkbox"
                    onChange={handleOnChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className="ml-2 text-sm">
                  <label htmlFor={`${btoa(step.text)}`}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: step.text }}>
                  </label>

                  <p className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: step.subtext }}>
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );

}