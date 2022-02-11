import { MutationTree } from 'vuex';
import { UsersState } from './state';


const mutation: MutationTree<UsersState> = {
    someMutation: ( /* state: ExampleStateInterface */) => {
        // a line to prevent linter errors
    }
}


export default mutation;