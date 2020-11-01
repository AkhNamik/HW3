const e = React.createElement
class Navigation extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state =>{
      isToggleOn: !state.isToggleOn  
    })
  }
  render(){
    return (e("nav", null,
                e("ul",{style : {listStyle: "none", display: "flex", justifyContent: "flex-end"}},
                    e("li", null, 
                        e("a", {href: "#", style: {textDecoration: "none"}}, "Почта")), 
                    e("li", {style: {margin: "0 10px"}},
                        e("a", {href: "#", style: {textDecoration: "none"}}, "Картинки")), 
                    e("li", null,  
                        e("button", { style: { cursor: "pointer" }, onClick: this.handleClick}, "#"))
                )
              )

    )       
  }
}
export default Navigation
