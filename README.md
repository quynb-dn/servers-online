# Check Server Online

Returns a server with the lowest priority from the a list.

```bash
[
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
]

```

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   https://github.com/quynb-dn/servers-online.git
   cd servers-online
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a .env file in the root of the project.
   - Define the necessary variables, such as:

     ```bash
     PORT=3000
     ```

## Usage

### Development Mode

To run the project in development mode:

```bash
npm run dev
```

This command starts the server using nodemon, which automatically restarts the server when file changes are detected.

### Testing

To run tests:

```bash
npm run test
```

This command runs the unit tests and displays the results in the console.

### Linting

To check Typescript linting issues:

```bash
npm run lint
```

To fix Typescript linting issues:

```bash
npm run lint:fix
```

Those commands uses tslint to check for and fix linting issues in your TypeScript codebase.
