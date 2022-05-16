import * as React from "react"
import { Link } from "react-router-dom"
import { gitVersion, upstreamUrl, usingDarkTheme } from "../initial-state"

export class Footer extends React.Component {
    render() {
        return <footer className="container">
            <p>PQuestion は AGPL-3.0 で提供されています。<a href={upstreamUrl}>ソースコード</a>&nbsp;</p>
            <p>
                {usingDarkTheme
                    ? <a href="#" onClick={this.leaveDarkTheme.bind(this)}>ダークテーマから戻す</a>
                    : <a href="#" onClick={this.enterDarkTheme.bind(this)}>ダークテーマにする(β)</a>
                }
            </p>
        </footer >
    }

    leaveDarkTheme() {
        localStorage.removeItem("using-dark-theme")
        location.reload()
    }

    enterDarkTheme() {
        localStorage.setItem("using-dark-theme", "1")
        location.reload()
    }
}
