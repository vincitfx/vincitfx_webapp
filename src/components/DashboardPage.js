
import { useParams  } from "react-router-dom";


function DashboardPage() {
    let { clientGuid } = useParams();
    

    return(
        <h1>Welcome to VincitFX {clientGuid}</h1>
    )
}

export default DashboardPage