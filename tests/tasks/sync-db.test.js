const { syncDb } = require("../../tasks/sync-db")

describe('Pruebas en sync-db', () => {
    test('TEST: Debe ejecutar el proceso 2 veces', () => {
        syncDb();
        const times = syncDb()
        expect(times).toBe(2)
    })
})