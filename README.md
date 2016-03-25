# tv-remote-cli
> CLI for remotely controlling your Smart TV

---

## Installation

```bash
npm install -g tv-remote-cli
```

## Features

- [x] Send TV commands to Smart TV
- [x] Automatically find and connect to Smart TV

  ```bash
connect 192.168.1.126
```
or automatically find Smart TV with
```bash
connect
```

- [x] Send commands repeatedly

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
