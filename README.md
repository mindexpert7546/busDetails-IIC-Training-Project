# BusDetails Project

## Overview
The BusDetails project is a comprehensive solution designed to streamline the management of bus operations for administrators. This platform enables efficient handling of bus information, including adding, deleting, updating, and viewing bus details. Built with a robust tech stack, the project utilizes Groovy and Grails for server-side operations, Angular for the frontend UI, and MySQL for database management.
## Some Screenshot 
![Screenshot (17)](https://github.com/mindexpert7546/busDetails-IIC-Training-Project/assets/89348788/c2ec9f9c-794d-4b17-ab21-4448c4a0855c)
![Screenshot (14)](https://github.com/mindexpert7546/busDetails-IIC-Training-Project/assets/89348788/5a0815bf-000e-4165-8abb-d7545442d71e)
![Screenshot (15)](https://github.com/mindexpert7546/busDetails-IIC-Training-Project/assets/89348788/3a6cfe7d-54fe-43a3-96cb-b50e328e2629)
![Screenshot (16)](https://github.com/mindexpert7546/busDetails-IIC-Training-Project/assets/89348788/5111b461-70f1-4634-90f0-b607e31579be)
## Features
- **Add Bus**: Admins can add new bus entries to the system, including details like bus number, route, and timings.
- **Delete Bus**: Allows for the removal of bus entries from the database.
- **Update Bus Details**: Admins can modify existing bus information to ensure data is current.
- **View Bus Details**: Comprehensive view functionality for browsing through bus information.

## Technology Stack
- **Backend**: Groovy + Grails
- **Frontend**: Angular
- **Database**: MySQL

## Branches Overview
- `main`: Contains the overall project documentation and general information.
- `dev1`: Dedicated to the backend API code developed with Groovy and Grails.
- `devUI`: Focuses on the Angular-based UI code, showcasing frontend development efforts.

## Getting Started

## Prerequisites
Before you can run the BusDetails project locally, ensure you have the following installed:

- **Git**: Essential for cloning the repository and managing version control. [Download Git](https://git-scm.com/downloads).
- **Java**: Required for running Groovy and Grails. The project is compatible with Java 8. [Download Java](https://www.java.com/en/download/).
- **Groovy**: The project uses Groovy version 2.4.7 for server-side scripting. Groovy runs on the JVM, so make sure Java is installed first. [Download Groovy](https://groovy.apache.org/download.html).
- **Grails**: A powerful web application framework based on Groovy. This project uses Grails version 3.2.6. [Download Grails](https://grails.org/download.html).
- **JVM**: Ensure you have the Java Virtual Machine (JVM) version 1.8.0_181 installed, as it's required for Groovy and Grails.
- **Node.js and npm**: The project's frontend is developed with Angular, which requires Node.js and npm (Node Package Manager) for dependencies management and to run the development server. [Download Node.js and npm](https://nodejs.org/en/download/).
- **MySQL**: The project uses MySQL for its database. Ensure you have MySQL installed and properly set up. [Download MySQL](https://dev.mysql.com/downloads/mysql/).

After installing these prerequisites, you're ready to set up and run the project locally.

### Setup
1. **Clone the repository**

   ```bash
   git clone https://github.com/mindexpert7546/busDetails-IIC-Training-Project.git

### a.Navigate to the project directory
```bash
   cd busDetails-IIC-Training-Project
```
### b.Switch to the backend branch (`dev1`) and set up the server-side
```bash
 git checkout dev1
```
### Switch to the frontend branch (`devUI`) and set up the UI
```bash
 git checkout devUI
```
# Running the Application
## Backend
### Navigate to the backend directory and run:
```bash
 ./grailsw run-app
```
## Frontend
### Navigate to the frontend directory and run:
```bash
 npm start

