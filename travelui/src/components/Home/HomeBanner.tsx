import React, { useState } from "react";
import "../styles.css";
import Logo from "../../assets/images/Logo.png";
import {Container, StyledSearchWhite, RowContainer} from "../reusable/Styles";
import { BorderedButton } from "../reusable/Button";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
    onClick?: React.MouseEventHandler
}

const HomeBanner: React.FC<Props> = ({ onClick }) => {
    const [destination, setDestination] = useState<string>("");
    const onSearch = (destination: string) => {
        setDestination(destination);
        console.log(destination);
    }

    return (
          <header >
              {/*<div className="head-image">*/}
              {/*    <img src={Cover} height={"100%"} width={"100%"} alt="" />*/}
              {/*</div>*/}

              <div className="text-on-image-left">
                  <img src={Logo} width={"60vw"} alt="" />
                  <h3 className="title">Too busy to plan your trips?</h3>
                  <h3 className="subtitle">
                      Grab ‘n’ go an itinerary for your next destination with us!
                  </h3>
                  <BorderedButton onClick={onClick}>Explore</BorderedButton>
              </div>
              <div className="text-on-image-right">
                  <Container align={"flex-end"}>
                      <StyledSearchWhite
                        width={'90%'}
                        prefix={<SearchOutlined />}
                        placeholder="Search Destinations"
                        value={destination === "" ? undefined : destination}
                        onChange={(e: { target: { value: any } }) =>
                          onSearch(e.target.value)
                        }
                        allowClear
                      />
                      <RowContainer justify={'flex-end'}>
                          <div className='double-input' >
                              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                  <input type='number'
                                         defaultValue={0}
                                         min={0}
                                         max={14}
                                    // placeholder='Number of days'
                                         style={{ width: '2.5rem'}}/>
                                  <div>
                                      days
                                  </div>
                                  <div style={{ fontSize: 'calc(14px + .4vw)', marginRight: '0.6vw', marginLeft: '0.6vw'}}>
                                      |
                                  </div>
                              </div>
                              <select style={{ width: '8.5rem'}}>
                                  <option value="spring">Spring</option>
                                  <option value="summer">Summer</option>
                                  <option value="autumn">Autumn</option>
                                  <option value="winter">Winter</option>
                              </select>
                          </div>
                          <BorderedButton margintop={'0rem'}>Let's Go</BorderedButton>
                      </RowContainer>
                  </Container>
              </div>
          </header>
    );
};

export default HomeBanner;
