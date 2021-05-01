const chai = require('chai');
const chaiHttp = require(`chai-http`);
const config = require(`../config`);
let server = require('../server');

chai.should();
chai.use(chaiHttp);


describe('DELETE DATA', () => {
    it('DELETE using ID', done => {
        const id = 1
        chai.request(server)
        .delete(`/delete/id/${id}`)
        .end((err,res)=>{
            
            if(typeof id != 'number'){
                res.should.have.status(400);
            }
            else{
                if(res.status==404){
                    res.body.message.should.equal( `Cosmetic with Id ${id} NOT FOUND`);
                }else{
                    res.body.message.should.equal( `Cosmetic with Id ${id} DELETED`);
                }

            }
            done();

        })
    })



    /* 
    TODO: del.delete('/all'
    */
})