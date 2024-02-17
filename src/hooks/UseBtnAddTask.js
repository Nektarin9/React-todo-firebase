import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export function UseAddTasks(newTask, setErrorNewTask) {
	if (newTask.trim()) {
		const dbRef = ref(db, 'tasks');

		push(dbRef, {
			title: newTask,
			completed: false,
		})
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	} else {
		setErrorNewTask(true);
	}
}
