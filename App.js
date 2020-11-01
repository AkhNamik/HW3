import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
import Navigation from "./components/Navigation.js"
const e = React.createElement
const App = () => {
  return e("div", {style:{display: "flex", flexDirection: "column"}},
                e("header", {style: {padding: "20px 50px", position:"relative"}}, 
                        e(Navigation)
                ),
                e(Main),
                e(Footer)
        )
}
ReactDOM.render(App(), document.getElementById("root"))
