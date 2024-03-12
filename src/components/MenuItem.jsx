export default function MenuItem(props) {

return(

    <div className={`flex flex-row justify-between border-2 border-${props.color} p-4 m-1 ${props.color === "black" ? "hover:bg-gray-100" : "hover:bg-blue-100" }`}>
        {props.elementName}
        {props.showArrow &&
        <div className={`flex ${props.arrowDirection === "down"? "rotate-90" : "flex-row"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </div>
        }
    </div>

)

}