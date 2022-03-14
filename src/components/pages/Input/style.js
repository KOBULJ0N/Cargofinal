import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4% 0;
  align-items: center;
  width: 100%;
	@media only screen and (max-width: 1000px) {
    padding: 20 0;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  color: var(--colorText);
  margin-bottom: 51px;
`;

export const Form = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;


	@media only screen and (max-width: 1000px) {
    text-align: center;
  }




`;

Form.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 19.036px;
  line-height: 29px;
  color: #666666;
  margin-top: ${({ mt }) => mt && `${mt}px`};
`;

export const Input = styled.input`
  width: 299.44px;
  height: 44.55px;
  border: 1.657px solid #47abd8;
  padding: 10px 15px;
  box-sizing: border-box;
  margin-right: ${({ mr }) => mr && '22px'};
  :focus {
    outline: none;
  }
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 15.575px;
    line-height: 23px;

    color: #adacae;
  }

	@media only screen and (max-width: 1000px) {
    margin: 15px auto;
  }



`;

Input.Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid violet; */
  align-items: center;
  margin-top: 20px;
  margin: 0 auto;
`;

export const Textarea = styled.textarea`
	width: 620.77px;
	height: 103.95px;
	border: 1.657px solid #47abd8;
	padding: 10px 15px;
	box-sizing: border-box;
	:focus {
		outline: none;
	}
	::placeholder {
		font-style: normal;
		font-weight: normal;
		font-size: 15.575px;
		line-height: 23px;

		color: #adacae;
	}
	@media only screen and (max-width: 1000px) {
		width: 100%;
	}
`;

export const Button = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 50.3px;
  background-color: #47abd8;

  font-style: normal;
  font-weight: normal;
  font-size: 19.036px;
  line-height: 29px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 23px;
  cursor: pointer;

  transition: 0.3s;

  :active {
    transform: scale(0.97);
  }
`;
export const GoogleMapWrap = styled.div`
  width: 80%;
  height: 890px;
  margin-top: 100px;
`;
