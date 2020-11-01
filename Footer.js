const e = React.createElement
const footerItemLeft = [
    {name: "Реклама"},
    {name: "Для Бизнеса"},
    {name: "Все о Google"},
    {name: "Как работает Google поиск"},
]
const footerItemRight = [
    {name: "Конфиденциальность"},
    {name: "Условия"},
    {name: "Настройки"},
]
const Footer = () => {
    const arrFooterLeft = footerItemLeft.map(item => {
        return e("a", {href: "#", style:{textDecoration: "none", color: "#948685", fontSize:"14px", marginRight: "14px"}}, item.name)
    })
    const arrFooterRight = footerItemRight.map(item => {
        return e("a", {href:"#", style:{textDecoration: "none", color: "#948685", fontSize:"14px", marginRight: "14px"}}, item.name)
    })
    return(
        e("div", {style: {display: "flex", justifyContent: "space-between", backgroundColor: "#f2f2f2", padding:"10px 10px", position: "absolute", right:"0", left:"0", bottom:"0",}},
            e("div", null, arrFooterLeft),
            e("div", null, arrFooterRight)
        )
    )
}
export default Footer