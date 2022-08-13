import React from 'react';
import {Link} from 'react-router-dom';

function Page4(props){

return(

<div>
   <h1>
     Title of Page 4
   </h1>
   <hr />
     <Link to={{pathname: "/page5/type/type1"}}
> move to next page (Page 5 with Param 'Heyy') </Link>
   </div>


);

}

export default Page4;