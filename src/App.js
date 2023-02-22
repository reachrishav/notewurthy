import './App.css'
import Content from './components/Content'
import { ThemeProvider } from './ThemeContext'
import { Routes, Route } from 'react-router-dom'
// import BlogPost from "./components/BlogPost"
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react'

function App() {
	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: 'Designing in the Build',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
			datePublished: 'FEB 02, 2023',
		},
		{
			id: 2,
			title: 'Second Blog',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
			datePublished: 'FEB 02, 2023',
		},
		{
			id: 3,
			title: 'Third Blog',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure.',
			datePublished: 'FEB 02, 2023',
		},
		{
			id: 4,
			title: 'Fourth Blog',
			description:
			`As technology continues to advance, so do the tools and resources available to developers. One such tool that has been gaining popularity in recent years is ChatGPT, a language model trained by OpenAI. ChatGPT can assist developers in a number of ways, from identifying potential issues in code to generating code snippets and assisting in testing and quality assurance.

			One of the primary ways that ChatGPT can assist developers is by providing suggestions and insights during the development process. For example, developers can input code snippets into ChatGPT and receive feedback on potential issues or areas for improvement. This can help developers identify and fix problems more quickly and efficiently, ultimately saving time and improving the overall quality of the software.
			
			Another way that ChatGPT can assist developers is by generating code snippets that can be incorporated into the overall project. This can be particularly helpful for repetitive or tedious tasks, such as creating basic functions or formatting code. ChatGPT can quickly generate these snippets, freeing up developers to focus on more complex issues and development tasks.
			
			In addition to assisting in the coding process, ChatGPT can also be used in testing and quality assurance. By creating virtual users and simulating user behavior, ChatGPT can help developers detect and fix bugs before releasing the software to the public. This can ultimately improve the user experience and reduce the number of issues that arise post-release.
			
			Furthermore, ChatGPT can be used in customer service and support by providing instant responses to common queries and concerns. This can help reduce the workload on developers and customer support teams, freeing them up to focus on more complex issues and development tasks.
			
			Overall, ChatGPT is a powerful tool that can assist developers in a number of ways, from identifying potential issues in code to generating code snippets and assisting in testing and quality assurance. As technology continues to evolve, it's likely that ChatGPT and other similar tools will become even more advanced, providing developers with even more opportunities to streamline their work and improve the overall quality of the software they create.
			`,
			datePublished: 'FEB 02, 2023',
		},
	])

	return (
		<ThemeProvider>
			<Routes>
				<Route path="/" element={<Content blogs={blogs} />} />
				{/* <Route path="/blog/:id" element={<BlogPost blogs={blogs} />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
