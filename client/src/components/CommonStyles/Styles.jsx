import styled from "styled-components";

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const QRImg = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 10px;
`
export const HalfScreens = styled(ColumnFlex)`
  flex-direction: row;

`
export const VerticalBar = styled.div`
  background-color: white;
  height: 70%;
  width: 3px;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const CenterText = styled.div`
  font-size: 2.5rem;
  padding: 1rem;
  background-color: #042A2B;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0;
`
export const Form = styled(ColumnFlex)`
  height: 50%;
  min-height: 350px;
  width: 400px;
  background-color: #CBBEB3;
  border-radius: 10px;
`
export const Label = styled.label`
  font-size: 1.5rem;
`
export const Input = styled.input`
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 10px;
  margin: 5px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
`
export const ForgotButton = styled.button`
  background: none;
  border: none;
  color: blue;
  align-self: end;
  margin-right: 50px;
  cursor: pointer;
`