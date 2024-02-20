# Kafka Project

This example project demonstrates how to set up a Kafka environment using JavaScript, Node.js, and Docker. It includes two Docker images: one for Zookeeper and another for Confluent's Kafka distribution (`confluentinc/cp-kafka`). This README.md file provides step-by-step instructions on how to run the Docker containers and set up a basic Kafka producer and consumer using Node.js.

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)

## Setup

1. **Clone the Repository:**

   ```bash
   git https://github.com/lifeShadow59/kafka-project.git
   cd kafka-project
   ```

2. **Start Docker Containers:**

   Run the following command to start the Zookeeper and Kafka containers:

   ```bash
   export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1) 
   ```
    ```bash
   docker-compose up -d
   ```

   This will launch the containers in the background.

3. **Install Node.js Dependencies:**

   ```bash
   npm install
   ```

## Usage

### Running the Kafka Producer

To run the Kafka producer, execute the following command:

```bash
node admin.js
```

This script will create new topics with number of partitions to the Kafka. In this example we will create <b>rider-updates</b> with <b>2</b> partition

```bash
node producer.js
```

This script will publish a sample message to the Kafka topic.

This script will prompt you to enter two words separated by a space after execution. The first word represents the rider, and the second word indicates the selected partition. If the second word is `north` the message will be sent to the 0th partition.

### Running the Kafka Consumer

To run the Kafka consumer, execute the following command:

To run the Kafka consumer, execute the following command:

```bash
node consumer.js <PARTITION_NAME>
```

Replace `<PARTITION_NAME>` with the desired partition name.

Here is an example of how to run the consumer:

```bash
node consumer.js p1
```

```bash
node consumer.js p2
```

Use the appropriate partition name as the argument when running the consumer script.

This script will subscribe to the Kafka topic and log received messages.

## Cleaning Up

To stop and remove the Docker containers, run the following command:

```bash
docker-compose down
```

## Customization

- **Kafka Configuration:**
  - You can customize the Kafka configuration by modifying the `docker-compose.yml` file.
  - Adjust environment variables, ports, and other settings as needed.

- **Node.js Code:**
  - Explore and modify the `admin.js`, `producer.js` and `consumer.js` files to suit your requirements.
  - Update the Kafka topic, message payload, or any other parameters.

## Troubleshooting

If you encounter any issues, please refer to the [Docker documentation](https://docs.docker.com/) or [Confluent Platform documentation](https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html).

## Contributors

- Abhishek Dhanani ([@lifeShadow59](https://github.com/lifeShadow59))

Feel free to contribute or open issues if you have any suggestions or encounter problems. Happy Kafka-ing!