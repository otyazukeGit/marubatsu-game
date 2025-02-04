import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/index'

export const Auth = ({ children }: any) => {
  const history = useHistory()

  const authUser = auth.currentUser
  // console.log('authUser: ', authUser);

  useEffect(() => {
    if (!authUser) {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          history.push('/signin')
        }
      })
    }
  }, [])

  return authUser ? children : <></>
}
