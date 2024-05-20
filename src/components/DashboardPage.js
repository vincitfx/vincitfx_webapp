
import DashboardHeaderPage from "./DashboardHeaderPage";
import '../css/DashboardPage.css'
import DashboardSidePage from "./DashboardSidePage";

function DashboardPage() {

    return(
        <div>
            <DashboardHeaderPage></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>Dashboard Page</p>
            </div>
            <DashboardSidePage></DashboardSidePage>
        </div>
    )
}

export default DashboardPage