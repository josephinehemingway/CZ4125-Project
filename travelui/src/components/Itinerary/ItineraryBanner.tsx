import React, { useState } from "react";
import "../styles.css";
import Logo from "../../assets/images/Logo.png";
import {
    Container,
    StyledHeading,
    StyledSubtitle, StyledDoubleInput, StyledInput
} from "../reusable/Styles";
import {Link} from "react-router-dom";
import Plane from "../../assets/images/Plane.png";

type Props = {
    coverUrl: string;
    destinationName: string;
    seasonSelected: string;
    durationSelected: number;
};

const ItineraryBanner: React.FC<Props> = ({ coverUrl, destinationName, durationSelected, seasonSelected }) => {
    const [destination, setDestination] = useState<string>(destinationName);
    const [duration, setDuration] = useState<number>(durationSelected);
    const [season, setSeason] = useState<string>(seasonSelected);

    return (
        <>
            <div className="head-image">
                {/*<img className="head-image" src={coverUrl} height={"100%"} width={"100%"} alt="" />*/}
            </div>

            <div className="text-on-image-center">
                <Link to="/">
                    <img src={Logo} width={"60vw"} alt="" />
                </Link>
                <StyledHeading>Grab 'n' Go</StyledHeading>
                <StyledSubtitle marginbottom={'2rem'}>an itinerary for your next destination</StyledSubtitle>
                <Container width={"50%"}>
                    <StyledDoubleInput paddingleft={'0'} width={'100%'}>
                        <StyledInput
                            allowClear
                            defaultValue={destination}
                            style={{ width: "75%" }}
                            onChange={(e: any) => {setDestination(e.target.value)}}
                        />
                        <div
                            style={{
                                fontSize: "calc(14px + .4vw)",
                                marginRight: "0.6vw",
                                marginLeft: "0.6vw",
                            }}
                        >
                            |
                        </div>
                        <input
                            type="number"
                            defaultValue={duration}
                            min={0}
                            max={14}
                            style={{ width: "2.5rem" }}
                            onChange={(e) => {setDuration(parseInt(e.target.value))}}
                        />
                        { duration === 1 ? <div>day</div> : <div>days</div>}
                        <div
                            style={{
                                fontSize: "calc(14px + .4vw)",
                                marginRight: "0.6vw",
                                marginLeft: "0.6vw",
                            }}
                        >
                            |
                        </div>
                        <select
                            defaultValue={season}
                            onChange= {(e) => {setSeason(e.target.value)}}
                            style={{ width: "8.5rem", marginRight: '2rem'}}>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                        </select>
                        <Link to={`/itinerary/${destination}-${season}-${duration}`}>
                            <img src={Plane} height={"22rem"} alt=""/>
                        </Link>
                    </StyledDoubleInput>
                </Container>
            </div>
        </>
    );
};

export default ItineraryBanner;
