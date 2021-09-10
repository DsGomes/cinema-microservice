const { test, expect } = require('@jest/globals');
const repository = require('./repository');

let cityId = null;
let cinemaId = null;
let movieId = null;

beforeAll(async () => {
    const cities = await repository.getAllCities();
    cityId = cities[1]._id;

    const cinemas = await repository.getCinemasByCityId(cityId);
    cinemaId = cinemas[0]._id;

    movieId = cinemas[0].salas[0].sessoes[0].idFilme;
})

test('getAllCities', async ()=> {
    const cities = await repository.getAllCities();
    expect(Array.isArray(cities)).toBeTruthy();
    expect(cities.length).toBeTruthy();
})

test('getCinemasByCityId', async ()=> {
    const cinemas = await repository.getCinemasByCityId(cityId);
    expect(Array.isArray(cinemas)).toBeTruthy();
})

test('getMoviesByCinemaId', async ()=> {
    const movies = await repository.getMoviesByCinemaId(cinemaId);
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBeTruthy();
})

test('getMoviesByCityId', async ()=> {
    const movies = await repository.getMoviesByCityId(cityId);
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBeTruthy();
})

test('getMovieSessionsByCityId', async ()=> {
    const movieSesions = await repository.getMovieSessionsByCityId(movieId, cityId);
    expect(Array.isArray(movieSesions)).toBeTruthy();
    expect(movieSesions.length).toBeTruthy();
})

test('getMovieSessionsByCityId', async ()=> {
    const movieSesions = await repository.getMovieSessionsByCinemaId(movieId, cinemaId);
    expect(Array.isArray(movieSesions)).toBeTruthy();
    expect(movieSesions.length).toBeTruthy();
})