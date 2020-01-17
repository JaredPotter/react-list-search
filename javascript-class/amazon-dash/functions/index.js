const functions = require('firebase-functions');

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccount.json");
const cors = require('cors')({origin: true});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dash-8a979.firebaseio.com"
});

console.log('Function Started!');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log('helloWorld() CALLED!');

    cors(request, response, () => {
        const authorization = request.get("authorization");
        const tokenId = authorization ?  authorization.split('Bearer ')[1] : '';

        if(!tokenId) {
            response.send('AUTHORIZATION NOT PASSED!');
            return;
        }

        admin.auth().verifyIdToken(tokenId)
            .then((decoded) => response.status(200).send('FUCK YEAH!'))
            .catch((err) => response.status(401).send(err));   

        return;

        // admin.auth().getUser(uid)
        //     .then((userRecord) => {
        //     // See the UserRecord reference doc for the contents of userRecord.
        //         console.log('Successfully fetched user data:', userRecord.toJSON());
        //         response.send("Hello from Firebase!");
        //         return null;
        //     })
        //     .catch((error) => {
        //         response.send("ACCESS DENIED!");
        //         console.log('Error fetching user data:', error);
        //     });         
        // response.send('here!');
    });
});
