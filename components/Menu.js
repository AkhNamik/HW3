const arrNavElement = [
  { img: "./img/accIcon.png", name: "Аккаунт" },
  { img: "./img/gIcon.png", name: "Поиск" },
  { img: "./img/mapiCon.png", name: "Карты" },
  { img: "./img/youtubeIcon.png", name: "YouTube" },
  { img: "./img/playIcon.png", name: "Play" },
  { img: "./img/newsIcon.png", name: "Новости" },
  { img: "./img/mailIcon.png", name: "Почта" },
  { img: "./img/discIcon.png", name: "Диск" },
  { img: "./img/calendIcon.png", name: "Календарь" },
  { img: "./img/translateIcon.png", name: "Переводчик" },
  { img: "./img/translateIcon.png", name: "Документы" },
  { img: "./img/photoIcon.png", name: "Фото" },
]
const e = React.createElement
const Menu = () => {
const arr = arrNavElement.map((item)=>{
    return  e("div", {style: {width: "30%", display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"20px"}}, 
                e("a",{href: "#"}, 
                    e("img", {src: item.img, style: {flexGrow: "1", height: "50px"}})
                ),
                e("a", {href: "#", style: {textDecoration: "none"}}, item.name)
            )
})
    return(
        e("div", {style:{display: "flex", flexWrap: "wrap", justifyContent:"space-between", boxShadow:"0 0 5px 0", width: "300px", padding:"20px", position:"absolute", top:"100%", right:"0", left:"73%"}}, arr)
    )                 
}
export default Menu
