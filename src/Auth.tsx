import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
// import {useTransition} from './UIkit/Routing'
import { auth } from './firebase/index'

export const Auth = ({ children }: any) => {

	const history = useHistory()

	const authUser = auth.currentUser
	// console.log('authUser: ', authUser);

	useEffect(
		() => {
			if (!authUser) {
				auth.onAuthStateChanged((user) => {
					// console.log('user: ', user);
					if (user) {
						// TODO: do store the auth status after SignIn

					} else {
						history.push("/signin")
					}
				})
			}
		}
		, []
	)

	// return isSigned ? children : <></>
	return authUser ? children : <></>
}
