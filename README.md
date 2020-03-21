# Covid19 India API
The complete api that collects information from other apis and delivers to it to you in the easiest format!

[![Build Status](https://travis-ci.org/divy-work/covid19-india-api.svg?branch=master)](https://travis-ci.org/divy-work/covid19-india-api)
![Node.js CI](https://github.com/divy-work/covid19-india-api/workflows/Node.js%20CI/badge.svg)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Usage

### Get latest all-India count

```bash
GET /api/latest
```

### Get all-India timeline information
```bash
GET /api/timeline
```

### Get all states count
```bash
GET /api/states
```

### Get specific state-wise details
```bash
GET /api/states/<your_state_name>
```

## Building and running from source

```bash
npm run-script build
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)