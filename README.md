# Chatbot

Microsoft Azure Bot Services provides a powerful API for creating chatbots. Here is a reference guide to some of the key components of the API that you will need to know to create a chatbot:

## Components
1.	Bot Framework SDK - The Bot Framework SDK is a set of libraries and tools for building chatbots. It supports multiple programming languages, including C#, JavaScript, and Python.
2.	Bot Builder SDK - The Bot Builder SDK is a part of the Bot Framework SDK that provides a set of libraries for building conversational bots. It includes classes for handling intents, dialogs, and prompts.
3.	Azure Bot Service - Azure Bot Service is a platform for building, deploying, and managing chatbots. It provides a set of tools and services for creating bots, including the Bot Framework SDK, the Bot Builder SDK, and the Azure Bot Service Management API.
4.	Bot Service Management API - The Bot Service Management API is a REST API for managing Azure Bot Service resources. It provides endpoints for creating, updating, and deleting bots, as well as for managing bot channels and bot deployment.
5.	Bot Connector API - The Bot Connector API is a REST API for sending and receiving messages to and from a bot. It provides endpoints for sending messages to the bot, receiving messages from the bot, and managing conversation history.
6.	QnA Maker API - The QnA Maker API is a REST API for creating and managing QnA Maker knowledge bases. It provides endpoints for creating and updating knowledge bases, as well as for querying knowledge bases to get answers to user questions.
7.	Language Understanding (LUIS) API - The Language Understanding (LUIS) API is a REST API for building natural language understanding into your chatbot. It provides endpoints for creating and training LUIS models, as well as for querying LUIS models to extract intents and entities from user messages.
These are some of the key components of the Microsoft Azure Bot Services API that you will need to know to create a chatbot. By using these components together, you can create a chatbot that can understand natural language and engage in meaningful conversations with users.
## Creating an FAQ
To create a JavaScript chatbot for frequently asked questions using Azure Bot Service, you can follow the steps below:
1.	Create a new Azure Bot Service resource in your Azure portal. You can choose any subscription, resource group, and name for your bot.
2.	Once your bot resource is created, navigate to the "Build" section in the Azure portal and select "Web App Bot" as your bot type.
3.	Choose the appropriate options for your bot, such as the programming language (JavaScript), the bot template, and the Azure subscription you want to use.
4.	In the "Bot Management" section, select "Build" to open the Bot Framework Composer tool.
5.	In the Composer tool, you can create a new bot by clicking "New" and selecting "Frequently Asked Questions" as the bot template.
6.	Edit the FAQ bot's dialog flow by adding questions and answers to the pre-existing ones or adding new ones.
7.	You can add more functionality to your bot by integrating it with other services like LUIS or QnA Maker.
8.	Once you are done building your bot, test it using the Bot Framework Emulator to ensure that it is working as expected.
9.	Finally, deploy your bot to your Azure Bot Service resource and make it available to your users.

