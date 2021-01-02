import { useHistory } from 'react-router-dom'

export const useTransition = (path: string): any => {
  const history = useHistory()
  return history.push(path)
}
