/**
 * Created by douglas on 13/06/17.
 */
const equipmentsRouter = require('./api/equipment');
module.exports = app => {
    app.use('/api/equipments', equipmentsRouter);
};