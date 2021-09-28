import React ,{useState}from 'react'
import { Pagination ,Button} from 'semantic-ui-react'



const PaginationCreator = (props) => {

  
 const {custom,value}=props
 console.log("value is "+value);
 console.log(custom)


const [state, setstate] = useState(custom[3])
const [laststate, setlaststate] = useState(custom[12])
console.log(state)
 
 
  
  return(



    
    <React.Fragment>
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={state}
    lastItem={laststate}
    siblingRange={1}
    totalPages={10}
  />
  </React.Fragment>
  );
  }

export default PaginationCreator