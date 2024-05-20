
import DashboardHeaderPage from "./DashboardHeaderPage";
import DashboardSidePage from "./DashboardSidePage";

function PortfolioManagementPage() {

    return(
        <div>
            <DashboardHeaderPage></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>Portfolio management Page</p>
            </div>
            <DashboardSidePage></DashboardSidePage>
        </div>
    )
}

export default PortfolioManagementPage