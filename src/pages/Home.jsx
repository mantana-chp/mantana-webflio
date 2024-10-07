function Home() {
  return (
    <div className="Home font-poppins h-screen w-full flex items-center justify-center">
      <div className="grid grid-cols-6 items-center">
        <div className="flex-col justify-center col-start-1 col-end-3">
          <h1 className="text-3xl uppercase tracking-wide">
            Mantana Kodcharin
          </h1>
          <h1 className="text-8xl uppercase tracking-wide text-[#DF61A5] pt-6">
            Frontend
          </h1>
          <h1 className="text-8xl uppercase tracking-wide text-[#617DDF] pl-8 pt-8">
            Developer
          </h1>
        </div>
        {/* My Profile Picture */}
        <div className="col-end-7 col-span-2">pic here</div>
      </div>
    </div>
  )
}

export default Home
