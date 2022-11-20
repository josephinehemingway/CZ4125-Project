import React, {useEffect, useState } from 'react';
import {HorizontalScroll, RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
import GuidesCard from "../reusable/Cards/GuidesCard";
import {Spin} from "antd";


type Props = {
    tabName: string;
    destinationName: string;
    countryImgUrl: string;
};

const Guides: React.FC<Props>= ({ tabName, destinationName, countryImgUrl }) => {
    interface TipsApi{
        title: string,
        url: string,
    }

    const [data, setdata] = useState<TipsApi[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/traveltips-api?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName]);

    const guideCardsArray = data.map((d, index) => {
        console.log(d.title)
        return (
            <a key={index}
               href={d.url}
               target="_blank"
               rel="noopener noreferrer">
                <GuidesCard
                    imgurl={countryImgUrl}
                    tipsTitle={d.title}
                />
            </a>);
    });

    return (
        <div style={{marginBottom: '3rem'}}>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
                marginbottom={'1rem'}
            >
                <StyledSectionTitle>
                    Explore {tabName} in {destinationName}
                </StyledSectionTitle>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll height={'100%'}>
                {loading ?
                    <div style={{ width: '100%',
                        height: '50%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <Spin tip="Loading..." />
                    </div>
                    : guideCardsArray
                }
            </HorizontalScroll>

        </div>
    );
};

export default Guides;