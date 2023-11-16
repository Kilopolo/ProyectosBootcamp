import { firestore } from "../database/firebase";
import { doc, updateDoc } from "@firebase/firestore";

const UpdateVotos = async (partyId, newVotes) => {
  try {
    const partyRef = doc(firestore, "parties", partyId);

    // Obtiene los datos del partido específico
    const partySnapshot = await partyRef.get();

    if (partySnapshot.exists()) {
      // Obtiene el valor actual de votos y actualiza con los nuevos votos
      const currentVotes = partySnapshot.data().votos || 0;
      const updatedVotes = currentVotes + newVotes;

      // Actualiza el campo 'votos' en Firestore
      await updateDoc(partyRef, { votos: updatedVotes });

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
