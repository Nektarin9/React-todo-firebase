import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export function UseBtnChangeTask(id, setModal, inputChangeValue, taskСompleted) {
	const updateTask = ref(db, `tasks/${id}`);

	set(updateTask, {
		title: inputChangeValue,
		completed: taskСompleted,
	})
		.then(() => {
			setModal(false);
		})
		.catch((error) => {
			console.error(error);
		});
}
