import Head from 'next/head'
import { getWindowType } from "../utils/screenMgr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faComments, faUsers, faEye, faChartLine, faBell, faQuestionCircle, faHome,
    faInbox, faPaperPlane, faClipboard, faSmile, faPaperclip, faCamera, faComment, faVideo
} from '@fortawesome/free-solid-svg-icons';

const ChatApp = () => {
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
    return <ViewProper />
}

function ViewProper() {
    return <div style={{
        position: "absolute",
        bottom: 0,
        right: 0,

        color: "#87CEFA",
        width: "100%",
        height: "100%"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            color: "#87CEFA",
            height: "100%"
        }}>
            <ChatList />
            <ChatView />
            <UserDetails />
        </div></div>
}

function ChatList() {
    return <div style={{
        width: "20%",
        height: "100%",
        backgroundColor: "rgb(240,240,240)",
    }}>
        <div style={{marginTop:"10px",marginBottom:"10px",paddingLeft:"10px"}}>
        <img src="/imgs/IMG-20180328-WA0000.jpg" className="w3-circle" style={{height:"50px",width:"50px"}}/>
        </div>

        <div>
        <div><input style={{borderRadius:"10px",marginLeft:"5%",width:"90%",borderStyle:"none"}}/></div>
        </div>

    </div>

}

function ChatView() {
    return <div style={{
        width: "50%", height: "100%",
    }}>
        <div>
            <img />
        </div>
        <div style={{
            width: "100%", height: "80%", display: "flexbox", flexDirection: "column",
            paddingLeft: "10px", paddingRight: "10px"
        }}>
        </div>
        <div style={{
            width: "100%", height: "100px", flexDirection: "row", display: "flexbox", flexDirection: "row",
            alignItems: "baseline",
            paddingLeft: "10px", paddingRight: "10px", display: "inline"
        }}>
            <span>
                <textarea style={{
                    verticalAlign: "text-bottom", width: "75%",
                    borderRadius: "15px", resize: "none", alignSelf: "center", paddingLeft: "10px"
                }}></textarea>
                <i className="w3-btn" style={{
                    verticalAlign: "baseline",
                    height: "40px", color: "gray", padding: "5px"
                }}>
                    <FontAwesomeIcon icon={faCamera} /></i>
                <i className="w3-btn" style={{
                    verticalAlign: "baseline",
                    height: "40px", color: "gray", padding: "5px"
                }}>
                    <FontAwesomeIcon icon={faPaperclip} /></i>
                <i className="w3-btn" style={{
                    verticalAlign: "baseline",
                    height: "40px", color: "gray", padding: "5px"
                }}>
                    <FontAwesomeIcon icon={faSmile} /></i>

            </span><i className="w3-circle w3-btn" style={{
                height: "40px", color: "white", backgroundColor: "#87CEFA",
                verticalAlign: "baseline",
            }}>
                <FontAwesomeIcon icon={faPaperPlane} /></i>
        </div>
    </div>

}

function UserDetails() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "30%",
        height: "100%",
        backgroundColor: "rgb(250,250,250)",
    }}>
    <div>
        
    <img src="/imgs/IMG-20180726-WA0003.jpg" className="w3-circle" style={{height:"100px",width:"100px"}}/>
    <h3>Solarin Odunola</h3>
    <h5>trinitietp@gmail.com</h5>
    <div><span className="w3-circle w3-btn" style={{fontSize:"40px",marginRight:"15px",
    backgroundColor:"#efefef",color:"white"}}>
    <FontAwesomeIcon icon={faComment}/></span> 
    <span className="w3-circle w3-btn" style={{fontSize:"40px"}}>
    <FontAwesomeIcon icon={faVideo}/></span></div>
    <h6>Attachments</h6>

    </div>
    </div>

}

export default ChatApp
