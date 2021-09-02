const { test, expect } = require('@jest/globals');
const database = require('./database');

test('Connecting database', async () => {
    const connection = await database.connect();
    expect(connection).toBeTruthy();
})

test('Disconnecting database', async () => {
    const isDisconnected = await database.disconnect();
    expect(isDisconnected).toBeTruthy();
})

test('Disconnecting database when database is already disconnected', async () => {
    await database.disconnect();

    const isDisconnected = await database.disconnect();
    expect(isDisconnected).toBeTruthy();
})