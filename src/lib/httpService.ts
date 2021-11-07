import axios from 'axios'
import { BASE_URL } from '$lib/common/constants/apiUrls';

export default axios.create ({
  baseURL : BASE_URL,
  headers: {'Accept': 'application/json'}
})