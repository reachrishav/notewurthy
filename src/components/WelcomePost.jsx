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
					alt="WelcomeIllustration"
					className="welcome-illustration"
				/>
				<h3>Hey there! Welcome 🙂</h3>
			</div>
		</>
	)
}

export default WelcomePost
