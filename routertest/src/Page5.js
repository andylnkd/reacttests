import React from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';

function Page5(props){

  const {type, type1} = useParams();
  return(

    <div>
      <h1>title of Page 5</h1>
      <hr/>
      <Link to={"/page4"}> Move to previous page based on {type}</Link>
    </div>

  );
}

export default Page5;