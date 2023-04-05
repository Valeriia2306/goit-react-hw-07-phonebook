import styled from '@emotion/styled';
const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  width: 370px;
`;
const Button = styled.button`
  width: 100px;
  height: 28px;
  border:none:
  border-radius: 5px;
  color: hotpink;
`;
const ContactName = styled.p`
  display: flex;
  gap: 5px;
  justify-content: space-around;
  width: 275px;
  text-align: center;
  font-size: 20px;
  color: white;
`;
export { ContactItem, ContactName, Button };
