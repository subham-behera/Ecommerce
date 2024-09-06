
function Live() {
    return (
        <div className="flex flex-row py-4 justify-center gap-x-6">
            <div className="bg-gray-200 rounded-lg flex flex-row h-36 w-[45%] shadow-lg">
                <div className="w-[35%] flex flex-col justify-between px-6 py-6">
                    <span className="font-semibold">Drones & Craft</span>
                    <a href="">Shop</a>
                </div>
                <div className="w-[65%] px-6 py-6">
                    <img src="flying-drone.png" className="h-full w-full object-cover"></img>
                </div>
            </div>

            <div className="bg-gray-200 rounded-lg flex flex-row h-36 w-[45%] shadow-lg">
                <div className="w-[35%] flex flex-col justify-between px-6 py-6">
                    <span className="font-semibold">Drones & Craft</span>
                    <a href="">Shop</a>
                </div>
                <div className="w-[65%] px-6 py-6">
                    <img src="flying-drone.png" className="h-full w-full object-cover"></img>
                </div>
            </div>
        </div>
    );
}

export default Live;