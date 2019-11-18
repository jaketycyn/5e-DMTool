import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import Card from "./Design/Card";

function ShowNpcs() {
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    //Creates array of documents within Shopping List DB
    // const user = firebase.auth().currentUser.uid;

    const unsubscribe = db
      .collection("Npc")
      // .where("list", "==", false)
      // .where("userId", "==", user)
      // .orderBy("timestamp")
      .onSnapshot(snapshot => {
        const newNpcs = snapshot.docs.map(childNodes => ({
          id: childNodes.id,
          ...childNodes.data()
          // add a time aspect that we can than use for sorting inately by time on order.
          // since on the internal end index is constantly changing in firebase
        }));
        setNpcs(newNpcs);
      });
    return () => unsubscribe();
  }, []);
  return npcs;
}
const ShowCharacters = () => {
  // *** FOR RETREIVING ONE DOCUMENT IN PARTICULAR ***
  // npcRef
  //   .doc("ijqzXTnFQWT50cyVblLX")
  //   .get()
  //   .then(function(doc) {
  //     if (doc.exists) {
  //       console.log("Document Data:", doc.data());
  //     } else {
  //       console.log("no such document found");
  //     }
  //   })
  //   .catch(function(error) {
  //     console.log("Error getting document:", error);
  //   });

  // *** FOR RETRIEVING ALL DOCUMENTS IN DB ***
  // let npcRef = db.collection("Npc");
  // npcRef.get().then(function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // });

  return (
    <div>
      {ShowNpcs().map(npc => (
        <div key={npc.id}>
          {/* <ul>{npc.npcName}</ul>
          <li>{npc.npcRace}</li>
          <li>{npc.npcProfession}</li> */}
          <Card
            {...npc}
            // npcBackground={}
          />
        </div>
      ))}
    </div>
  );
};
export default ShowCharacters;
