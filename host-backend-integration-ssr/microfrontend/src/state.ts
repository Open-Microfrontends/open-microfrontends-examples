import { reactive } from 'vue';
import {Customer} from "./types";

type State = {
    customer: Customer | null;
}

export default reactive<State>({
    customer: null,
});
