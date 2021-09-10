const { ObjectId } = require('mongodb');

const cinemaCatalog = [{
	cidade: "Gravataí",
	uf: "RS",
	cinemas: []
}, {
	cidade: "Porto Alegre",
	uf: "RS",
	pais: "BR",
	cinemas: [{
		_id: new ObjectId("612eaabe2a38d0b435d05151"),
		nome: "Cinemark Bourbon Ipiranga",
		salas: [{
			nome: 1,
			sessoes: [{
				data: new Date("2021-10-01T09:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05051"),
				filme: "Vingadores: Guerra Infinita",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}]
			}, {
				data: new Date("2021-10-01T11:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05051"),
				filme: "Vingadores: Guerra Infinita",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}, {
				data: new Date("2021-10-01T13:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05052"),
				filme: "Vingadores: Era de Ultron",
				valor: 20.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}]
		}, {
			nome: 2,
			sessoes: [{
				data: new Date("2021-11-01T09:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05052"),
				filme: "Vingadores: Era de Ultron",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}, ]
			}, {
				data: new Date("2021-11-01T11:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05050"),
				filme: "Vingadores: Ultimato",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}, {
				data: new Date("2021-11-01T13:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05050"),
				filme: "Vingadores: Ultimato",
				valor: 20.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}]
		}]
	}, {
		_id: new ObjectId("613eaabe2c48d0b435d05151"),
		nome: "GNC Lindóia",
		salas: [{
			nome: 100,
			sessoes: [{
				data: new Date("2021-10-30T19:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05050"),
				filme: "Vingadores: Ultimato",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}, ]
			}, {
				data: new Date("2021-10-31T11:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05050"),
				filme: "Vingadores: Ultimato",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}, {
				data: new Date("2021-10-31T13:00:00Z"),
				idFilme: new ObjectId("612eaabe2a28d0a435d05052"),
				filme: "Vingadores: Era de Ultron",
				valor: 20.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}]
		}]
	}]
}];

function getAllCities(){
    return cinemaCatalog.map(catalog => {
		return {
			_id: new ObjectId("613eaabe2c48d0b435d05151"),
			pais: catalog.pais,
			uf: catalog.uf,
			cidade: catalog.cidade
		}
	})
}

function getCinemasByCityId(cityId){
	if(cityId < 0) return null;
	return cinemaCatalog[cinemaCatalog.length - 1].cinemas;
}

function getMoviesByCinemaId(cinemaId){
	if(cinemaId < 0) return null;
    return getCinemasByCityId().map(cinema => {
		return {
			titulo: cinema.salas[0].sessoes[0].filme,
			_id: cinema.salas[0].sessoes[0].idFilme
		}
	})
}

function getMoviesByCityId(cityId){
    return getMoviesByCinemaId(cityId);
}

function getMovieSessionsByCityId(movieId, cityId){
	if(movieId < 0 || cityId < 0) return null;
    return getCinemasByCityId().map(cinema => {
		return {
			titulo: cinema.salas[0].sessoes[0].filme,
			_id: cinema.salas[0].sessoes[0].idFilme,
			cinema: cinema.nome,
			idCinema: cinema._id,
			sala: cinema.salas[0].nome,
			sessao: cinema.salas[0].sessoes[0]
		}
	})
}

function getMovieSessionsByCinemaId(movieId, cinemaId){
    return getMovieSessionsByCityId(movieId, cinemaId);
}

module.exports = {
	getAllCities,
	getCinemasByCityId,
	getMoviesByCinemaId,
	getMoviesByCityId,
	getMovieSessionsByCityId,
	getMovieSessionsByCinemaId
}