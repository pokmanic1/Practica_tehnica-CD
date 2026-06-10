function ButonColorat(props) {
    return (
        <>
            <button className="px-3 py-1 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] rounded-[20px]">
                {props.title}
            </button>
        </>
    )
}
function ButonSur(props) {
    return (
        <>
            <button className="px-3 py-1 bg-gray-300 text-black border border-black rounded-[20px]">
                {props.title}
            </button>
        </>
    )
}

ButonColorat.defaultProps = {
    title: "Default Title",
    description: "Default Description"
}

export { ButonColorat, ButonSur };


