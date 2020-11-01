import Menu from "./Menu.js"
const e = React.createElement
class Navigation extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn  
    }))
  }
  render(){
    return (e("nav", null,
                e("ul",{style : {listStyle: "none", display: "flex", justifyContent: "flex-end"}},
                    e("li", null, 
                        e("a", {href: "#", style: {textDecoration: "none", color: "#929294"}}, "Почта")), 
                    e("li", {style: {margin: "0 10px"}},
                        e("a", {href: "#", style: {textDecoration: "none", color: "#929294"}}, "Картинки")), 
                    e("li", null,  
                        e("button", {onClick: this.handleClick, style: {cursor:"pointer", outline: "none", border: "none", backgroundColor:"white"}}, 
                          e("img", {src:"../img/menuIcon.png"})
                        ),  
                     ),
                     this.state.isToggleOn ? e(Menu) : null
                )
              )
            )       
          }
}
export default Navigation
