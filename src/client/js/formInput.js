const handleSubmit = async (event) => {
  event.preventDefault()

  const api_url = `/article`
  const response = await fetch(api_url);
  const json = await response.json();
  console.log(json);
}

export { handleSubmit }




