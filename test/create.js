const chai = require('chai');
const chaiHttp = require(`chai-http`);
const config = require(`../config`);
let server = require('../server');

chai.should();
chai.use(chaiHttp);


describe('POST DATA', () => {


    it("POST add cosmetics Data ", done => {
        let cosmetic =     {
            Label : "Face Mask",
            Brand : "DR. BRANDT SKINCARE",
            Name : "MAGNETIGHT™ Age-Defier Mask Bundle",
            Price: 75,
            Rank : 4,
            Ingredients: "PoreDermabrasion Pore Perfecting Exfoliator: Water, Alumina, Glycerin, Butylene Glycol, Lactobacillus Ferment, Carica Papaya (Papaya) Fruit Extract, Carbomer, Methyl Gluceth-20, Lens Esculenta (Lentil) Fruit Extract, Microcitrus Australasica Fruit Extract, Lactobacillus/Pumpkin Fruit Ferment Filtrate, Amyris Balsamifera Bark Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Eugenia Caryophyllus (Clove) Leaf Oil, Jasminum Officinale (Jasmine) Oil, Lavandula Angustifolia (Lavender) Oil, Citrus Limon (Lemon) Peel Oil, Mentha Piperita (Peppermint) Oil, Rosa Damascena Flower Oil, Caprylic/Capric Triglyceride, Allantoin, Xanthan Gum, Sodium Hyaluronate, Salicylic Acid, Methyl Methacrylate Crosspolymer, Alcohol Denat., Sodium Hydroxide, Leuconostoc/Radish Root Ferment Filtrate, Phenoxyethanol, Ethylhexylglycerin, Iron Oxide (Ci 77491), Sodium Oxide. MAGNETIGHT Age-Defier™: Iron Powder, Dimethicone, Polysilicone-11, Nylon-12, C12-15 Alkyl Benzoate, Silica, Tribehenin, Polymethylsilsesquioxane, Peg-10 Dimethicone, Polysorbate 40, Hdi/Trimethylol Hexyllactone Crosspolymer, Ceramide Ng, Peg-10 Phytosterol, Tourmaline, Lavandula Angustifolia (Lavender) Oil, Isohexadecane, Ammonium Polyacryloyldimethyl Taurate, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Palmitoyl Hexapeptide-12, Pelargonium Graveolens (Geranium) Flower Oil, Dimethylmethoxy Chromanol, Anthemis Nobilis (Chamomile) Flower Oil, Limonene, Linalool, Citronellol, Geraniol. Pores No More Pore Refiner Primer: Cyclopentasiloxane, Dimethicone Crosspolymer, Methyl Methacrylate Crosspolymer, Lauryl Peg/Ppg-18/18 Methicone, Peg/Ppg-18/18 Dimethicone, Cyclotetrasiloxane, Magnesium Silicate, Calcium Aluminum Borosilicate, Dimethicone/Vinyl Dimethicone Crosspolymer, Linum Usitatissimum (Linseed) Seed Extract, Dimethyl Oxobenzo Dioxasilane, Ethylhexyl Palmitate, Phenoxyethanol, Lavandula Angustifolia (Lavender) Oil, Silica Dimethyl Silylate, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Silica, Triethoxycaprylylsilane, Caprylyl Glycol, Propylene Glycol, Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491, Ci 77492, Ci 77499).",
            Combination: 1,
            Dry: 1,
            Normal: 1,
            Oily: 1,
            Sensitive: 1
        }
        chai.request(server)
        .post(`/add/`)
        .send(cosmetic)
        .end((err,res)=>{
        
            res.should.have.status(201);

            res.body.Data.should.have.property("id")
            res.body.Data.should.have.property("Label").eq(cosmetic.Label)
            res.body.Data.should.have.property("Brand").eq(cosmetic.Brand)
            res.body.Data.should.have.property("Name").eq(cosmetic.Name)
            res.body.Data.should.have.property("Ingredients").eq(cosmetic.Ingredients)
            res.body.Data.should.have.property("Price").eq(cosmetic.Price)
            
            done();
        
        })
    })

    it("POST multiple cosmetics Data ", done => {
        let cosmeticArr =     [
            {
                "Label": "Sun protect",
                "Brand": "KIEHL'S SINCE 1851",
                "Name": "Powerful Wrinkle Reducing Cream Sunscreen Broad Spectrum SPF 30",
                "Price": 74,
                "Rank": 3.5,
                "Ingredients": "Water Glycerin, Cetearyl Alcohol, Isohexadecane, Glyceryl Stearate, Cyclohexasiloxane, Isononyl Isononanoate, Shea Butter, Peg-100 Stearate, Ceteareth-20, Phenoxyethanol, Butylene Glycol, Ammonium Polyacryloyldimethyl Taurate, Caprylyl Glycol, Tocopherol, Chlorphenesin, Xanthan Gum, Disodium Edta, P-Anisic Acid, Calcium Pca, Adenosine, Copper Pca, Alteromonas Ferment Extract, Corallina Officinalis Extract, Citric Acid, Sodium Hydroxide.",
                "Combination": 1,
                "Dry": 1,
                "Normal": 1,
                "Oily": 1,
                "Sensitive": 1
            },
            {
                "Label": "Sun protect",
                "Brand": "COOLA",
                "Name": "Mineral Face SPF 30 - Cucumber Matte",
                "Price": 36,
                "Rank": 4.4,
                "Ingredients": "Aluminum Hydroxide, Butyrospermum Parkii (Organic Shea Butter), Cucumis Sativus (Organic Cucumber) Fruit Extract, Cyclopentasiloxane, Dimethicone Crosspolymer, Glycerin (Organic), Hydrogen Dimethicone, Isopropyl Myristate, Linum Usitatissimum (Organic Linseed) Seed Oil, Oenothera Biennis (Organic Evening Primrose) Oil, Plankton Extract, Polyamide-5, Polysilicone-11, Propylene Carbonate, Rosa Canina (Organic Rose Hip) Fruit Oil, Silica Silylate, Stearalkonium Hectorite.",
                "Combination": 1,
                "Dry": 0,
                "Normal": 1,
                "Oily": 1,
                "Sensitive": 1
            },
            {
                "Label": "Sun protect",
                "Brand": "KIEHL'S SINCE 1851",
                "Name": "Super Multi-Corrective Cream Sunscreen Broad Spectrum SPF 30",
                "Price": 84,
                "Rank": 3.5,
                "Ingredients": "Water, Glycerin, Dimethicone, Glyceryl Stearate, Hydroxypropyl Tetrahydropyrantriol, Silica, Peg-100 Stearate, Propylene Glycol, Euphorbia Cerifera (Candelilla) Wax, Phenoxyethanol, Ammonium Polyacryloyldimethyl Taurate, Stearic Acid, Dicaprylyl Carbonate, Cetyl Alcohol, Palmitic Acid, Capryloyl Salicylic Acid, Caprylyl Glycol, Xanthan Gum, Dimethicone/Vinyl Dimethicone Crosspolymer, Fragrance, Disodium EDTA, Tocopherol, Sodium Hyaluronate, Adenosine, Linalool, Sodium Hydroxide, Jasminum Officinale (Jasmine) Flower Extract, Citronellol, Geraniol, Citral, Benzyl Alcohol, Citric Acid.",
                "Combination": 1,
                "Dry": 1,
                "Normal": 1,
                "Oily": 1,
                "Sensitive": 1
            },
            {
                "Label": "Sun protect",
                "Brand": "LA MER",
                "Name": "The Broad Spectrum SPF 50 UV Protecting Fluid",
                "Price": 95,
                "Rank": 4.7,
                "Ingredients": "Avobenzone 3.00%, Homosalate 5.00%, Octisalate 5.00%, Octocrylene 2.70%, Oxybenzone 3.00%, Water, Butyloctyl Salicylate, Methyl Trimethicone, Neopentyl Glycol Diheptanoate, Aleurites Moluccana (Kukui) Seed Oil, Lauryl Peg-9 Polydimethylsiloxyethyl Dimethicone, Peg-100 Stearate, Butylene Glycol, Glyceryl Stearate, Dipentaerythrityl Tri-Polyhydroxystearate, Potassium Cetyl Phosphate, Algae (Seaweed) Extract, Sesamum Indicum (Sesame) Seed Oil, Medicago Sativa (Alfalfa) Seed Powder, Helianthus Annuus (Sunflower) Seedcake, Prunus Amygdalus Dulcis (Sweet Almond) Seed Meal, Eucalyptus Globulus (Eucalyptus) Leaf Oil, Sodium Gluconate, Copper Gluconate, Calcium Gluconate, Magnesium Gluconate, Zinc Gluconate, Tocopheryl Succinate, Niacin, Sesamum Indicum (Sesame) Seed Powder, Laminaria Ochroleuca Extract, Malachite, Caffeine, Sorbitol, Sodium Hyaluronate, Cetyl Alcohol, Stearic Acid, Vp/Eicosene Copolymer, Ethylhexylglycerin, Saccharide Isomerate, Caprylic/Capric Triglyceride, Caprylyl Glycol, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Dehydroxanthan Gum, Sodium Dehydroacetate, Citric Acid, Tourmaline, Styrene/Acrylates Copolymer, Silica, Peg-8 Laurate, Fragrance, Disodium Edta, Phenoxyethanol, Limonene, Geraniol, Hydroxycitronellal, Linalool, Citronellol, Mica, Green 5 (Ci 61570), Titanium Dioxide (Ci 77891)",
                "Combination": 0,
                "Dry": 0,
                "Normal": 0,
                "Oily": 0,
                "Sensitive": 0
            },
            {
                "Label": "Sun protect",
                "Brand": "SUPERGOOP!",
                "Name": "Supergoop! x Milly Defense Refresh Setting Mist Broad Spectrum Sunscreen SPF 50",
                "Price": 28,
                "Rank": 3.7,
                "Ingredients": "Visit the Supergoop! boutique",
                "Combination": 1,
                "Dry": 1,
                "Normal": 1,
                "Oily": 1,
                "Sensitive": 1
            },
            {
                "Label": "Sun protect",
                "Brand": "COOLA",
                "Name": "Daydream™ Mineral Primer SPF 30",
                "Price": 42,
                "Rank": 4.2,
                "Ingredients": "Alumina, Cyclopentasiloxane, Dimethicone, Dimethicone/Vinyl, Dimethicone Crosspolymer, Hexyl Laurate, Iris Pallida Leaf Cell Extract, Isododecane, Lonicera Japonica Callus Extract, Mica, Nymphaea Alba Leaf Cell Extract, PEG-10 Dimethicone, Polyglyceryl-4 Isostearate, Polysilicone-11, Silica, Stearic Acid, Titanium Dioxide, Trimethylsiloxysilicate.",
                "Combination": 1,
                "Dry": 0,
                "Normal": 1,
                "Oily": 1,
                "Sensitive": 1
            },
            {
                "Label": "Sun protect",
                "Brand": "SHISEIDO",
                "Name": "Ultimate Sun Protection Spray Broad Spectrum SPF 50+ For Face/Body",
                "Price": 36,
                "Rank": 4.2,
                "Ingredients": "-Rose Apple Leaf Extract: Counteracts oxidation, the process which accelerates skin aging, and helps prevent DNA damage caused by UV rays. -Super-Veil 360: Provides extreme skin protection; allows sunscreen to fit perfectly on the uneven surface of the skin providing high protection from UV rays at all angles. -Profense CEL: Supports natural protection of cells and DNA from UV damage by supporting enzyme activity which is the cause of future uneven skin tone and wrinkles. -Xylitol: Helps keep skin soft and healthy-looking. -Avobenzone 3%, Homosalate 15%, Octisalate 5%, Octocrylene 2.5%, Oxybenzone 5%: Provide sun protection properties.",
                "Combination": 0,
                "Dry": 0,
                "Normal": 0,
                "Oily": 0,
                "Sensitive": 0
            },
            {
                "Label": "Sun protect",
                "Brand": "SHISEIDO",
                "Name": "Ultimate Sun Protection Lotion WetForce SPF 50+ Mini",
                "Price": 22,
                "Rank": 5,
                "Ingredients": "Water, Dimethicone, SD Alcohol 40-B, Talc, Methyl Methacrylate Crosspolymer, Isododecane, Cetyl Ethylhexanoate, Diisopropyl Sebacate, Triethylhexanoin, Lauryl PEG-9 Polydimethylsiloxyethyl Dimethicone, Glycerin, Dextrin Palmitate, Sucrose Tetrastearate Triacetate, Polybutylene Glycol/PPG-9/1 Copolymer, Trimethylsiloxysilicate, Xylitol, Silica, Sodium Chloride, PEG/PPG-14/7 Dimethyl Ether, Saxifraga Sarmentosa Extract, Sophora Angustifolia Root Extract, Disteardimonium Hectorite, Isostearic Acid, Calcium Stearate, Trisodium EDTA, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Alcohol, BHT, Butylene Glycol, Stearic Acid, Sodium Metabisulfite, Syzygium Jambos Leaf Extract, Tocopherol, Polysilicone-2, Methylparaben, Fragrance, Iron Oxides.",
                "Combination": 1,
                "Dry": 1,
                "Normal": 1,
                "Oily": 1,
                "Sensitive": 1
            }
        ]
        chai.request(server)
        .post(`/add/all`)
        .send(cosmeticArr)
        .end((err,res)=>{
        
            res.should.have.status(201);
            res.body.Data.should.be.a('array');
            done();
        
        })
    })

})