import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, FirebaseTimestamp, db } from '../firebase/index'
import { ActionType, inputValidateSignUp, signIn } from '../redux/actions'
import { InputSignUpType } from '../redux/initialState'
import styled from 'styled-components'
import { TextInput } from '../UIkit/TextInput'
import { PrimaryButton } from '../UIkit/PrimaryButton'
import { ErrorBox } from '../UIkit/ErrorBox'

type Props = {
  validation: InputSignUpType
  dispatch: React.Dispatch<ActionType>
}

export const SignUp: React.FC<Props> = (props) => {
  const history = useHistory()
  const [userName, setUserName]: [
      string,
      React.Dispatch<React.SetStateAction<string>>
    ] = useState<string>(''),
    [email, setEmail]: [
      string,
      React.Dispatch<React.SetStateAction<string>>
    ] = useState<string>(''),
    [password, setPassword]: [
      string,
      React.Dispatch<React.SetStateAction<string>>
    ] = useState<string>(''),
    [confirmPassword, setConfirmPassword]: [
      string,
      React.Dispatch<React.SetStateAction<string>>
    ] = useState<string>('')

  const inputUserName = useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setUserName(event.target.value)
    },
    [setUserName]
  )

  return (
    <Container>
      <h1> Sign Up</h1>
      {props.validation.top.error && (
        <ErrorBox msg={props.validation.top.message}></ErrorBox>
      )}
      <TextInput
        errorCondition={props.validation.userName.error}
        helperText={props.validation.userName.message}
        fullWidth={false}
        width={320}
        label={'User Name'}
        multiline={false}
        required={true}
        rows={1}
        value={userName}
        type={'text'}
        onChange={inputUserName}
      />
      <TextInput
        errorCondition={props.validation.email.error}
        helperText={props.validation.email.message}
        fullWidth={false}
        width={320}
        label={'Email Address'}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={'email'}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setEmail(e.target.value)
        }
      />
      <TextInput
        errorCondition={props.validation.password.error}
        helperText={props.validation.password.message}
        fullWidth={false}
        width={320}
        label={'Password (at least 6 characters)'}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={'password'}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setPassword(e.target.value)
        }
      />
      <TextInput
        errorCondition={props.validation.confirmPassword.error}
        helperText={props.validation.confirmPassword.message}
        fullWidth={false}
        width={320}
        label={'Confirm Password (at least 6 characters)'}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={'password'}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setConfirmPassword(e.target.value)
        }
      />
      <ButtonArea>
        <PrimaryButton
          label={'Create  Account'}
          width={180}
          onClick={() =>
            authSignUp(
              userName,
              email,
              password,
              confirmPassword,
              history,
              props.dispatch
            )
          }
        />
      </ButtonArea>
    </Container>
  )
}

const authSignUp = async (
  userName: string,
  email: string,
  password: string,
  confirmPassword: string,
  history: any,
  dispatch: React.Dispatch<ActionType>
) => {
  // console.log('authSignUp');
  // Validation
  if (
    userName === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === ''
  ) {
    dispatch(
      inputValidateSignUp('top', 'Please fill out the required informations.')
    )
    return
  }
  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    dispatch(inputValidateSignUp('email', 'Invalid Email Address format.'))
    return
  }
  if (password.length < 6) {
    dispatch(inputValidateSignUp('password', 'At least 6 characters'))
    return
  }
  if (
    !password.match(/(a-zA-Z0-9~`!@#\$%\^&\*\(\)-_\+=\|\}\]\{\["':;\?\/>\.<,)*/)
  ) {
    dispatch(inputValidateSignUp('password', 'Invalid Email Address format.'))
    return
  }
  if (password !== confirmPassword) {
    dispatch(inputValidateSignUp('confirmPassword', 'Password does not match.'))
    return
  }

  // Sign Up
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // console.log('Response auth Sign Up');
      // console.log('result: ', result);
      const user = result.user
      if (user) {
        const uid = user.uid
        const timestamp = FirebaseTimestamp.now()

        // DB
        const dbDoc = db.collection('User').doc(uid)

        // DB data insert
        dbDoc.set({
          userName: userName,
          timestamp: timestamp,
        })

        // transition to Marubatsu page.
        history.push('/marubatsu')

        dispatch(signIn(userName))
      }
    })
    .catch((error) => {
      console.log('Sign Up error: ', error)
      if (error.code == 'auth/email-already-in-use') {
        dispatch(
          inputValidateSignUp(
            'email',
            'The email address is already in use by another account.'
          )
        )
      } else if (error.code == 'auth/invalid-email') {
        console.log('error: ', error)
        dispatch(inputValidateSignUp('email', 'Invalid email address.'))
      } else if (error.code == 'auth/invalid-password') {
        console.log('error: ', error)
        dispatch(inputValidateSignUp('password', 'Invalid password.'))
      } else if (error.code == 'auth/invalid-argument') {
        console.log('error: ', error)
        dispatch(inputValidateSignUp('top', 'Invalid input.'))
      } else {
        dispatch(
          inputValidateSignUp(
            'top',
            'Sorry, Server Error. please try again later.'
          )
        )
      }
      return
    })
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`
const ButtonArea = styled.div`
  margin: 30px auto;
`
