import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

export const Marubatsu:React.FC = () => {
	const selectedItems = [1,0,0 , 0,1,0 , 0,0,1]
	const history = useHistory()
	React.useEffect(
		() => {
			// No Auth
			history.push('/')
		}
		, []
	)
	return (
		<Container>
			<h1>Marubatsu Game</h1>
			<Area>
				{selectedItems.map((item, index) => (
					<Box key={index}>{item}</Box>
				))}
			</Area>
		</Container>
	)
}

const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
`
const Area = styled.div`
	display: grid;
	grid-template:
	" area area area" 50px
	" area area area" 50px
	" area area area" 50px
	/ 50px 50px 50px
	;
	/* grid-gap: 1px; */
`
const Box = styled.div`
	display: flex;
	border: solid 1px #2792c3;
	justify-content: center;
	align-items: center;
`
