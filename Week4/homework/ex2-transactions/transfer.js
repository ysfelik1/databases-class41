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
  
  try {
    await client.connect(); // Establish the connection before inserting data
    const session = client.startSession();
    let senderAccount, receiverAccount;
    await session.withTransaction(async () => {
      const database = client.db('databaseWeek4');
      const collection = database.collection('accounts');

      // Update sender's account
      senderAccount = await collection.findOneAndUpdate(
        { account_number: sender },
        {
          $inc: { balance: -amount },
          $push: {
            account_changes: {
              change_number: await getNextChangeNumber(sender, collection),
              amount: -amount,
              remark: remark,
              changed_date: new Date()
            }
          }
        },
        { returnOriginal: false, session }
      );

      // Update receiver's account
      receiverAccount = await collection.findOneAndUpdate(
        { account_number: receiver },
        {
          $inc: { balance: amount },
          $push: {
            account_changes: {
              change_number: await getNextChangeNumber(receiver, collection),
              amount: amount,
              remark: remark,
              changed_date: new Date()
            }
          }
        },
        { new: true, session }
      );
    });
    await session.commitTransaction();
    console.log(`$${amount} transferred from account ${sender} to account ${receiver} (${remark}).`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close(); // Always close the connection when done
  }
}

async function getNextChangeNumber(accountNumber, collection) {
  const result = await collection.aggregate([
    { $match: { account_number: accountNumber } },
    { $unwind: "$account_changes" },
    { $sort: { "account_changes.change_number": -1 } },
    { $limit: 1 },
    { $project: { "account_changes.change_number": 1, _id: 0 } }
  ]).next();

  return result ? result.account_changes.change_number + 1 : 1;
}
