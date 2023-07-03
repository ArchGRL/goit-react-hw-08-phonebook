import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  margin: 40px auto;
  border: 1.5px solid #7d7d3f;
  border-radius: 10px;
`
export const Label = styled.label`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  font-weight: 500;
  font-size: 24px;
  width: 500px;
  height: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`
export const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  min-height: 30px;
  font-weight: 600;
  font-size: 16px;
  color: #f8fafb;
  background-color: #7d7d3f;
  border-width: 1px;
  border-radius: 4px;
  border-style: inset;
  border-color: #7d7d3f;
  &:hover {
    cursor: pointer;
    background-color: #213804;
    border-color: #213804;
  }
`
