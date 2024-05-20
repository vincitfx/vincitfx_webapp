import DashboardHeaderPage from "./DashboardHeaderPage"; 
import DashboardSidePage from "./DashboardSidePage";

function MyProfilePage() {
    
    return(
        <div>
            <DashboardHeaderPage></DashboardHeaderPage>
            <div className="dashboard-main-div">
                <p>My Profile Page</p>
            </div>
            <DashboardSidePage></DashboardSidePage>
        </div>
    )
}

export default MyProfilePage