import Link from 'next/link'
import { useState, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'


import collapsibleStyles from './styles/collapsibleButton.module.css'
import menubarStyles from './styles/menubar.module.css'

import { getWindowType } from "../utils/screenMgr"
export default () => {
    let view = <div>Loading...</div>;
    let windowType = getWindowType()||"pc"
    if (typeof window !== "undefined") {
        console.log(`window type: ${windowType}`)
    }
    if (windowType === "sm_phone" || windowType === "bg_phone") {
        view = <div><CollapsibleMenu /></div>
    }
    else {
        view = <>
            <ul className={menubarStyles.ulBar}>
                <li> <Link href="/"><a>Home</a></Link></li>
                <li> <Link href="/developers"><a>Developer</a></Link></li>
            </ul>
            <ul className={menubarStyles.right}>
                <li>{1 > 2 ?
                    <Link href="/login"><a>Log in</a></Link> :
                    <Link href="/register"><a>Register</a></Link>}
                </li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
        </>
    }
    return view;
}


//phone and tablet views: component for expanded view of the collapsible menu
function Links({ userData, autoCollapseParent }) {
    return (<nav style={{ position: "fixed", top: 0 }}>
        <ul className={collapsibleStyles.linkContainer}>
            <li>
                <Link href='/' >
                    <a className={collapsibleStyles.link} onBlur={(e) => {
                        console.log("/home")
                        autoCollapseParent(true)
                    }}>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about' >
                    <a className={collapsibleStyles.link} onBlur={(e) => {
                        console.log("/about")
                        autoCollapseParent(true)
                    }}>About</a></Link>
            </li>
            <li>
                {userData ? <Link href="/logout"><a >Log out</a></Link> :
                    <Link href='/login'>
                        <a className={collapsibleStyles.link} onBlur={(e) => {
                            console.log("/log (in or out)")
                            autoCollapseParent(true)
                        }}>Log in</a></Link>}
            </li>
        </ul>
    </nav>)
}

//phone and tablet views: component for the collapsible menu
function CollapsibleMenu() {
    let [isCollapsed, autoCollapse] = useState(true)
    let handleCollapseBtnClick = (e) =>
        autoCollapse(!isCollapsed)
    let handleOnBlur = (e) => autoCollapse(true)
    let collapsibleBtn = <button style={{ position: "absolute", top: 0 }} className="w3-btn w3-text-blue"
        onClick={handleCollapseBtnClick}>
        <FontAwesomeIcon icon={faTimes} /></button>
    let expandBtn = <button style={{}}
        className="w3-btn w3-text-blue" onClick={handleCollapseBtnClick}>
        <FontAwesomeIcon icon={faBars} /></button>
    return isCollapsed ?
        <div className={collapsibleStyles.collapsed}>
            {expandBtn}
        </div> :
        <div className={collapsibleStyles.fullOverlay}
            onClick={handleOnBlur}>
            <div className={collapsibleStyles.expanded}>
                {collapsibleBtn}
                <div style={{ marginTop: "50px" }}>
                    <Links autoCollapseParent={autoCollapse} /></div>
            </div>
        </div>
}