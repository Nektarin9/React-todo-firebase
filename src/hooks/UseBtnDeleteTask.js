import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export function UseBtnDeleteTask(id, setModal) {
	const removeTask = ref(db, `tasks/${id}`);
	remove(removeTask)
		.then(() => {
			setModal(false);
		})
		.catch((error) => {
			console.error(error);
		});
}
