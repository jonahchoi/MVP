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