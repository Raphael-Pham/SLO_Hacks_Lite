const {MongoClient} = require('mongodb');

const url = "mongodb+srv://raphaelpham14:thisisthebestpassword@food-cluster.0cgkh.mongodb.net/Food-Indecision?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "slo_hacks_lite";

async function run() {
   try {
      await client.connect();
      console.log("Connected correctly to the server.");

      const db = client.db(dbName);
      const colGroceries = db.collection("groceries");
      const colIngredients = db.collection("ingredients");
      
      // Insert here:
      

   } catch (e) {
      console.log(e.stack);
   }

   finally {
      await client.close();
   }
}
run().catch(console.error);

async function addItems(client, collection, newItems){
   const result = await client.db("slo_hacks_lite").collection(collection).insertMany(newItems);

   console.log('${result.insertedCount} new items created with the following id(s):');
   console.log(result.insertedIds);
}
async function addItem(client, collection, newItem){
   const result = await client.db("slo_hacks_lite").collection(collection).insertOne(newItem);
   console.log('New listing created with the following id: ${result.insertedId}');
}