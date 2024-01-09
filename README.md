# AI-Test-Generation-Bot

● Accepts multiple PDF files as input.

● Extracts relevant information and creates vector embeddings using Google
embeddings model and stores it in a vector database(Pinecone, Chroma etc).

● Generates objective or subjective test questions along with answers based on
user-specified topics, chapters, subjects, or class level through LLM+Semantic search
on the vector embeddings.

##Specific Requirements:

#PDF Processing:

● Implement robust PDF parsing techniques to extract text and structure accurately.

● Handle diverse PDF formats and layouts effectively.
Embedding Generation:

● Utilize any embedding model(like Google’s latest 001 model) understanding
capabilities to create comprehensive text embeddings.

● Integrate Langchain for semantic knowledge graph construction and reasoning.

● Incorporate Google embeddings for additional semantic context.


#Test Question Generation:

● Develop algorithms through function calling to generate diverse and challenging test
questions aligned with specified topics and difficulty levels.

● Ensure questions are grammatically correct and semantically meaningful.

● Offer the ability to create both objective (multiple choice, true/false, fill-in-the-blank)
and subjective (essay-style) questions.


#User Interface:

Design an intuitive interface for:

● Uploading PDF files.

● Specifying topics, chapters, subjects, and class levels.

● Generating and viewing test questions..

● Potentially exporting generated tests as PDF or other formats.


#Evaluation Criteria:

● Accuracy of PDF processing and information extraction

● Quality of generated embeddings, capturing key concepts and relationships

● Relevance, clarity, and grammatical correctness of generated test questions

● Diversity of question types and difficulty levels

● Usability and intuitiveness of the user interface

● Ability to handle different type of content through PDF


#Technologies Required:

● Gemini Pro or any similar language learning model

● Langchain framework

● Google embeddings

● Vector database(Pinecone)

● PDF parsing libraries

● User interface development framework (React)
