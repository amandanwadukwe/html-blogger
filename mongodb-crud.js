const { MongoClient } = require('mongodb');

class MongoDBCrud {
  constructor(uri, dbName, collectionName) {
    this.uri = uri;
    this.dbName = dbName;
    this.collectionName = collectionName;
    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async connect() {
    await this.client.connect();
    console.log('Connected to MongoDB');
  }

  async disconnect() {
    await this.client.close();
    console.log('Disconnected from MongoDB');
  }

  async insertDocument(document) {
    const collection = this.client.db(this.dbName).collection(this.collectionName);
    await collection.insertOne(document);
    console.log('Document inserted');
  }

  async findDocuments(query) {
    const collection = this.client.db(this.dbName).collection(this.collectionName);
    return await collection.find(query).toArray();
  }

  async updateDocument(query, update) {
    const collection = this.client.db(this.dbName).collection(this.collectionName);
    await collection.updateOne(query, { $set: update });
    console.log('Document updated');
  }

  async deleteDocument(query) {
    const collection = this.client.db(this.dbName).collection(this.collectionName);
    await collection.deleteOne(query);
    console.log('Document deleted');
  }
}

module.exports = MongoDBCrud;