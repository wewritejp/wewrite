import db from "db"

afterAll(async() => {
  await db.$reset()
})

describe('Test getBooks', () => {
  it('1+1==2', () => {
    expect(1+1).toBe(2)
  })
})
