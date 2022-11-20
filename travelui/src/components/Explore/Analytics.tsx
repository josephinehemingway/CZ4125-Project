import React, {useEffect, useState} from 'react';
import AirfareTicketCard from "../reusable/Cards/AirfareCard";
import {Spin} from "antd";
import {HorizontalScroll, RowContainer, StyledLink, StyledAnalyticsSubheading} from "../reusable/Styles";

type Props = {
    destinationName: string
}

const AnalyticsSection: React.FC<Props> = ({destinationName}) => {
    interface AirfareTicketApi{
        Id: string,
        City: string,
        Country: string,
        Currency: string,
        Price: number,
        Class: string,
        ImageUrl: string,
    }

    const [loading, setLoading] = useState<Boolean>(true)
    const [data, setdata] = useState<AirfareTicketApi[]>([])


    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/airfareprice-api?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName]);


    const airfarePriceCardsArray = data.map((d) => (
        <AirfareTicketCard
            imgurl={d.ImageUrl}
            city={d.City}
            country={d.Country}
            price={d.Price}
            flightClass={d.Class}
            currency={d.Currency}
        />
    ));


    return (
        <div className='analytics-container'>
            <div className='plotly-container'>
                Traveller Plot
            </div>
            <div className='airfare-container'>
                <RowContainer
                    height={"100%"}
                    align="center"
                    justify={"space-between"}
                >
                    <StyledAnalyticsSubheading marginleft={'1rem'}>
                        Flight Deals
                    </StyledAnalyticsSubheading>
                    <StyledLink
                        href="https://www.singaporeair.com/en_UK/sg/special-offers/flight-from-Singapore/"
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
                        : airfarePriceCardsArray
                    }
                </HorizontalScroll>
            </div>
        </div>
    );
};

export default AnalyticsSection;