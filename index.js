#!/usr/bin/env node
'use strict';
const vorpal = require('vorpal')();
const SamsungRemote = require('samsung-remote');
const findTV = require('find-tv');
const async = require('async');

let remote = null
const send = function(key, callback) {
    if (remote) {
        return remote.send("KEY_"+key, callback);
    } else {
        return callback(new Error("No remote."));
    }
}

const remoteKeys = [
  "ENTER","EXIT",
  "MENU","UP","DOWN","LEFT","RIGHT",
  "3","VOLUP","4","5","6","VOLDOWN","7","8","9",
  "MUTE","CHDOWN","0",
  "CHUP","PRECH","GREEN","YELLOW","CYAN","ADDDEL",
  "SOURCE","INFO","PIP_ONOFF","PIP_SWAP","PLUS100","CAPTION","PMODE",
  "TTX_MIX","TV","PICTURE_SIZE","AD","PIP_SIZE","MAGIC_CHANNEL",
  "PIP_SCAN","PIP_CHUP","PIP_CHDOWN","DEVICE_CONNECT",
  "HELP","ANTENA","CONVERGENCE","11","12","AUTO_PROGRAM",
  "FACTORY","3SPEED","RSURF","ASPECT","TOPMENU","GAME","QUICK_REPLAY",
  "STILL_PICTURE","DTV","FAVCH","REWIND","STOP","PLAY","FF","REC","PAUSE",
  "TOOLS","INSTANT_REPLAY","LINK","FF_","GUIDE","REWIND_","ANGLE","RESERVED1",
  "ZOOM1","PROGRAM","BOOKMARK","DISC_MENU","PRINT","RETURN","SUB_TITLE","CLEAR",
  "VCHIP","REPEAT","DOOR","OPEN","WHEEL_LEFT","POWER","SLEEP","2","DMA","TURBO",
  "1","FM_RADIO","DVR_MENU","MTS","PCMODE","TTX_SUBFACE","CH_LIST","RED","DNIe",
  "SRS","CONVERT_AUDIO_MAINSUB","MDC","SEFFECT","DVR","DTV_SIGNAL","LIVE",
  "PERPECT_FOCUS","HOME","ESAVING","WHEEL_RIGHT","CONTENTS","VCR_MODE",
  "CATV_MODE","DSS_MODE","TV_MODE","DVD_MODE","STB_MODE","CALLER_ID",
  "SCALE","ZOOM_MOVE","CLOCK_DISPLAY","AV1","SVIDEO1","COMPONENT1",
  "SETUP_CLOCK_TIMER","COMPONENT2","MAGIC_BRIGHT","DVI","HDMI","W_LINK",
  "DTV_LINK","APP_LIST","BACK_MHP","ALT_MHP","DNSe","RSS","ENTERTAINMENT",
  "ID_INPUT","ID_SETUP","ANYNET","POWEROFF","POWERON","ANYVIEW","MS","MORE",
  "PANNEL_POWER","PANNEL_CHUP","PANNEL_CHDOWN","PANNEL_VOLUP","PANNEL_VOLDOW",
  "PANNEL_ENTER","PANNEL_MENU","PANNEL_SOURCE","AV2","AV3","SVIDEO2","SVIDEO3",
  "ZOOM2","PANORAMA","4_3","16_9","DYNAMIC","STANDARD","MOVIE1","CUSTOM",
  "AUTO_ARC_RESET","AUTO_ARC_LNA_ON","AUTO_ARC_LNA_OFF","AUTO_ARC_ANYNET_MODE_OK",
  "AUTO_ARC_ANYNET_AUTO_START","AUTO_FORMAT","DNET","HDMI1","AUTO_ARC_CAPTION_ON",
  "AUTO_ARC_CAPTION_OFF","AUTO_ARC_PIP_DOUBLE","AUTO_ARC_PIP_LARGE","AUTO_ARC_PIP_SMALL",
  "AUTO_ARC_PIP_WIDE","AUTO_ARC_PIP_LEFT_TOP","AUTO_ARC_PIP_RIGHT_TOP",
  "AUTO_ARC_PIP_LEFT_BOTTOM","AUTO_ARC_PIP_RIGHT_BOTTOM","AUTO_ARC_PIP_CH_CHANGE",
  "AUTO_ARC_AUTOCOLOR_SUCCESS","AUTO_ARC_AUTOCOLOR_FAIL","AUTO_ARC_C_FORCE_AGING",
  "AUTO_ARC_USBJACK_INSPECT","AUTO_ARC_JACK_IDENT","NINE_SEPERATE","ZOOM_IN","ZOOM_OUT",
  "MIC","HDMI2","HDMI3","AUTO_ARC_CAPTION_KOR","AUTO_ARC_CAPTION_ENG","AUTO_ARC_PIP_SOURCE_CHANGE",
  "HDMI4","AUTO_ARC_ANTENNA_AIR","AUTO_ARC_ANTENNA_CABLE","AUTO_ARC_ANTENNA_SATELLITE",
  "EXT1","EXT2","EXT3","EXT4","EXT5","EXT6","EXT7","EXT8","EXT9","EXT10",
  "EXT11","EXT12","EXT13","EXT14","EXT15","EXT16","EXT17","EXT18","EXT19",
  "EXT20","EXT21","EXT22","EXT23","EXT24","EXT25","EXT26","EXT27","EXT28",
  "EXT29","EXT30","EXT31","EXT32","EXT33","EXT34","EXT35","EXT36","EXT37",
  "EXT38","EXT39","EXT40","EXT41"
];

// Add commands
vorpal
  .command("connect [ip]", "Connect to TV")
  .action(function(args, callback) {
    if (args.ip) {
        remote = new SamsungRemote({
                ip: args.ip // '192.168.1.126' // required: IP address of your Samsung Smart TV
        });
        this.log('Connecting to '+args.ip);
        callback();
    } else { 
        findTV((error, ip) => {
            if (error) {
                return callback(error);
            }
            if (!ip) {
                return callback(new Error('No Smart TV found.'));
            }
            this.log('Connecting to '+ip);
            remote = new SamsungRemote({
                ip: ip
            });
            callback();
        });
    }
  });
vorpal
  .command("alive", "Check if TV is alive")
  .action(function(args, callback) {
    if (remote) {
        return remote.isAlive((error) => {
            if (error) {
                this.log("TV is offline.");
            } else {
                this.log("TV is alive.");
            }
            return callback();
        });
    } else {
        return callback(new Error("No remote."));
    }
  });

for (let key of remoteKeys) {
  let commandName = key.toLowerCase();//.split('_').join(' ');
  // Check to see if command already exists
  if (vorpal.find(commandName)) {
    commandName = `tv_${commandName}`;
  }
  let command = `${commandName} [repeat] [delay]`;
  // Add command
  vorpal
    .command(command, `Press ${commandName} key (KEY_${key})`)
    .action(function(args, callback) {
      let repeat = args.repeat || 1;
      let delay = args.delay || 300;
      let tasks = [];
      for (var i=1; i<=repeat; i++) { 
          tasks.push(key); 
          if (i!==repeat) { 
              tasks.push(delay); 
          }
      }
      async.eachSeries(tasks, (task, callback) => {
        if (typeof task === "string") {
            return send(task, callback);
        } else {
            return setTimeout(callback, task);
        }
      }, callback);
    });
}


vorpal
  .delimiter('TV$')
  .show();

