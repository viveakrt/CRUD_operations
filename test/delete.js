// const chai = require('chai');
// const chaiHttp = require(`chai-http`);
// const config = require(`../config`);
// const should = chai.should();

// chai.use(chaiHttp);

// const TESTING_URL = `http://${config.host}:${config.port}/` 

// describe('Delete data via ID', () => {
//     describe("NO user Id provided validation error", ()=> {
//         it('status', done => {
//             const id = 1
//             chai.request(TESTING_URL)
//             .delete(`del/id/${id}`)
//             .end((err,res)=>{
//                 should(res.status).have.status(404);

//             })
//         })
//     })

// })