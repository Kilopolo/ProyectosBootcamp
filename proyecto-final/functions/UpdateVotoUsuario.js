import { firestore } from "../database/firebase";
import { doc, updateDoc, collection, query, where, getDoc } from "@firebase/firestore";

const UpdateVotoUsuario = async (userId,haVotado) => {
  try {
    // // const userRef = doc(collection(firestore, "usuarios"), userId);
    // // const userSnapshot = await getDoc(userRef);
    // const querySnapshot = await getDoc(
    //     query(collection(firestore, "citizens"), where("usuario_id", "==", userId))
    //   );

    // if (querySnapshot.exists()) {
    //   // Actualiza el campo 'voto' a true para el usuario específico
    //   await updateDoc(userRef, { voto: haVotado });

    //   console.log(`Estado de voto actualizado para el usuario con ID ${userId}`);

    const q = query(collection(firestore, "citizens"), where("usuario_id", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (doc) => {
        const citizenRef = doc.ref;
        await updateDoc(citizenRef, { voto: haVotado });

        console.log(`Estado de voto actualizado para el usuario con ID ${userId}`);
      });

    } else {
      console.log("No se encontró el usuario con el ID proporcionado");
    }
  } catch (error) {
    console.error("Error actualizando estado de voto:", error);
    throw error;
  }
};

export default UpdateVotoUsuario;
