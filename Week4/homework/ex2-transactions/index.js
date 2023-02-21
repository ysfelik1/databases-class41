import {createCollection} from './setup.js';
import { accountsData } from './data.js'
import { transferMoney } from './transfer.js'

function main(){
    createCollection(accountsData,'accounts')
    transferMoney(101,102,1000,'Rent');
}

main();