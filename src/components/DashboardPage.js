
import { useParams  } from "react-router-dom";
import DashboardHeaderPage from "./DashboardHeaderPage";
import '../css/DashboardPage.css'

function DashboardPage() {
    let { clientGuid } = useParams();
    

    return(
        <div>
            <DashboardHeaderPage guid={clientGuid}></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>Anish Kumar</p>
            </div>
        </div>
    )
}

export default DashboardPage