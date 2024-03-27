import Brain from './Brain'

export default function HeroBrain() {
  return (
    <section className="h-full w-full items-center px-5 pt-24 overflow-hidden  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
      <div className="w-3/4 h-full flex justify-end ml-auto z-50">
        <Brain />

      </div>

      <div className="absolute inset-0 pt-30 w-1/2 h-screen flex flex-col  justify-center items-center text-wrap text-white">
        <h1 className="text-6xl font-bold uppercase w-min ">Break the <span className="text-7xl font-extrabold ">language barrier.</span>
        </h1>
        <h2 className="text-2xl pr-9">We speak the language of your fans!</h2>
      </div>

    </section>
  )
}
