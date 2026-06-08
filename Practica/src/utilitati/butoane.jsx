function ButonColorat(props){
    return(
        <>
        <button className="px-3 py-2 bg-blue-700 rounded-[20px]">
            {props.title}
        </button>
        </>
    )
}

ButonColorat.defaultProps = {
    title: "Default Title",
    description: "Default Description"
}
export default ButonColorat ;

