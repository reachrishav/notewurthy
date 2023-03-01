import React from 'react'

const Pagination = () => {
	return (
		<div className="pagination-container flex justify-content-center">
			<ul className="flex pagination-list">
				<button className="pagination-prev-arrow">{'<'}</button>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<button className="pagination-next-arrow">{'>'}</button>
			</ul>
		</div>
	)
}

export default Pagination
