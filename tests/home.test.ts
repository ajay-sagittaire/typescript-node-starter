import * as request from 'supertest';

import app from '../src/app/app';

test('Home page shows message and version in JSON format', async () => {
    const result = await request(app).get('/');
    expect(result.body.hasOwnProperty('message')).toEqual(true);
    expect(result.body.hasOwnProperty('version')).toEqual(true);
});