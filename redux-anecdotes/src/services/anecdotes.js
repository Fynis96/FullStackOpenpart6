import axios from 'axios'

const baseUrl = 'http://localhost:3005/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const exporter = {
  getAll,
  createNew
}

export default exporter