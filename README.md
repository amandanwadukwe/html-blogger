# MongoDB CRUD Operations Module
MongoDB CRUD Operations Module is a Node.js module designed to simplify MongoDB CRUD operations. With a focus on ease of use and efficient handling of operations, this module can be integrated seamlessly into your Node.js applications.

## Installation
```bash
npm install mongodb-crud
```

## Usage

### Connecting to MongoDB

```javascript
const MongoDBCrud = require('mongodb-crud');

// Replace with your MongoDB URI, database name, and collection name
const mongo = new MongoDBCrud('your-mongodb-uri', 'your-db-name', 'your-collection-name');

async function connectAndPerformOperations() {
  await mongo.connect();

  // Perform CRUD operations here

  await mongo.disconnect();
}

connectAndPerformOperations();
```

### Inserting Documents
```javascript
const newBlog = { title: 'New Blog', content: 'Lorem ipsum...' };
await mongo.insertDocument(newBlog);
```

### Finding Documents
```javascript
const blogs = await mongo.findDocuments({});
console.log('Found Blogs:', blogs);
```

### Updating Documents
```javascript
const query = { title: 'New Blog' };
const update = { $set: { content: 'Updated content!' } };
await mongo.updateDocument(query, update);
```

### Deleting Documents
```javascript
const query = { title: 'New Blog' };
await mongo.deleteDocument(query);
```

## Configuration

### MongoDBCrud Class

```javascript
const MongoDBCrud = require('mongodb-crud');

// Replace with your MongoDB URI, database name, and collection name
const mongo = new MongoDBCrud('your-mongodb-uri', 'your-db-name', 'your-collection-name');
```

## Methods
* connect(): Establishes a connection to MongoDB.
* disconnect(): Closes the connection to MongoDB.
* insertDocument(document): Inserts a document into the collection.
* findDocuments(query): Finds documents in the collection based on the query.
* updateDocument(query, update): Updates documents in the collection based on the query.
* deleteDocument(query): Deletes documents from the collection based on the query.

## License
This project is licensed under the MIT License - see the LICENSE file for details.