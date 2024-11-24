## Stationery Shop Backend Mangement


### 🌐 [Live link to server](https://level-2-assignment-2-kappa.vercel.app) 🌐

## 📜 Project Overview :

- **Project Concept** :This backend provides Stationery Shop API. There we handling product api API customer order API. In this backend user can search product, buy product with revenue calculaton.
  <br/>
[Check Explanation Video](https://drive.google.com/file/d/1rzYpy6S7If-aMlqyiJlG_YlYmWByh3_P/view?usp=drive_link)

## 🛠 Technology Used : 
**TypeScript**, **Mongoose**, **MongoDB**, **Cors**, **Prettier**, **dotenv**

<br/>

## How to Clone and Run the Project Locally : 

1. **Clone the repository:**
   - First, you need to clone and open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```
2. **Open files in VS Code:**
   - After opening the **server-side** files in VS Code, install npm dependencies both file:
     ```bash
     npm install
     ```
4. **Environment setup:**
   - In your server side configure environment variables by creating a `.env` file in the root directory. Add the following variables:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb:add your mongodb url
     ```
5. **Access the server :**
  - - Check the `tsconfig.json` and check whice command add there.
    1. Live reloading for typescript code : 
    ```tarminal
        npm run start
    ```
    2. The compiled javascript entry point for production environment : 
    ```tarminal
        npm run start:prod
    ```
    3. Runs the TypeScript compiler to transpile TypeScript files into JavaScript files : 
    ```tarminal
        npm run build
    ```
    4. Lints defined coding standards and check error :
    ```tarminal
        npm run lint
    ```
    5. Automatically fix any linting errors :
    ```tarminal
        npm run lint:fix
    ```
    6. Formats code and files:
    ```tarminal
        npm run format
    ```
     

