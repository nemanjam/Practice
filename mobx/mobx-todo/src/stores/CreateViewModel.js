import { createViewModel } from 'mobx-utils';
import { autorun, observable } from 'mobx';
import { asComponent } from '../utils/asComponent';

export const CreateViewModelExample = asComponent(() => {
	class FormData {
		@observable name = '<Unnamed>';
		@observable email = '';
		@observable favoriteColor = '';
	}

	const viewModel = createViewModel(new FormData());

	autorun(() => {
		console.log(
			`ViewModel: ${viewModel.name}, Model: ${viewModel.model.name}, Dirty: ${viewModel.isDirty}`
		);
	});

	viewModel.name = 'Pavan';
	viewModel.email = 'pavan@pixelingene.com';
	viewModel.favoriteColor = 'orange';

	console.log('About to reset...');
	viewModel.reset();

	viewModel.name = 'MobX';

	console.log('About to submit...');
	viewModel.submit();
});
