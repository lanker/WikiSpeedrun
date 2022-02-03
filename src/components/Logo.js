import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGameIsRunning } from "../redux/settingsSlice";

function Logo() {
  const gameIsRunning = useSelector(selectGameIsRunning);

  return (
    <Heading>
      <StyledLink to={gameIsRunning ? "#" : "/settings"}>
        <Image
          src={window.location.origin + "/wiki-speed-logo.png"}
          alt="Wikipedia Speedrun"
          width={120}
          height={154}
        />
      </StyledLink>
    </Heading>
  );
}

const Heading = styled.h1`
  align-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  min-width: 120px;
`;

export default Logo;
