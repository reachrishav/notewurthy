import WelcomeIllustration from "../assets/welcome_cats.svg"

function WelcomePost() {
  return (
    <>
      <div
        className='flex align-items-center justify-content-center'
        style={{ height: "100%", flexDirection: "column", gap: "50px" }}
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
