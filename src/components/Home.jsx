import React from 'react';
import Box from './Box';
import Clients from './Clients';
import DoughnutChart from './DoughnutChart';

const Home = (props) => {
  const { data } = props;
  return (
    <div className="h-screen p-4">
      <div className="h-full grid grid-rows-2">
        <div className="flex flex-row">
          <div className="basis-full sm:basis-1/6">
            <DoughnutChart data={data} />
          </div>
          <div className="basis-full sm:basis-1/6">
            <div className="h-full grid grid-rows-2">
              <Box message="retained" data={data} />
              <Box message="pending" data={data} />
            </div>
          </div>
          <div id="clients" className="basis-full sm:basis-1/3">
            <Clients data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
