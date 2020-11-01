const e = React.createElement
const Main = () => {
    return(
        e("div", {style: {display: "inline-block",textAlign:"center", width: "450px", margin: "30px 0 20px 300px", flexGrow: "1"}},
            e("img", {src: "./img/googleIcon.png"}),
            e("input", {style: {width: "100%", padding: "10px", borderRadius: "25px", border: "2px solid #f5f6f7", outline: "none", margin:"25px 0"}}),
            e("div", {style: {display: "flex", alignItems:"center", justifyContent:"center"}},
                e("button", {style:{width: "120px", padding: "10px 0", margin:"0 20px 0 0", outline: "none", border: "none", borderRadius: "5px", cursor: "pointer", color: "#85868a"}}, "Поиск в Google"),
                e("button", {style:{width: "120px", padding: "10px 0", outline: "none", border: "none", borderRadius: "5px", cursor: "pointer", color: "#85868a"}}, "Мне повезет!"),
            ),
        )
    )
}
export default Main