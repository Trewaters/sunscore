var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var dataSet1 = new Schema({
    // [TO DO] I need to know what data will be used so I can add it to the schema
    // [NOTE] meetup API documentation ( https://secure.meetup.com/meetup_api )
    title:{type:String, trim:true}
});
    
var dataSet2 = new Schema({
    // [TO DO] I need to know what data will be used so I can add it to the schema
    title:{type:String, trim:true}
});

mongoose.model('dataSet1',dataSet1);
mongoose.model('dataSet2',dataSet2);