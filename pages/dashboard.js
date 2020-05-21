import Head from 'next/head'
import { getWindowType } from "../utils/screenMgr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faUsers, faEye, faChartLine, faBell, faQuestionCircle, faHome, faInbox } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
    let view;
    let windowType = getWindowType() || "pc"
    if (typeof window !== "undefined") {
        console.log(`window type: ${windowType}`)
    }
    if (windowType === "sm_phone" || windowType === "bg_phone") {
        view = <div><SmallScreen /></div>
    }
    else {
        view = <div><LargeScreen /></div>
    }
    <>
        <Head>
            <title>Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{
            backgroundColor: "rgba(200,200,60,0.5)",
            width: "100%", height: "100%"
        }}>
            <p>Testing...</p>
        </div>
    </>
    return view;
}
function SmallScreen(params) {
    return <div>

    </div>
}

function LargeScreen(params) {
    return <div>
        <TopNav />
        <ViewProper /> </div>
}
function TopNav() {
    return <div style={{
        height: "30px", width: "100%",
        backgroundColor: "black",
        display: "flexbox",
        flexDirection: "row",
        color: "white"
    }}>
        <div style={{
            position: "absolute", left: 0, paddingLeft: "10px"
        }}>
            <i title="Home" style={{ marginRight: "10px" }}>
                <FontAwesomeIcon icon={faHome} /></i></div>
        <div style={{
            position: "absolute", right: 10
        }}>
            <i title="Notifications" style={{ marginRight: "10px" }}>
                <FontAwesomeIcon icon={faBell} /></i>
            <i title="Help">
                <FontAwesomeIcon icon={faQuestionCircle} /></i></div>
    </div>

}
function ViewProper() {
    return <div style={{
        backgroundColor: "gray", width: "100%",
        position: "absolute", top: 30, bottom: 0, right: 0,
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%"
        }}>
            <SideNav />
            <MessagesNav />
<AnalyticsAndNews/>
        </div>
    </div>
}

function SideNav() {
    return <div style={{
        width: "30px", height: "100%",
        backgroundColor: "black",
        color: "white"
    }}>
        <div style={{ paddingLeft: "5px" }}>
            <i title="Inbox">
                <FontAwesomeIcon icon={faInbox} /></i>
        </div>
        <div style={{ paddingLeft: "5px" }}>
            <i title="Reporting">
                <FontAwesomeIcon icon={faChartLine} /></i>
        </div>
    </div>

}

function MessagesNav() {
    return <div style={{
        width: "100px", height: "100%",
        backgroundColor: "gray", display: "flexbox", flexDirection: "column"
    }}>
        <div style={{ width: "98%", height: "48%", }}>
            <h6>Incoming</h6>
        </div>
        <div style={{ width: "98%", height: "48%", }}>
            <h6>Direct Messages</h6>
        </div>
    </div>

}
function AnalyticsAndNews() {
    
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        height: "90%"
    }}>
        <div style={{
            width: "98%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            height: "46%"
        }}>
            <div style={{
                width: "48%",
                backgroundColor: "white",
                padding: 0,
                paddingLeft: "5px",
                paddingRight: "5px",
            }}>
                <h3>Live Chats</h3>

            </div>
            <div
                style={{
                    width: "48%",
                    backgroundColor: "rgb(230,230,230)",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "space-around",
                    justifyContent: "space-around"
                }}>
                <div
                    style={{ width: "45%", height: "45%", backgroundColor: "white", paddingLeft: "5px" }}>
                    <h6>
                        <i style={{ color: "green" }}>
                            <FontAwesomeIcon icon={faUsers} />
                        </i> Vistors</h6>
                </div>
                <div style={{ width: "45%", height: "45%", backgroundColor: "white", paddingLeft: "5px" }}>
                    <h6>
                        <i style={{ color: "green" }}>
                            <FontAwesomeIcon icon={faComments} />
                        </i> Chats</h6>
                </div>
                <div style={{ width: "45%", height: "45%", backgroundColor: "white", paddingLeft: "5px" }}>
                    <h6>
                        <i style={{ color: "green" }}>
                            <FontAwesomeIcon icon={faEye} />
                        </i> Page Views</h6></div>
                <div style={{ width: "45%", height: "45%", backgroundColor: "white", paddingLeft: "5px" }}>
                    <h6>
                        <i style={{ color: "green" }}>
                            <FontAwesomeIcon icon={faChartLine} />
                        </i> Reporting</h6></div>
            </div>
        </div>

        <div style={{
            display: "flex",
            flexDirection: "row",
            height: "46%",
            flexWrap: "wrap",
            width: "98%",
            justifyContent: "space-around"
        }}>
            <div style={{ width: "48%", backgroundColor: "white" }}>
            </div>


            <div style={{
                width: "48%", backgroundColor: "white",
                paddingLeft: "2px", paddingRight: "2px"
            }}>
                <h4>Latest from Datrisoft...</h4>
            </div>
        </div>
    </div>

}
export default Dashboard
