import firebase from './firebase';

const responseMessage = require('../utils/resposneMessage');

interface Request {
  body: User
  method: string;
}

const collection : string = 'users'

const requestManager = async ({ body: { name, email, address, phone, age, id }, method  }: Request) => {
  try {
    switch (method) {
      case 'GET':
        const snapshot = await firebase.database.collection(collection).get();
        const users = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data()
        }));

        return responseMessage(200, method, 'User Obtained Succesfully.', users);
      case 'POST':
        await firebase.database.collection(collection).add({
          address,
          age,
          email,
          name,
          phone,
        });

        return responseMessage(200, method, 'User Added Succesfully.');
      case 'PUT':
        const userLocation = firebase.database.collection(collection).doc(id);

        await userLocation.set({
          name,
          email,
          address,
          phone,
          age,
        })

        return responseMessage(200, method, 'User Updated Succesfully.');
      case 'DELETE':
        await firebase.database.collection(collection).doc(id).delete();

        return responseMessage(200, method, 'User Deleted Succesfully.');
    }
  } catch (error) {
    console.log(error);

    return {};
  }
};

module.exports = {
  requestManager
};
