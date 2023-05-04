import React from 'react';
import './styles.css';
import Card from './Card';
import plans from './plans';

const App = () => {
  return (
    <div className="card-container">
      {plans.map(plan => (
        <Card
          key={plan.planName}
          planName={plan.planName}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
}

export default App;
