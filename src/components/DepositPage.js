
import DashboardHeaderPage from "./DashboardHeaderPage";
import DashboardSidePage from "./DashboardSidePage";

function DepositPage() {

    return(
        <div>
            <DashboardHeaderPage></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>Deposit Page</p>
            </div>
            <DashboardSidePage></DashboardSidePage>
        </div>
    )
}

export default DepositPage