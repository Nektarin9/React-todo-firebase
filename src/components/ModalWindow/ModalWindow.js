import style from './ModalWindow.module.css';
import { UseBtnDeleteTask } from '../../hooks/UseBtnDeleteTask';
import { useState } from 'react';
import { UseBtnChangeTask } from '../../hooks/UseBtnChangeTask';

export function ModalWindow({ setModal, obj_target }) {
	const [inputChangeValue, setInputChangeValue] = useState('');
	const [inputError, setInputError] = useState(false);
	console.log(obj_target.firstChild.innerHTML);
	function changeTask() {
		if (inputChangeValue.trim() !== '') {
			UseBtnChangeTask(
				obj_target.attributes[0].textContent,
				setModal,
				inputChangeValue,
				false,
			);
		} else {
			setInputError(true);
		}
	}
	return (
		<section className={style.background_modal}>
			<div className={style.modal_container}>
				<span onClick={() => setModal(false)} className={style.close}>
					Закрыть
				</span>
				<div className={style.task}>{obj_target.firstChild.textContent}</div>
				<div className={style.bnt_container}>
					<input
						onChange={({ target }) => setInputChangeValue(target.value)}
						placeholder="Изменить задачу"
						type="text"
						className={
							inputError
								? `${style.input_change} ${style.input_add_error}`
								: style.input_change
						}
					></input>
					<button onClick={changeTask} className={style.btn_task}>
						Изменить
					</button>
					<button
						className={style.btn_task_completed}
						onClick={() =>
							UseBtnChangeTask(
								obj_target.attributes[0].textContent,
								setModal,
								obj_target.firstChild.textContent,
								true,
							)
						}
					>
						Выполнено
					</button>
					<button
						className={style.btn_task_completed_false}
						onClick={() =>
							UseBtnChangeTask(
								obj_target.attributes[0].textContent,
								setModal,
								obj_target.firstChild.textContent,
								false,
							)
						}
					>
						Не выполнено
					</button>

					<button
						onClick={() =>
							UseBtnDeleteTask(
								obj_target.attributes[0].textContent,
								setModal,
							)
						}
						className={style.btn_task_del}
					>
						Удалить
					</button>
				</div>
			</div>
		</section>
	);
}
