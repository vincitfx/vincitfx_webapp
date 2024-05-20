
import DashboardHeaderPage from "./DashboardHeaderPage";
import DashboardSidePage from "./DashboardSidePage";

function WithdrawPage() {

    return(
        <div>
            <DashboardHeaderPage></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>Withdraw Page</p>
            </div>
            <DashboardSidePage></DashboardSidePage>
        </div>
    )
}

export default WithdrawPage