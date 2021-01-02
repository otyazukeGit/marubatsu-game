import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { PrimaryButton } from './PrimaryButton'

type PaneType = {
  finish: boolean
  msg: string
  reset: () => void
}

export const Pane = (props: PaneType): ReactElement => {
  return (
    <BasePane finish={props.finish} className="BasePane">
      <FrontPane className="FrontPane">
        <Message className="Message">{props.msg}</Message>
      </FrontPane>
      <ButtonArea>
        <PrimaryButton
          label={'Retry'}
          width={150}
          onClick={() => props.reset()}
        />
      </ButtonArea>
    </BasePane>
  )
}

const BasePane = styled.div<{ finish: boolean }>`
  display: ${(props) => (props.finish ? 'block' : 'none')};
  position: relative;
  margin: 0;
`
const FrontPane = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 80vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  margin: 0;
`
const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: green;
  font-size: 32px;
  color: white;
`
const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 400px;
  margin: 30px auto;
`
