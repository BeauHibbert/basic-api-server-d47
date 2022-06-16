# basic-api-server-d47

Dynamic API Phase 2: Perform CRUD Operations on a database


#### Phase 2 Requirements

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

#### Routes

- Add a Record
  - CRUD Operation: Create
  - REST Method: POST
  - Path: /food
  - Input: JSON Object in the Request Body
  - Returns: The record that was added to the database.
    - Generate an ID and attach it to the object.
    - Verify that only the fields you define get saved as a record.
- Get All Records
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /food
  - Returns: An array of objects, each object being one entry from your database.
- Get One Record
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /food/1
  - Returns: The object from the database, which has the id matching that which is in the path.
- Update A Record
  - CRUD Operation: Update
  - REST Method: PUT
  - Path: /food/1
  - Input: JSON Object in the Request Body
  - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
  - Verify that only the fields you define get saved as a record.
- Delete A Record
  - CRUD Operation: Destroy
  - REST Method: DELETE
  - Path: /food/1
  - Returns: The record from the database as it exists after you delete it (i.e. null).

#### Testing Requirements

- 404 on a bad route
- 404 on a bad method
- Create a record using POST
- Read a list of records using GET
- Read a record using GET
- Update a record using PUT
- Destroy a record using DELETE






UML:

<img width="1385" alt="Screen Shot 2022-06-15 at 8 19 06 PM" src="https://user-images.githubusercontent.com/91757275/173983976-5a99c9e2-bae6-4cf9-8ef8-a9359269c263.png">
