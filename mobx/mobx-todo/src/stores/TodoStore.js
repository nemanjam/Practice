import {
	autorun,
	observable,
	set,
	get,
	has,
	toJS,
	runInAction,
	remove,
	values,
	entries,
	keys,
} from 'mobx';

export default class Todo {
	@observable description = '';
	@observable done = false;

	constructor(description) {
		this.description = description;
	}
}

const firstTodo = new Todo('Write Chapter');
const todos = observable.array([firstTodo]);
const todosMap = observable.map({
	'Write Chapter': firstTodo,
});

// Reactions to track changes
autorun(() => {
	console.log(`metadata present: ${has(firstTodo, 'metadata')}`);
	console.log(get(firstTodo, 'metadata'), get(firstTodo, 'user'));
	console.log(keys(firstTodo));
});
autorun(() => {
	// Arrays
	const secondTodo = get(todos, 1);
	console.log('Second Todo:', toJS(secondTodo));
	console.log(values(todos), entries(todos));
});

// Granular changes
runInAction(() => {
	set(firstTodo, 'metadata', 'new Metadata');
	set(firstTodo, { metadata: 'meta update', user: 'Pavan Podila' });
	set(todos, 1, new Todo('Get it reviewed'));
});

runInAction(() => {
	remove(firstTodo, 'metadata');
	remove(todos, 1);
});
