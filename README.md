# Certificate App

This project is a Certificate Generator App built with React and Tailwind CSS. It dynamically fetches certificate details from an API and renders a certificate that is fully responsive and styled using Tailwind CSS.

## Features

- Fetches certificate data from an API
- Responsive design using Tailwind CSS
- Displays a loading screen while fetching data
- Shows an error page if the data cannot be loaded
- 404 page for unmatched routes

## Tech Stack

- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - Promise-based HTTP client for the browser and Node.js
- **React Router** - Library for routing in React applications

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SherinAnees/certificate-app.git
   cd certificate-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Add Environment Variables:

   This project uses environment variables to manage API URLs. You need to create a `.env` file in the root of the project with the following content:

   ```env
   REACT_APP_BASE_URL=https://mockapi.io/api/v1
   ```

4. Running the Project:

   To run the project locally, use the following command:

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

## Screenshots

### Home Page

![Home page-Desktop](public/screenshots/desktop%20view.png)

### Responsive View

![Responsive View-ipad](public/screenshots/ipad%20view.png)
![Responsive View-mobile](public/screenshots/mobile%20view.png)

### Error Page

![Error Page](public/screenshots/error%20page.png)

### Page Not Found

![Page Not Found](public/screenshots/page%20not%20found.png)

## Conclusion

This Certificate Generator project demonstrates how to build a responsive React application using Tailwind CSS and Axios for API integration. The application is designed to be easily extendable and can serve as a foundation for further development or customization.

Feel free to explore the code, provide feedback, or contribute to its development. Your insights and improvements are always welcome!

## Contact

For any questions or inquiries, please contact:

- Sherin - [csherin111@gmail.com](mailto:csherin111@gmail.com)
- GitHub: [sherinAnees](https://github.com/sherinAnees)
