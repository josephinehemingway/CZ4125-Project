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
              type: 'bar',
            },
          ]}
          layout={ {title: 'Traveller Plot', plot_bgcolor: 'rgba(0,0,0,0)', 
                  margin:{'l': 20, 'r': 20, 't': 20, 'b': 20},
                  width: 500,
                  height: 300} } />

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