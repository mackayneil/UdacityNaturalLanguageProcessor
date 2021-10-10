const handleData = (data) => {
    const form = document.querySelector('#form-results');


    form.innerHTML =  `<h3>Form results:</h3>
                        <div><p>Agreement</p><p>${data.agreement}</p></div>
                        <div><p>Confidence</p><p>${data.confidence}</p></div>
                        <div><p>Irony</p><p>${data.irony}</p></div>
                        <div><p>Subjectivity</p><p>${data.subjectivity}</p></div>`   
}
export { handleData }