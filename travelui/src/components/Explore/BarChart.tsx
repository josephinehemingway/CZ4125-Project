import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import {Spin} from "antd";

type Props = {
    destinationName: string;
};


const BarChart: React.FC<Props>= (destinationName) =>{
  interface PassengerApi{
    Year: number[],
    Passengers: number[]
}
  const [data, setdata] = useState<PassengerApi[]>([])
  const [loading, setLoading] = useState<Boolean>(true)
    useEffect(() => {
      setLoading(true);
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch(`/passengers-api?destination=${destinationName.destinationName}`).then((res) =>
          res.json().then((data) => {
              // Setting a data from api
              setdata(data);
              setLoading(false);
              // console.log(data)
              console.log(destinationName)
          })
      );
    }, [destinationName]);
    const passengerGraph = data.map((d) =>{
      return(
        <Plot
          data={[
            {
              x: d.Year,
              y: d.Passengers,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: d.Year, y: d.Passengers},
          ]}
          layout={ {title: 'Traveller Plot'} } />

      )});

    return (
      <div className='explore-subgallery'>
        {loading ?
            <div style={{ width: '100%',
                height: '50%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <Spin tip="Loading..." />
            </div>
            : passengerGraph
        }
    </div>
      
    );
  
}
export default BarChart