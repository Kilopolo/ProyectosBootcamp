import { firestore } from "../database/firebase";
import { collection, get, getDocs, getDoc ,doc,query, where,updateDoc } from "@firebase/firestore";

const UpdateVotos = async (partyId, newVotes) => {
  try {
    // const partyRef = doc(firestore, "parties", partyId);
    const docRef = doc(collection(firestore, "parties"), partyId);
    const docSnapshot = await getDoc(docRef);

    // Obtiene los datos del partido específico
    // const partySnapshot = await docRef.get();

    if (docSnapshot.exists()) {
      // Obtiene el valor actual de votos y actualiza con los nuevos votos
      const currentVotes = docSnapshot.data().votos || 0;
      const updatedVotes = newVotes;

      // Actualiza el campo 'votos' en Firestore
      await updateDoc(docRef, { votos: updatedVotes });

      console.log(`Votos actualizados para el partido con ID ${partyId}`);
    } else {
      console.log("No se encontró el partido con el ID proporcionado");
    }
  } catch (error) {
    console.error("Error actualizando votos:", error);
    throw error;
  }
};

export default UpdateVotos;
