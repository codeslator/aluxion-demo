import { MutationTree } from 'vuex';
import { MapStateInterface } from './state';


const mutation: MutationTree<MapStateInterface> = {
    someMutation: ( /* state: ExampleStateInterface */) => {
        // a line to prevent linter errors
    }
}


export default mutation;