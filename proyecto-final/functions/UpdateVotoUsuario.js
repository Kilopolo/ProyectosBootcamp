import { firestore } from "../database/firebase";
import { doc, updateDoc, collection, query, where, getDocs } from "@firebase/firestore";

const UpdateVotoUsuario = async (userId,haVotado) => {
  try {
    const userRef = doc(collection(firestore, "usuarios"), userId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      // Actualiza el campo 'voto' a true para el usuario específico
      await updateDoc(userRef, { voto: haVotado });

      console.log(`Estado de voto actualizado para el usuario con ID ${userId}`);
    } else {
      console.log("No se encontró el usuario con el ID proporcionado");
    }
  } catch (error) {
    console.error("Error actualizando estado de voto:", error);
    throw error;
  }
};

export default UpdateVotoUsuario;
