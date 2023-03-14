const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const onStaffCreate = functions.firestore
  .document("users/{uid}")
  .onCreate((snap, context) => {
    admin
      .auth()
      .createUser({
        uid: context.params.uid,
        email: snap.data().email,
        password: "123456",
      })
      .then(function (userRecord) {
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch(function (error) {
        console.log("Error creating new user:", error);
      });
  });

module.exports = { onStaffCreate };
