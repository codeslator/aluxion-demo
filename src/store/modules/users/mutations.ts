import { MutationTree } from 'vuex';
import { UsersStateInterface } from './state';


const mutation: MutationTree<UsersStateInterface> = {
    someMutation: ( /* state: ExampleStateInterface */) => {
        // a line to prevent linter errors
    }
}


export default mutation;