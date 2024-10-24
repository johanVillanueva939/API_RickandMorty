fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(data => {
		const characters = data.results;
		const container = document.querySelector('main');

		function createCard (character){

			const cards = document.createElement('div')
			cards.id = 'container'
			cards.classList.add('card')

			const imgCard = document.createElement('img')
			imgCard.src = character.image
			imgCard.alt = character.name

			const txt_container = document.createElement('div')
			txt_container.id = 'txt_container'
			txt_container.classList.add('txt')

			const name_container = document.createElement('h2')
			name_container.id = 'name_container'
			name_container.classList.add('name')
			name_container.textContent = `Name: ${character.name}`

			const status_container = document.createElement('h3')
			status_container.id = 'status_container'
			status_container.classList.add('status')
			status_container.textContent = `Status: ${character.status}`

			const specie_container = document.createElement('h4')
			specie_container.id = 'specie_container'
			specie_container.classList.add('specie')
			specie_container.textContent = character.species

			cards.appendChild(imgCard)
			cards.appendChild(txt_container)

			txt_container.appendChild(name_container)
			txt_container.appendChild(status_container)
			txt_container.appendChild(specie_container)

			container.appendChild(cards)

		}
		function makeCards (){
			characters.forEach(character => {
				createCard(character)
			});
		}
		makeCards()
	})
	.catch(err => console.error(err));

