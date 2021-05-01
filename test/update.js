const chai = require('chai');
const chaiHttp = require(`chai-http`);
const config = require(`../config`);
let server = require('../server');

chai.should();
chai.use(chaiHttp);


describe('UPDATE DATA', () => {

    it("UPDATE Data via ID ", done => {
        let cosmetic = {
            Label: "Updated Lavbel",
            Brand: "Updated Brand",
            Name: "Updated Name",
            Price: 75,
            Rank: 4,
            Ingredients: "NEW PoreDermabrasion Pore Perfecting Exfoliator: Water, Alumina, Glycerin, Butylene Glycol, Lactobacillus Ferment, Carica Papaya (Papaya) Fruit Extract, Carbomer, Methyl Gluceth-20, Lens Esculenta (Lentil) Fruit Extract, Microcitrus Australasica Fruit Extract, Lactobacillus/Pumpkin Fruit Ferment Filtrate, Amyris Balsamifera Bark Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Eugenia Caryophyllus (Clove) Leaf Oil, Jasminum Officinale (Jasmine) Oil, Lavandula Angustifolia (Lavender) Oil, Citrus Limon (Lemon) Peel Oil, Mentha Piperita (Peppermint) Oil, Rosa Damascena Flower Oil, Caprylic/Capric Triglyceride, Allantoin, Xanthan Gum, Sodium Hyaluronate, Salicylic Acid, Methyl Methacrylate Crosspolymer, Alcohol Denat., Sodium Hydroxide, Leuconostoc/Radish Root Ferment Filtrate, Phenoxyethanol, Ethylhexylglycerin, Iron Oxide (Ci 77491), Sodium Oxide. MAGNETIGHT Age-Defier™: Iron Powder, Dimethicone, Polysilicone-11, Nylon-12, C12-15 Alkyl Benzoate, Silica, Tribehenin, Polymethylsilsesquioxane, Peg-10 Dimethicone, Polysorbate 40, Hdi/Trimethylol Hexyllactone Crosspolymer, Ceramide Ng, Peg-10 Phytosterol, Tourmaline, Lavandula Angustifolia (Lavender) Oil, Isohexadecane, Ammonium Polyacryloyldimethyl Taurate, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Palmitoyl Hexapeptide-12, Pelargonium Graveolens (Geranium) Flower Oil, Dimethylmethoxy Chromanol, Anthemis Nobilis (Chamomile) Flower Oil, Limonene, Linalool, Citronellol, Geraniol. Pores No More Pore Refiner Primer: Cyclopentasiloxane, Dimethicone Crosspolymer, Methyl Methacrylate Crosspolymer, Lauryl Peg/Ppg-18/18 Methicone, Peg/Ppg-18/18 Dimethicone, Cyclotetrasiloxane, Magnesium Silicate, Calcium Aluminum Borosilicate, Dimethicone/Vinyl Dimethicone Crosspolymer, Linum Usitatissimum (Linseed) Seed Extract, Dimethyl Oxobenzo Dioxasilane, Ethylhexyl Palmitate, Phenoxyethanol, Lavandula Angustifolia (Lavender) Oil, Silica Dimethyl Silylate, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Silica, Triethoxycaprylylsilane, Caprylyl Glycol, Propylene Glycol, Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491, Ci 77492, Ci 77499).",
            Combination: 1,
            Dry: 1,
            Normal: 1,
            Oily: 1,
            Sensitive: 1
        };

        const id = 7
        chai.request(server)
            .put(`/update/${id}`)
            .send(cosmetic)
            .end((err, res) => {

                if(typeof id != 'number'){
                    res.should.have.status(400);
                }
                else{
                    if(res.status==404){
                        res.body.message.should.equal( `Cosmetic with Id ${id} NOT FOUND`);
                    }else{
                        res.body.message.should.equal( `Cosmetic with Id ${id} UPDATED`);
                    }
    
                }

                done();

            })
    })
})