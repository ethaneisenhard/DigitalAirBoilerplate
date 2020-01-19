import React, { PureComponent } from "react"
import "../styles/components/darkModeToggle.scss"

class DarkModeToggle extends PureComponent {
  
  componentDidMount() {
    const objToggle = document.querySelector(".js-toggle")
    const objToggleContainer = document.body

    // Little bit of an experiment to see if I could detect dark mode preference
    const blnDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches

    var checkDarkMode = localStorage.getItem("darkMode")

    if (blnDarkMode) {
      objToggle.setAttribute("aria-pressed", "true")
      objToggleContainer.setAttribute("data-theme", "dark")
    }

    if (checkDarkMode === "false") {
      objToggle.setAttribute("aria-pressed", "false")
      objToggleContainer.setAttribute("data-theme", "light")
    }

    // Handle the actual toggle and switch the theme
    objToggle.addEventListener("click", e => {
      if (objToggle.getAttribute("aria-pressed") == "false") {
        objToggle.setAttribute("aria-pressed", "true")
        objToggleContainer.setAttribute("data-theme", "dark")
        localStorage.setItem("darkMode", "true")
      } else {
        objToggle.setAttribute("aria-pressed", "false")
        objToggleContainer.setAttribute("data-theme", "light")
        localStorage.setItem("darkMode", "false")
      }
    })
  }

  render() {
    return (
      <div id="darkModeToggle">
        <div className="toggle__wrap">
          <button
            type="button"
            className="toggle__switch js-toggle"
            aria-label="toggle"
            aria-pressed="true"
          >
            <span className="toggle__icon toggle__icon--light">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0005 4C5.7915 4 4.0005 5.791 4.0005 8C4.0005 10.209 5.7915 12 8.0005 12C10.2095 12 12 10.209 12 8C12 5.791 10.2095 4 8.0005 4ZM7 1C7 0.4475 7.4475 0 8 0C8.5525 0 9 0.4475 9 1C9 1.5525 8.5525 2 8 2C7.4475 2 7 1.5525 7 1ZM2 3C2 2.4475 2.4475 2 3 2C3.5525 2 4 2.4475 4 3C4 3.5525 3.5525 4 3 4C2.4475 4 2 3.5525 2 3ZM1 7C1.5525 7 2 7.4475 2 8C2 8.5535 1.5525 9 1 9C0.4475 9 0 8.5535 0 8C0 7.4475 0.4475 7 1 7ZM2 13C2 12.4475 2.4475 12 3 12C3.5525 12 4 12.4475 4 13C4 13.5525 3.5525 14 3 14C2.4475 14 2 13.5525 2 13ZM7 15C7 14.4455 7.4475 14 8 14C8.554 14 9 14.4455 9 15C9 15.551 8.554 16 8 16C7.4475 16 7 15.551 7 15ZM12 13C12 12.4475 12.4475 12 13 12C13.5525 12 14 12.4475 14 13C14 13.5525 13.5525 14 13 14C12.4475 14 12 13.5525 12 13ZM15 9C14.448 9 14 8.552 14 8C14 7.4465 14.448 7 15 7C15.552 7 16 7.4465 16 8C16 8.552 15.552 9 15 9ZM12 3C12 2.4475 12.4475 2 13 2C13.5525 2 14 2.4475 14 3C14 3.5525 13.5525 4 13 4C12.4475 4 12 3.5525 12 3Z"
                  fill="#FFE4A1"
                />
              </svg>
              <span className="u-a11y">Light</span>
            </span>
            <span className="toggle__icon toggle__icon--dark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3165 11.0918C8.2225 11.0918 4.9065 7.77324 4.9065 3.68161C4.9065 2.33407 5.293 1.08753 5.922 0C2.51 0.984031 0 4.09363 0 7.82224C0 12.3379 3.66 16 8.176 16C11.9045 16 15.016 13.4884 16 10.0778C14.91 10.7048 13.664 11.0918 12.3165 11.0918Z"
                  fill="#B9C6D3"
                />
              </svg>
              <span className="u-a11y">Dark</span>
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default DarkModeToggle
