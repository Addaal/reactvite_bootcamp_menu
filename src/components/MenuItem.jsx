export default function MenuItem(props) {

return(

    <div className={`flex flex-row justify-between border-2   p-4 m-1 ${props.color === "black" ? "border-black hover:bg-gray-100" : "border-blue-700 hover:bg-blue-100" }`}>
        {props.elementName}
        {props.showArrow &&
        <div className={`flex  transition  ease-in-out duration-200 ${props.arrowDirection === "down"? "rotate-90" : "flex-row"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </div>
        }
    </div>

)

}