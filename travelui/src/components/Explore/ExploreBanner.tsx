import React, { useState } from "react";
import "../styles.css";
import Logo from "../../assets/images/Logo.png";
import Plane from "../../assets/images/Plane.png";
import {
    StyledInputSearch,
    Container,
    StyledHeading,
} from "../reusable/Styles";
import { Link } from "react-router-dom";
import {scrollToTop} from "../../utils/helperfunctions";

type Props = {
    coverUrl: string;
    destinationName: string;
};

const ExploreBanner: React.FC<Props> = ({ coverUrl, destinationName }) => {
    const [destination, setDestination] = useState<string>("");

    const onSearch = () => {
        console.log(destination);
        scrollToTop()
    };

    return (
        <>
            <div className="head-image">
                <img className="head-image"
                     src={coverUrl}
                     height={"100%"}
                     width={"100%"} alt="" />
            </div>

            <div className="text-on-image-center">
                <Link to="/">
                    <img src={Logo} width={"60vw"} alt="" />
                </Link>
                <StyledHeading marginbottom={'1rem'}>Explore {destinationName}</StyledHeading>
                <Container width={"50%"}>
                    <StyledInputSearch
                        col={"white"}
                        width={"90%"}
                        suffix={
                        <Link to={`/explore/${destination}`} >
                            <img src={Plane} height={"20rem"} alt="" onClick={onSearch}/>
                        </Link>
                    }
                        placeholder="Search Destinations"
                        value={destination === "" ? undefined : destination}
                        onChange={(e: { target: { value: any } }) => setDestination(e.target.value)}
                        allowClear
                    />
                </Container>
            </div>
        </>
    );
};

export default ExploreBanner;
