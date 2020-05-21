function getWindowType() {
    if (typeof window !== "undefined") {
        let windowType = ""

        if (window.innerWidth <= 300) {
            windowType = "sm_phone"
        }
        else if (window.innerWidth > 300 && window.innerWidth < 602) {
            windowType = "bg_phone"
        }
        else if (window.innerWidth >= 600 && window.innerWidth < 1002) {
            windowType = "tablet"
        }
        else if (window.innerWidth >= 1002) {
            windowType = "pc"
        }
        return windowType;
    }
}

export { getWindowType }