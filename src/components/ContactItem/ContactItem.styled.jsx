import styled from '@emotion/styled';
const ContactItem = styled.li`
  display: flex;
  align-items: center;

  // justify-content: space-around;
  justify-content: center;
  margin-right: 10px;

  width: 100%;
  // padding: 15px 10px 15px 10px;
  backgroud-color: white;
  color: #ffff;
  border-radius: 15px;
  gap: 10px;
  font-size: 18px;
`;
const Button = styled.button`
  width: 100px;
  height: 28px;

  border: none;
  border-radius: 5px;
  color: hotpink;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
  align-items: center;
`;
const Icons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: grey;
`;
const ContactName = styled.p`
  color: white;

  display: flex;
  min-width: 190px;
  max-width: 220px;
  margin-left: 0px;
`;
export { ContactItem, ContactName, Button, Icons, Wrapper };
