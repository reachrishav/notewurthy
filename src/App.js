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
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias veritatis. Ducimus, at animi porro aperiam repudiandae ad, autem explicabo, quisquam recusandae tempore molestiae ipsum earum impedit officiis dolor. Labore assumenda illum nostrum temporibus, sed recusandae soluta animi fugiat ipsam corrupti quibusdam ab, culpa quisquam voluptas amet a ad earum nesciunt necessitatibus libero. Est ad quis, id velit debitis itaque error dolor, ullam, quos a facilis obcaecati iste nostrum quasi sequi enim optio. Corrupti voluptas mollitia maxime quibusdam natus, perferendis, illum magnam, amet minus impedit incidunt possimus iusto vel numquam sed consequatur unde magni ad vitae nesciunt pariatur maiores! Voluptatem quisquam, praesentium cupiditate molestias tempore facere eaque reprehenderit accusantium fuga blanditiis veritatis ducimus rem excepturi expedita alias vel provident autem tempora consequuntur assumenda dicta eos totam eius! Exercitationem soluta culpa ducimus ea doloribus. Doloribus earum ex fugiat ipsam recusandae saepe repudiandae praesentium soluta perspiciatis placeat nostrum, obcaecati dolore accusantium eum commodi ipsa ducimus expedita, eaque, facilis odit iure! Numquam aperiam assumenda impedit cum ab hic sed earum et. Tempore, odit voluptatibus nostrum harum, est, temporibus odio perspiciatis aliquam voluptates distinctio provident eos. Eius culpa quibusdam ducimus voluptas illo omnis soluta nisi tenetur saepe, voluptatibus, voluptates odio placeat pariatur! Odio consectetur est, nemo maxime iure, aut, adipisci rerum explicabo accusantium saepe exercitationem ad neque reprehenderit? Quod, a! Officiis quasi deserunt minima laudantium perferendis, maiores quos repellat ad earum temporibus in ipsa, veritatis nisi? Id, itaque nesciunt blanditiis ipsa et ut nulla obcaecati quasi dolore in cumque sit culpa unde earum assumenda animi? Nostrum illo quibusdam odio quidem ut. Dolores qui nihil assumenda ullam asperiores. Dolorum excepturi eius illo adipisci illum debitis enim hic. Perferendis veniam unde excepturi maxime aut, placeat consectetur voluptatum minima iusto quisquam exercitationem. Nemo voluptatem sit aliquid sed error ducimus eligendi deserunt quo cumque dolor ut quisquam veritatis, perspiciatis consequuntur harum minus? Nobis tempore neque amet blanditiis ducimus molestiae dignissimos expedita libero! Iste quam veniam harum voluptatem. Architecto, qui inventore? Rem maxime saepe nobis, numquam totam mollitia laudantium consectetur error dolorum expedita aliquam ipsam facilis minima doloribus recusandae hic quis, sunt adipisci dignissimos culpa corrupti architecto inventore ducimus. Nihil atque, repellat porro accusantium illum ut accusamus quasi, recusandae labore quisquam non quod! Saepe ea dolore quos corrupti! Soluta alias laborum dolor omnis voluptas tenetur harum? Aperiam et cum itaque iste sed fugit voluptates impedit nisi maiores animi enim ad, perferendis consectetur corporis ut? Quae veritatis ipsum at veniam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure',
			datePublished: 'FEB 02, 2023',
		},
	])

	useEffect(() => {}, [blogs])

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
