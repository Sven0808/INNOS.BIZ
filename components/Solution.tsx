import "../app/globals.css"

const Solution = () => {
    return(
       <section className="relative right-100"  style={{overflow: "hidden"}}>
        <div className="flex" style={{ background: "rgb(4,7,29"}}>
            <div className="max-w-xl p-5">
                <h1 className="text-3xl">Optimized for security</h1>
                <p className="my-10">Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.</p>
                <button className="custom-btn btn-11"><span>Click!</span></button>
            <div className="box-border w-72 h-72 border-4 rounded-full bg-sky-400 blur-3xl absolute left-72"></div>
            </div>
            <div className="max-w-xl">
                <img src="/feature-image-01.jpg" />
            </div>
        </div>
       </section>
    );
};

export default Solution;