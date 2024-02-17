import style from './showTasks.module.css';

export function ShowTasks({ str, tasks, stateBtnSort }) {
	let array = [];
	let sortArray = [...Object.entries(tasks)];
	if (stateBtnSort) {
		sortArray.sort((a, b) => {
			if (a[1].title < b[1].title) {
				return -1;
			}
			if (a[1].title > b[1].title) {
				return 1;
			}
			return 0;
		});
	}

	if (stateBtnSort) {
		for (let i = 0; i < sortArray.length; i++) {
			if (sortArray[i][1].title.toLowerCase().includes(str.toLowerCase())) {
				array.push(sortArray[i]);
			}
		}
	} else {
		for (let i = 0; i < Object.entries(tasks).length; i++) {
			if (
				Object.entries(tasks)
					[i][1].title.toLowerCase()
					.includes(str.toLowerCase())
			) {
				array.push(Object.entries(tasks)[i]);
			}
		}
	}
	return array.map((item) => (
		<div
			key={item[0]}
			id={item[0]}
			className={
				item[1].completed
					? `${style.task} ${style.task_completed_true}`
					: `${style.task} ${style.task_completed_false}`
			}
		>
			{item[1].title}
		</div>
	));
}
