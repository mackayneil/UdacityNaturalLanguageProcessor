import './css/base.scss'
import './css/form.scss'
import './css/header.scss'

import { handleSubmit } from "./js/formInput";


const btn = document.querySelector("#submit-button")
btn.addEventListener('click', handleSubmit)

