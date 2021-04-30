const chai = require('chai');
const chaiHttp = require(`chai-http`);
const config = require(`../config`);
let server = require('../server');

chai.should();
chai.use(chaiHttp);


describe('READ DATA', () => {

        it("GET all the data", done => {

            chai.request(server)
            .get(`/get/all`)
            .end((err,res)=>{
            
                res.should.have.status(200);
                res.body.Data.should.be.a('array');
            
                done();
            
            })
        })


        it("GET Data via id", done => {
            const id = 6;
            
            chai.request(server)
            .get(`/get/${id}`)
            .end((err,res)=>{

                if(typeof id != 'number'){
                    res.should.have.status(400);
                }
                else{
                    if(res.status==404){
                        res.body.message.should.equal("NO DATA MATCH");
                    }else{
                        res.should.have.status(200);
                        res.body.Data.should.have.property("id")
                        res.body.Data.should.have.property("Label")
                        res.body.Data.should.have.property("Brand")
                        res.body.Data.should.have.property("Name")
                        res.body.Data.should.have.property("Ingredients")
                        res.body.Data.should.have.property("Price")
                        res.body.Data.should.have.property("id").eq(id)
                    }

                }
                done();
            })

        })


        it ('GET Categories Data', done => {
            chai.request(server)
            .get('/get/allCategories')
            .end((err,res)=>{

                res.should.have.status(200);
                res.body.Data.should.be.a('array');

                done();
            })

        })


        it('GET Categories Data via Name', done => {
            
            const cat = "rizer"
            chai.request(server)
            .get('/get/allCategories/'+cat)
            .end((err,res)=>{

                res.should.have.status(200);
                res.body.Data.should.be.a('array');

                done();
            })
        })

})