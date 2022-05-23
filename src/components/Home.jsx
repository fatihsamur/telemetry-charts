import React from 'react';
import Box from './Box';
import Bytes from './Bytes';
import Clients from './Clients';
import DoughnutChart from './DoughnutChart';
import Messages from './Messages';

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
        <div className="flex flex-row">
          <div id="clients" className="basis-full sm:basis-1/3">
            <Messages data={data} />
          </div>
          <div id="clients" className=" basis-full sm:basis-1/3">
            <Bytes data={data} />
          </div>
          <div id="clients" className="basis-full sm:basis-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
