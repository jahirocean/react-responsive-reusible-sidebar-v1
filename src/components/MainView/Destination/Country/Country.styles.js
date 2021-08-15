import styled from "@emotion/styled";

export const CountryContainer = styled.div`
  width: 80%;
  height: 200px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CountryImages = styled.img`
  width: 80%;
  height: 200px;
  background-size: cover;
  background-image: url(${(p) => p.img});
  background-repeat: no-repeat;
  background-position: center center;
`;
export const CountryDescription = styled.div`
  width: 45%;
`;
