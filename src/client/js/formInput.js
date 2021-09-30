const handleSumbit = (e) => {
    e.preventDefault();
    const inputField = document.querySelector('#url-input').value;
    const formdata = new FormData();
    formdata.append("key", "");
    formdata.append("txt", inputField);
    formdata.append("lang", 'en');
    
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => ({
        status: response.status, 
        body: response.json()
      }))
      .then(({ status, body }) => console.log(status, body))
      .catch(error => console.log('error', error));
}

export { handleSumbit }

