import * as React from 'react';

interface fetchProps {
  
    fetchUser?: any,
    fetchDelete?: any
    
}


export const FetchButton: React.SFC<fetchProps> = ({fetchUser, fetchDelete}) => {

    return (
        <div>
          <button onClick={fetchUser} className="btn btn-primary">click</button>

        </div>
    );
}

