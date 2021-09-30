import './css/base.scss'
import './css/form.scss'
import './css/header.scss'

import { handleSumbit } from "./js/formInput";


const btn = document.querySelector("#submit-button")
btn.addEventListener('click', handleSumbit)
