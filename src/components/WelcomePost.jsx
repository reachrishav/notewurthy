import WelcomeIllustration from '../assets/welcome.svg'

function WelcomePost() {
	return (
		<>
			<div
				className="flex align-items-center justify-content-center"
				style={{ height: '100%', flexDirection: 'column' }}
			>
				<img
					src={WelcomeIllustration}
					alt=""
					className="welcome-illustration"
				/>
				<h2>Hey there! Welcome 🙂</h2>
			</div>
		</>
	)
}

export default WelcomePost
