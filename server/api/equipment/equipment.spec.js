const supertest = require('supertest');
const app = require('../../index');
const request = supertest(app);
const Equipment = require('./equipment.model');
const assert = require('assert');

describe('Equipments', () => {
    let equipmentMock = {
        id: 'MQ0001',
        name: "Ponte rolante GH - 5 ton",
        risk: "A"
    };
    before(done => {
        Equipment.create(equipmentMock).then(created => {
            equipmentMock = created._doc;
            equipmentMock._id = equipmentMock._id.toString();
            done()
        })
            .catch(done);
    });
    it('GET /api/equipments -> Should list all equipments', done => {
        request.get('/api/equipments')
            .expect(200)
            .end((err, res) => {
                assert.deepEqual(res.body, [equipmentMock]);
                done(err);
            });
    });
    it('GET /api/equipments:id -> Should show a specific equipment', done => {
        request.get('/api/equipments/' + equipmentMock._id)
            .expect(200)
            .end((err, res) => {
                assert.deepEqual(res.body, equipmentMock);
                done(err);
            });
    });
    after(done => {
        Equipment.remove({}).then(() => {
            done();
        })
            .catch(done);
    });
});


