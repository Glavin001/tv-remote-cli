# tv-remote-cli
[![NPM](https://nodei.co/npm/tv-remote-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tv-remote-cli/)
> CLI for remotely controlling your Smart TV

---

## Installation

```bash
npm install -g tv-remote-cli
```

## Features

- Currently only supports Samsung Smart TVs. See [`samsung-remote` package](https://github.com/natalan/samsung-remote) for more information.
- Send TV commands to Smart TV
- Automatically find and connect to Smart TV

  ```bash
  connect 192.168.1.126
  ```

  or automatically find Smart TV with

  ```bash
  connect
  ```

- Send commands repeatedly

  Volume Up 3 times

  ```
  volup 3
  ```



## Usage

For list of all commands run `help` command.

Example:

```
❯ tv-remote

TV$ connect
Connecting to 192.168.1.126
TV$ volup
TV$ voldown
TV$ volup
TV$ voldown 3
TV$ volup 4 500
TV$ exit
```
