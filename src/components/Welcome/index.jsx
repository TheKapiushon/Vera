


function Welcome({ onWelcome }) {

  return (
    <>
      <div className="welcome--container h-screen flex flex-col items-center justify-evenly bg-cherry">
        <h1 className="font-serif text-orange-400 p-10">Welcome To the Vera; <br /> The real Vintage Era</h1>
        <button onClick={onWelcome} className="text-orange-100 bg-orange-500 duration-300 hover:border-orange-800 hover:bg-orange-800">Lets Get Started</button>
      </div>
    </>
  )
}

export default Welcome;