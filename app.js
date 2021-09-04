const accordion = () => {
	const questions = document.querySelectorAll('.question');

	// looping for all questions
	questions.forEach((question) => {
		const btn = question.querySelector('.question-header');
		
		btn.addEventListener('click', () => {

			questions.forEach((item) => {
				/*looping again all questions inside a click event then if the item which the params, is not equal to question outside then remove the show answer class */
				if (item !== question) {
					item.classList.remove('show-answer');
				}
			})

			question.classList.toggle('show-answer');
		})
	})
}

accordion()