import {createCollection} from './setup.js';
import { accountsData } from './data.js'

function main(){
    createCollection(accountsData,'accounts')
}

main();