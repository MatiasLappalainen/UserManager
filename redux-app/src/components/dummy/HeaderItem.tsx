import * as React from 'react';

interface counterProps {
    count: any,
    onIncrement: any,
    onDecrement: any

}

export const HeaderItem: React.SFC<counterProps> = ({count, onIncrement, onDecrement}) => {
    return (
        <div>
          <p>You've clicked {count} times</p>

          {' '}

          <button onClick={onIncrement}>Inc</button>

          {' '}

          <button onClick={onDecrement}>Dec</button>
          
        </div>
    );
}




