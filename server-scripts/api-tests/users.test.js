//WIP TESTING FILE FOR API - not currently working

// import dependencies for supertest
const request = require('supertest');

// what are we testing?...the user API
describe('The User API', () => {

  // Specific test
  it('should return a list of all users', () => {

    // Connect to the server and get a response
    // Expect that response to be a 200 and serve JSON
    const res = await request('http://localhost:3000')
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/);

    // These expects are jest, not supertest
    // First, expect to get a result that is an array
    expect(Array.isArray(res.body)).toBe(true);
    // Second, expect the array to have something in it
    expect(res.body.length).toBeGreaterThan(0);
    // Third, expect the username of the first returned user to be Administrator
    expect(res.body[0].username).toBe('administrator');
  });
});