const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  await admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider-updates]");
  // await admin.deleteTopics({ topics: ["rider-updates"], timeout: 3000 });
  console.log(await admin.listTopics());
  console.log("Topic Deleted Success [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
        
      },
    ],
  });
  console.log("Topic Created Success [rider-updates]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();