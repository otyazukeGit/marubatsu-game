import { useHistory } from 'react-router-dom'

export const useTransition = (path: string): void => {
  const history = useHistory()
  return history.push(path)
}
