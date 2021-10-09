import { handleData } from "./displayData";

const handleSubmit = async (event) => {
  event.preventDefault()
  
  const userInput = document.querySelector("#url-input").value;
  const warning = document.querySelector('.warning');
  const regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
  // Post request to get the user input
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',     
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'       
      },      
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
if (userInput === '' || !regex.test(userInput)) {  
  warning.classList.remove('d-none')
} else {
  warning.classList.add('d-none')
  postData('/api', { url: userInput })
  .then(data => {
    console.log(data); 
  });

  // Gets the API data from the server side
  const api_url = `/article`
  const response = await fetch(api_url);
  const json = await response.json();
  handleData(json)
}

 
}

export { handleSubmit }




