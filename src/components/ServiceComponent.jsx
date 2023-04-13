import React from 'react';

function ServiceComponent({ group, name, cost }) {
  return (
    <div>
      <h3>{group}</h3>
      <div className="serviceList">
        <span id="serviceName">{name}</span>
        <span id="serviceCost">{cost}</span>
      </div>
    </div>
  );
}

export default ServiceComponent;
