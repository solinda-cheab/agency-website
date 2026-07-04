import api from './axios'

export async function getProjects() {
  const response = await api.get('/projects?populate=*')
  return response.data
}
