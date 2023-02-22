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
			title: 'WFH or WFO: Isolation or Distraction?',
			description: `Working from home (WFH) vs. working from the office (WFO), the ultimate battle. It's like choosing between sweatpants or dress pants, or between Netflix and socializing. Let's break it down and see why WFH might have the upper hand.

WFH has many advantages. First and foremost, you get to work in your pajamas all day long. No more struggling to find that perfect work outfit or trying to fit into those uncomfortable dress shoes. Plus, you can save money on your wardrobe and skip the dry-cleaning bills.

Then there's the commute. With WFH, you don't have to worry about traffic, public transportation, or leaving the house early. Your commute is as simple as walking from your bedroom to your home office. No more coffee spills on your shirt or crowded subway rides.

WFH also offers more flexibility. Need to take a break and do some laundry? Go ahead, you're at home. Want to take a power nap after lunch? No one's stopping you. WFH allows you to structure your day according to your own preferences and habits.

But, let's not forget about the downsides of WFH. It can be isolating, and you might miss the social interactions and camaraderie of the office. Plus, it's harder to separate work and home life when they're both happening in the same place. You might find yourself working longer hours or feeling like you're always "on."

On the other hand, WFO has some advantages too. You get to interact with colleagues in person, which can lead to better communication, collaboration, and a sense of teamwork. It's also easier to separate work and home life, as you physically leave the office at the end of the day.

But, WFO has its own set of problems. The commute can be stressful and time-consuming, leading to fatigue and burnout. Plus, the dress code and office politics can be a real downer. And don't forget about those co-workers who love to microwave their fish lunch in the communal kitchen.

So, who comes out on top in this battle? It really depends on your priorities. If you value flexibility, comfort, and no commuting, then WFH might be your jam. If you thrive on social interaction, structure, and clear work-life boundaries, then WFO might be your cup of tea. Ultimately, it's about finding the right balance that works for you.

In conclusion, both WFH and WFO have their pros and cons. It's up to you to decide which option is the best fit for your work style and lifestyle. But, let's be real, who doesn't love the freedom of working in their pajamas? Just remember to turn off the camera during Zoom meetings.`,
			datePublished: 'FEB 23, 2023',
		},
		{
			id: 2,
			title: "The Procrastinator's Guide to Productivity",
			description: `Procrastination is an art form that many of us have perfected. Whether it's putting off work assignments, cleaning the house, or going to the gym, procrastination is a skill that we've all honed over time. But, how do you become a true master of procrastination? Here are a few tips to help you put things off like a pro.

First, you need to master the art of distraction. This means finding every possible way to avoid the task at hand. Check your phone, watch TV, scroll through social media, or even clean the kitchen. Anything to avoid doing what you're supposed to be doing.

Next, you need to learn how to rationalize your procrastination. This means coming up with a million reasons why you can't possibly do the task right now. "I'm too tired," "I'll do it later," or "I work better under pressure" are all great excuses to avoid getting things done.

Another key element of procrastination is the ability to procrastinate productively. This means finding other tasks that you can do instead of the one you're supposed to be doing. For example, if you're supposed to be writing a report, you can spend hours organizing your desk or responding to non-urgent emails. This way, you're still getting things done, just not the thing you're supposed to be doing.

Of course, there are downsides to procrastination. You might miss deadlines, lose opportunities, or damage your reputation. But, let's be real, procrastination can be a stress-reliever, a way to avoid boredom, and a chance to do something more enjoyable instead.

In the end, procrastination is all about finding the right balance. You need to know when it's okay to procrastinate and when it's not. You also need to know when to stop procrastinating and start getting things done.

So, how do you become a master of procrastination? It's simple: practice, practice, practice. With a little bit of effort, anyone can put things off like a pro. Just remember to avoid putting off the things that really matter and to prioritize your responsibilities when necessary.

In conclusion, procrastination is an art form that can be mastered with the right mindset and techniques. Whether you're avoiding work, chores, or exercise, there are ways to put things off like a pro. Just remember to find the right balance and to use procrastination wisely. Happy procrastinating!`,
			datePublished: 'FEB 23, 2023',
		},
		{
			id: 3,
			title: 'EVs vs. Fuel Cars: The Battle for the Road',
			description: `Ah, the classic battle between electric vehicles (EVs) and fuel cars. It's like a rap battle, only with cars. Let's break it down and see who comes out on top.

EVs have the upper hand in terms of being eco-friendly. They emit fewer greenhouse gases and are a better option for reducing your carbon footprint. They're also cheaper to operate and require less maintenance. Plus, you get to feel good about doing your part for the environment. Win-win.

But, let's not forget about the downside of EVs. Finding a charging station can be like finding a needle in a haystack. And even if you do find one, be prepared for a long stopover to recharge your ride. Not ideal for the road trippers among us.

Fuel cars, on the other hand, are more powerful and have a longer range. They're the sports car of the car world, leaving EVs in the dust when it comes to performance. Plus, you'll never have to worry about being stranded on the side of the road because you ran out of juice.

But, fuel cars have their own set of problems. They're notorious for emitting greenhouse gases, making them the enemy of the environment. And let's not forget about the unpredictability of fuel prices. It's like playing a game of roulette every time you fill up your tank. And, they require more maintenance, which means more money out of your pocket.

So, who comes out on top in this rap battle? It really depends on your priorities. Are you all about being eco-friendly and cost-efficient? Go for an EV. Are you a speed demon who loves the thrill of the open road? A fuel car might be more your style. Just remember to bring your wallet, because those fuel prices can be brutal.

In conclusion, EVs and fuel cars both have their strengths and weaknesses. It's up to you to decide which is the best fit for your lifestyle. But, let's be real, we all know the coolest cars are the ones that run on pure imagination. Vroom vroom.`,
			datePublished: 'FEB 23, 2023',
		},
		{
			id: 4,
			title: 'ChatGPT: The Future of Development Assistance',
			description: `As technology continues to advance, so do the tools and resources available to developers. One such tool that has been gaining popularity in recent years is ChatGPT, a language model trained by OpenAI. ChatGPT can assist developers in a number of ways, from identifying potential issues in code to generating code snippets and assisting in testing and quality assurance.

One of the primary ways that ChatGPT can assist developers is by providing suggestions and insights during the development process. For example, developers can input code snippets into ChatGPT and receive feedback on potential issues or areas for improvement. This can help developers identify and fix problems more quickly and efficiently, ultimately saving time and improving the overall quality of the software.

Another way that ChatGPT can assist developers is by generating code snippets that can be incorporated into the overall project. This can be particularly helpful for repetitive or tedious tasks, such as creating basic functions or formatting code. ChatGPT can quickly generate these snippets, freeing up developers to focus on more complex issues and development tasks.

In addition to assisting in the coding process, ChatGPT can also be used in testing and quality assurance. By creating virtual users and simulating user behavior, ChatGPT can help developers detect and fix bugs before releasing the software to the public. This can ultimately improve the user experience and reduce the number of issues that arise post-release.

Furthermore, ChatGPT can be used in customer service and support by providing instant responses to common queries and concerns. This can help reduce the workload on developers and customer support teams, freeing them up to focus on more complex issues and development tasks.

Overall, ChatGPT is a powerful tool that can assist developers in a number of ways, from identifying potential issues in code to generating code snippets and assisting in testing and quality assurance. As technology continues to evolve, it's likely that ChatGPT and other similar tools will become even more advanced, providing developers with even more opportunities to streamline their work and improve the overall quality of the software they create.
			`,
			datePublished: 'FEB 22, 2023',
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
