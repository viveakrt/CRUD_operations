const chai = require('chai');
const chaiHttp = require(`chai-http`);
const config = require(`../config`);
let server = require('../server');

chai.should();
chai.use(chaiHttp);


describe('POST DATA', () => {


    it("POST Data ", done => {

        chai.request(server)
        .get(`/get/all`)
        .end((err,res)=>{
        
            res.should.have.status(200);
            res.body.Data.should.be.a('array');
        
            done();
        
        })
    })

    /* 
    TODO: create.post('/all', 
    */
})