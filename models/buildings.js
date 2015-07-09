var mongoose = require('mongoose');
module.exports = mongoose.model('Buildings', {
    id: {type:String},
    agent: {
        name: {type:String},
        email: {type:String},
        phone: {type:String},
        company: {type:String}

    },
    name: {type:String},
    description: {type:String},
    image: {type:String},
    rate: {type:String},
    minsize: {type:String},
    maxsize: {type:String},
    location: {
      lat: {type:String},
      long: {type:String},
      area: {type:String},
      address1: {type:String},
      address2: {type:String},
      postal: {type:String},  
      city: {type:String},
      country: {type:String}
    },
    listing: {
        listingid: {type:String}, 
        size: {type:String},
        price: {type:String},
        dateposted: {type:Date},
        listingImage: {type:Array},
        details: {type:String},
        type: {type:String},
        leaseTerm: {type:String}
    }
});