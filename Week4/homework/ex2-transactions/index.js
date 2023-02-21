import {createCollection} from './setup.js';
import { accountsData } from './data.js'
import { transferMoney } from './transfer.js'

async function main() {
    await createCollection(accountsData,'accounts')
    await transferMoney(101,102,1000,'Rent');
}

main();