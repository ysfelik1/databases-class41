const dotenv = await import('dotenv');
dotenv.config();
import { MongoClient } from 'mongodb';

export async function transferMoney(sender, receiver, amount, remark) {

    if (process.env.MONGODB_URL == null) {
        throw Error(`Can not connect mongoDB. Check the connection statement.`);
    }

    const client = new MongoClient(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const session = client.startSession();
    try {
        await client.connect(); // Establish the connection before inserting data

        const database = client.db('databaseWeek4');
        const collection = database.collection(`accounts`);

        const senderAccount=collection.find({ account_number: sender }).toArray();
        const receiverAccount=collection.find({ account_number: sender }).toArray();

        await session.withTransaction(async () => {
            //update balances
            await collection.updateOne(
                { account_number: sender },
                {$inc: { balance: -amount } }
            );

            await collection.updateOne(
                { account_number: receiver },
                {$inc: { balance: amount } }
            );

            console.log(
                `$${amount} transferred from account ${sender} to account ${receiver} (${remark}). `
            );
        });

    } catch (error) {
        console.log(error);
    } finally {
        session.endSession();
        await client.close(); // Always close the connection when done
    }

}

transferMoney(101,102,1000,'Rent');