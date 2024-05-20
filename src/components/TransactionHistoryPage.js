
import DashboardHeaderPage from "./DashboardHeaderPage";
import DashboardSidePage from "./DashboardSidePage";

function TransactionHistoryPage() {

    return(
        <div>
            <DashboardHeaderPage></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>Transaction history Page</p>
            </div>
            <DashboardSidePage></DashboardSidePage>
        </div>
    )
}

export default TransactionHistoryPage