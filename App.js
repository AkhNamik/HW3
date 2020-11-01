import Footer from "./Footer.js"
import Main from "./Main.js"
import Menu from "./Menu.js"
import Navigation from "./Navigation.js"
const e = React.createElement
const App = () => {
  return e("div", {style:{display: "flex", flexDirection: "column"}},
                e("header", {style: {padding: "20px 50px", position:"relative"}}, 
                        e(Navigation),
                        e(Menu),
                ),
                e(Main),
                e(Footer),
        )
}
ReactDOM.render(App(), document.getElementById("root"))
