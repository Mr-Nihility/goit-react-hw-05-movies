import {
  NavLinkNotFound,
  DivStyled,
  TextStyled,
} from 'components/BackBTN/BackBTN.styled';

export default function NotFound() {
  return (
    <DivStyled>
      <div>
        <img
          src="https://2fan.ru/upload/000/u1/3/7/805f88fd.jpg"
          alt="not found"
          width="500"
        />
        <TextStyled>
          Oooops, page not found
          <NavLinkNotFound to="/goit-react-hw-05-movies/">
            to Home
          </NavLinkNotFound>
        </TextStyled>
      </div>
    </DivStyled>
  );
}
