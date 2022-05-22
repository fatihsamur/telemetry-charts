import React from 'react';

const Box = (props) => {
  const { message } = props;
  const { data } = props;
  console.log(data);
  const retained = data.length > 0 ? data[data.length - 1].retainedMessages : 0;
  const pending = data.length > 0 ? data[data.length - 1].pendingMessages : 0;
  console.log(retained, pending);

  return (
    <>
      {message === 'retained' ? (
        <div className="h-full grid grid-rows-2">
          <div className="text-center">
            <h2>Retained Messages</h2>
          </div>
          <div className="text-center">
            <h1 className="text-3xl">{retained}</h1>
          </div>
        </div>
      ) : (
        <div className="h-full grid grid-rows-2">
          <div className="text-center">
            <h2>Pending Messages</h2>
          </div>
          <div className="text-center">
            <h1 className="text-3xl">{pending}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Box;
