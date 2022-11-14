import React, { useState } from "react";
import "../styles.css";
import {
    Container,
    StyledInputSearch,
    RowContainer,
    StyledDoubleInput,
    StyledTitle,
    StyledSubtitle
} from "../reusable/Styles";
import { BorderedButton } from "../reusable/Button";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import Plane from "../../assets/images/Plane.png";

type Props = {
    onClickExplore?: React.MouseEventHandler;
};

const HomeBanner: React.FC<Props> = ({ onClickExplore}) => {
    const [destination, setDestination] = useState<string>("");
    const [duration, setDuration] = useState<number>(1);
    const [season, setSeason] = useState<string>("Summer");

    let navigate = useNavigate();

    const onClickItinerary = () =>{
        let path = `itinerary/${destination}-${season}-${duration}`;
        navigate(path);
    }

    const onSearch = () => {
        console.log(destination);
        console.log(season)
        console.log(duration)
        onClickItinerary()
    };

    return (
        <header>
            <div className="text-on-image-left">
                <Link to="/">
                    <img src={Logo} width={"60vw"} alt="" />
                </Link>
                <StyledTitle>Too busy to plan your trips?</StyledTitle>
                <StyledSubtitle>
                    Grab ‘n’ go an itinerary for your next destination with us!
                </StyledSubtitle>
                <BorderedButton onClick={onClickExplore}>Explore</BorderedButton>
            </div>
            <div className="text-on-image-right">
                <Container align={"flex-end"}>
                    <StyledInputSearch
                        col={'white'}
                        nohover
                        suffix={<img src={Plane} height={"20rem"} alt="" />}
                        width={"90%"}
                        placeholder="Search Destinations"
                        value={destination === "" ? undefined : destination}
                        onChange={(e: { target: { value: any } }) =>
                            setDestination(e.target.value)
                        }
                        allowClear
                    />
                    <RowContainer justify={"flex-end"}>
                        <StyledDoubleInput>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
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
                            </div>
                            <select
                                defaultValue={season}
                                onChange= {(e) => {setSeason(e.target.value)}}
                                style={{ width: "8.5rem" }}>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </StyledDoubleInput>
                        <BorderedButton
                            onClick={onSearch}
                            margintop={"0rem"}>
                            Let's Go
                        </BorderedButton>
                    </RowContainer>
                </Container>
            </div>
        </header>
    );
};

export default HomeBanner;
