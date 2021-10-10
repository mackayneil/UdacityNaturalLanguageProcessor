import { handleData } from "./handleData";

async function handleSubmit (event) {
  event.preventDefault()
  
  const userInput = document.querySelector("#url-input").value;
  const userInputValue = { userInput }
  const warning = document.querySelector('.warning');
  const regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
  

 
  // Post request to get the user input

  if (userInput === '' || !regex.test(userInput)) {  
    warning.classList.remove('d-none')
  } else {
    warning.classList.add('d-none');
    fetch('http://localhost:8080/article', {
            method: 'POST',
            credentials: 'same-origin',           
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInputValue),
        })
          .then(res => res.json())
          .then(function (res) {            
            handleData(res)
          }
        );
    }
  }

export { handleSubmit }