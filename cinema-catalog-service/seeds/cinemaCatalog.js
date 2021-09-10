[{
	cidade: "Gravataí",
	uf: "RS",
	cinemas: []
}, {
	cidade: "Porto Alegre",
	uf: "RS",
	pais: "BR",
	cinemas: [{
		_id: ObjectId(),
		nome: "Cinemark Bourbon Ipiranga",
		salas: [{
			nome: 1,
			sessoes: [{
				data: ISODate("2021-10-01T09:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05051"),
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
				data: ISODate("2021-10-01T11:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05051"),
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
				data: ISODate("2021-10-01T13:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05052"),
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
				data: ISODate("2021-11-01T09:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05052"),
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
				data: ISODate("2021-11-01T11:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05050"),
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
				data: ISODate("2021-11-01T13:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05050"),
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
		_id: ObjectId(),
		nome: "GNC Lindóia",
		salas: [{
			nome: 100,
			sessoes: [{
				data: ISODate("2021-10-30T19:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05050"),
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
				data: ISODate("2021-10-31T11:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05050"),
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
				data: ISODate("2021-10-31T13:00:00Z"),
				idFilme: ObjectId("612eaabe2a28d0a435d05052"),
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
}]