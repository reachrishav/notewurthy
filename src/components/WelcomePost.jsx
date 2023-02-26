import WelcomeIllustration from "../assets/welcome_cats.svg"

function WelcomePost() {
  return (
    <>
      <div
        className='flex align-items-center justify-content-space-evenly'
        style={{ height: "100%", flexDirection: "column", gap: "5px" }}
      >
        <img
          src={WelcomeIllustration}
          alt=''
          className='welcome-illustration'
        />
        <h2>Hey there! Welcome 🙂</h2>
      </div>
    </>
  )
}

export default WelcomePost
