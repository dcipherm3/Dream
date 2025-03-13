function FlipCard({ frontTitle, backImg, backTitle, backText }) {
    return (
        <div className="group h-80 w-64 [perspective:1000px] cursor-pointer">
            <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center p-4 [backface-visibility:hidden]">
                    <h1 className="text-lg font-bold">{frontTitle}</h1>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full bg-gray-800 text-white shadow-lg rounded-2xl flex flex-col justify-center items-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img src={backImg} alt="Card image" className="w-24 h-24 mb-4 rounded-lg" />
                    <h1 className="text-lg font-bold">{backTitle}</h1>
                    <p className="text-sm text-center">{backText}</p>
                </div>

            </div>
        </div>
    );
}

export default FlipCard;
