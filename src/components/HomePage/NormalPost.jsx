import { Link } from "react-router-dom"

function NormalPost({ poster, title, textPreview, postedDate, tags, linkName, linkTo }) {
    return (
        <div className="flex flex-col w-full mt-7 rounded-t-md">
            <img className="rounded-t-md"
                src={poster} alt="" />
            <div className="flex flex-col gap-3 p-6 bg-[#202020ff] rounded-b-md shadow-simple-post">
                <h6 className="font-roboto text-white text-[18px] font-[500]">
                    {title}</h6>
                <p className="font-roboto text-[#d2d2d2ff] text-[14px] leading-[21px] font-[400]">
                    {textPreview}
                </p>
                <div className="flex md:flex-row flex-col gap-3 justify-between">
                    <div className="flex flex-row flex-wrap gap-x-3 items-center">
                        <span className="font-lato text-[#828282ff] text-[12px] font-[400]">
                            {postedDate}21.06.2020</span>
                        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                        {tags.map( (tag) => (
                            <Link
                                className="font-lato text-[#828282ff] text-[12px] font-[400]">
                                {tag}</Link>
                        ))}
                    </div>
                    <Link to={linkTo}
                        className="font-roboto text-[#107effff] text-[14px] font-[400]">
                            {linkName}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NormalPost
