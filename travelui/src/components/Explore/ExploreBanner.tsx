import React, { useState } from "react";
import "../styles.css";
import Logo from "../../assets/images/Logo.png";
import Plane from "../../assets/images/Plane.png";
import { StyledSearchWhite, Container } from "../reusable/Styles";
import { Link } from "react-router-dom";

type Props = {
  coverUrl: string;
  destinationName: string;
};

const ExploreBanner: React.FC<Props> = ({ coverUrl, destinationName }) => {
  const [destination, setDestination] = useState<string>("");
  const onSearch = (destination: string) => {
    setDestination(destination);
    console.log(destination);
  };

  return (
    <>
      <div className="head-image">
        {/*<img className="head-image" src={coverUrl} height={"100%"} width={"100%"} alt="" />*/}
      </div>

      <div className="text-on-image-center">
        <Link to="/">
          <img src={Logo} width={"60vw"} alt="" />
        </Link>
        <h3 className="title2">Explore {destinationName}</h3>
        <Container width={"50%"}>
          <StyledSearchWhite
            width={"90%"}
            suffix={<img src={Plane} height={"20rem"} alt="" />}
            placeholder="Search Destinations"
            value={destination === "" ? undefined : destination}
            onChange={(e: { target: { value: any } }) =>
              onSearch(e.target.value)
            }
            allowClear
          />
        </Container>
      </div>
    </>
  );
};

export default ExploreBanner;
