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

For list of all commands type `help`.

Example:

```
❯ tv-remote
TV$ connect
Connecting to 192.168.1.126
TV$ volup
TV$ voldown
TV$ voldown
TV$ volup
TV$ volup 3
TV$ voldown 3 500
TV$ source
TV$ down
TV$ menu
TV$ tv_exit
TV$ help

  Commands:

    help [command...]                            Provides help for a given command.
    exit                                         Exits application.
    connect [ip]                                 Connect to TV
    alive                                        Check if TV is alive
    enter [repeat] [delay]                       Press enter [repeat] [delay] key (KEY_ENTER)
    tv_exit [repeat] [delay]                     Press tv_exit [repeat] [delay] key (KEY_EXIT)
    menu [repeat] [delay]                        Press menu [repeat] [delay] key (KEY_MENU)
    up [repeat] [delay]                          Press up [repeat] [delay] key (KEY_UP)
    down [repeat] [delay]                        Press down [repeat] [delay] key (KEY_DOWN)
    left [repeat] [delay]                        Press left [repeat] [delay] key (KEY_LEFT)
    right [repeat] [delay]                       Press right [repeat] [delay] key (KEY_RIGHT)
    3 [repeat] [delay]                           Press 3 [repeat] [delay] key (KEY_3)
    volup [repeat] [delay]                       Press volup [repeat] [delay] key (KEY_VOLUP)
    4 [repeat] [delay]                           Press 4 [repeat] [delay] key (KEY_4)
    5 [repeat] [delay]                           Press 5 [repeat] [delay] key (KEY_5)
    6 [repeat] [delay]                           Press 6 [repeat] [delay] key (KEY_6)
    voldown [repeat] [delay]                     Press voldown [repeat] [delay] key (KEY_VOLDOWN)
    7 [repeat] [delay]                           Press 7 [repeat] [delay] key (KEY_7)
    8 [repeat] [delay]                           Press 8 [repeat] [delay] key (KEY_8)
    9 [repeat] [delay]                           Press 9 [repeat] [delay] key (KEY_9)
    mute [repeat] [delay]                        Press mute [repeat] [delay] key (KEY_MUTE)
    chdown [repeat] [delay]                      Press chdown [repeat] [delay] key (KEY_CHDOWN)
    0 [repeat] [delay]                           Press 0 [repeat] [delay] key (KEY_0)
    chup [repeat] [delay]                        Press chup [repeat] [delay] key (KEY_CHUP)
    prech [repeat] [delay]                       Press prech [repeat] [delay] key (KEY_PRECH)
    green [repeat] [delay]                       Press green [repeat] [delay] key (KEY_GREEN)
    yellow [repeat] [delay]                      Press yellow [repeat] [delay] key (KEY_YELLOW)
    cyan [repeat] [delay]                        Press cyan [repeat] [delay] key (KEY_CYAN)
    adddel [repeat] [delay]                      Press adddel [repeat] [delay] key (KEY_ADDDEL)
    source [repeat] [delay]                      Press source [repeat] [delay] key (KEY_SOURCE)
    info [repeat] [delay]                        Press info [repeat] [delay] key (KEY_INFO)
    pip_onoff [repeat] [delay]                   Press pip_onoff [repeat] [delay] key (KEY_PIP_ONOFF)
    pip_swap [repeat] [delay]                    Press pip_swap [repeat] [delay] key (KEY_PIP_SWAP)
    plus100 [repeat] [delay]                     Press plus100 [repeat] [delay] key (KEY_PLUS100)
    caption [repeat] [delay]                     Press caption [repeat] [delay] key (KEY_CAPTION)
    pmode [repeat] [delay]                       Press pmode [repeat] [delay] key (KEY_PMODE)
    ttx_mix [repeat] [delay]                     Press ttx_mix [repeat] [delay] key (KEY_TTX_MIX)
    tv [repeat] [delay]                          Press tv [repeat] [delay] key (KEY_TV)
    picture_size [repeat] [delay]                Press picture_size [repeat] [delay] key (KEY_PICTURE_SIZE)
    ad [repeat] [delay]                          Press ad [repeat] [delay] key (KEY_AD)
    pip_size [repeat] [delay]                    Press pip_size [repeat] [delay] key (KEY_PIP_SIZE)
    magic_channel [repeat] [delay]               Press magic_channel [repeat] [delay] key (KEY_MAGIC_CHANNEL)
    pip_scan [repeat] [delay]                    Press pip_scan [repeat] [delay] key (KEY_PIP_SCAN)
    pip_chup [repeat] [delay]                    Press pip_chup [repeat] [delay] key (KEY_PIP_CHUP)
    pip_chdown [repeat] [delay]                  Press pip_chdown [repeat] [delay] key (KEY_PIP_CHDOWN)
    device_connect [repeat] [delay]              Press device_connect [repeat] [delay] key (KEY_DEVICE_CONNECT)
    tv_help [repeat] [delay]                     Press tv_help [repeat] [delay] key (KEY_HELP)
    antena [repeat] [delay]                      Press antena [repeat] [delay] key (KEY_ANTENA)
    convergence [repeat] [delay]                 Press convergence [repeat] [delay] key (KEY_CONVERGENCE)
    11 [repeat] [delay]                          Press 11 [repeat] [delay] key (KEY_11)
    12 [repeat] [delay]                          Press 12 [repeat] [delay] key (KEY_12)
    auto_program [repeat] [delay]                Press auto_program [repeat] [delay] key (KEY_AUTO_PROGRAM)
    factory [repeat] [delay]                     Press factory [repeat] [delay] key (KEY_FACTORY)
    3speed [repeat] [delay]                      Press 3speed [repeat] [delay] key (KEY_3SPEED)
    rsurf [repeat] [delay]                       Press rsurf [repeat] [delay] key (KEY_RSURF)
    aspect [repeat] [delay]                      Press aspect [repeat] [delay] key (KEY_ASPECT)
    topmenu [repeat] [delay]                     Press topmenu [repeat] [delay] key (KEY_TOPMENU)
    game [repeat] [delay]                        Press game [repeat] [delay] key (KEY_GAME)
    quick_replay [repeat] [delay]                Press quick_replay [repeat] [delay] key (KEY_QUICK_REPLAY)
    still_picture [repeat] [delay]               Press still_picture [repeat] [delay] key (KEY_STILL_PICTURE)
    dtv [repeat] [delay]                         Press dtv [repeat] [delay] key (KEY_DTV)
    favch [repeat] [delay]                       Press favch [repeat] [delay] key (KEY_FAVCH)
    rewind [repeat] [delay]                      Press rewind [repeat] [delay] key (KEY_REWIND)
    stop [repeat] [delay]                        Press stop [repeat] [delay] key (KEY_STOP)
    play [repeat] [delay]                        Press play [repeat] [delay] key (KEY_PLAY)
    ff [repeat] [delay]                          Press ff [repeat] [delay] key (KEY_FF)
    rec [repeat] [delay]                         Press rec [repeat] [delay] key (KEY_REC)
    pause [repeat] [delay]                       Press pause [repeat] [delay] key (KEY_PAUSE)
    tools [repeat] [delay]                       Press tools [repeat] [delay] key (KEY_TOOLS)
    instant_replay [repeat] [delay]              Press instant_replay [repeat] [delay] key (KEY_INSTANT_REPLAY)
    link [repeat] [delay]                        Press link [repeat] [delay] key (KEY_LINK)
    ff_ [repeat] [delay]                         Press ff_ [repeat] [delay] key (KEY_FF_)
    guide [repeat] [delay]                       Press guide [repeat] [delay] key (KEY_GUIDE)
    rewind_ [repeat] [delay]                     Press rewind_ [repeat] [delay] key (KEY_REWIND_)
    angle [repeat] [delay]                       Press angle [repeat] [delay] key (KEY_ANGLE)
    reserved1 [repeat] [delay]                   Press reserved1 [repeat] [delay] key (KEY_RESERVED1)
    zoom1 [repeat] [delay]                       Press zoom1 [repeat] [delay] key (KEY_ZOOM1)
    program [repeat] [delay]                     Press program [repeat] [delay] key (KEY_PROGRAM)
    bookmark [repeat] [delay]                    Press bookmark [repeat] [delay] key (KEY_BOOKMARK)
    disc_menu [repeat] [delay]                   Press disc_menu [repeat] [delay] key (KEY_DISC_MENU)
    print [repeat] [delay]                       Press print [repeat] [delay] key (KEY_PRINT)
    return [repeat] [delay]                      Press return [repeat] [delay] key (KEY_RETURN)
    sub_title [repeat] [delay]                   Press sub_title [repeat] [delay] key (KEY_SUB_TITLE)
    clear [repeat] [delay]                       Press clear [repeat] [delay] key (KEY_CLEAR)
    vchip [repeat] [delay]                       Press vchip [repeat] [delay] key (KEY_VCHIP)
    repeat [repeat] [delay]                      Press repeat [repeat] [delay] key (KEY_REPEAT)
    door [repeat] [delay]                        Press door [repeat] [delay] key (KEY_DOOR)
    open [repeat] [delay]                        Press open [repeat] [delay] key (KEY_OPEN)
    wheel_left [repeat] [delay]                  Press wheel_left [repeat] [delay] key (KEY_WHEEL_LEFT)
    power [repeat] [delay]                       Press power [repeat] [delay] key (KEY_POWER)
    sleep [repeat] [delay]                       Press sleep [repeat] [delay] key (KEY_SLEEP)
    2 [repeat] [delay]                           Press 2 [repeat] [delay] key (KEY_2)
    dma [repeat] [delay]                         Press dma [repeat] [delay] key (KEY_DMA)
    turbo [repeat] [delay]                       Press turbo [repeat] [delay] key (KEY_TURBO)
    1 [repeat] [delay]                           Press 1 [repeat] [delay] key (KEY_1)
    fm_radio [repeat] [delay]                    Press fm_radio [repeat] [delay] key (KEY_FM_RADIO)
    dvr_menu [repeat] [delay]                    Press dvr_menu [repeat] [delay] key (KEY_DVR_MENU)
    mts [repeat] [delay]                         Press mts [repeat] [delay] key (KEY_MTS)
    pcmode [repeat] [delay]                      Press pcmode [repeat] [delay] key (KEY_PCMODE)
    ttx_subface [repeat] [delay]                 Press ttx_subface [repeat] [delay] key (KEY_TTX_SUBFACE)
    ch_list [repeat] [delay]                     Press ch_list [repeat] [delay] key (KEY_CH_LIST)
    red [repeat] [delay]                         Press red [repeat] [delay] key (KEY_RED)
    dnie [repeat] [delay]                        Press dnie [repeat] [delay] key (KEY_DNIe)
    srs [repeat] [delay]                         Press srs [repeat] [delay] key (KEY_SRS)
    convert_audio_mainsub [repeat] [delay]       Press convert_audio_mainsub [repeat] [delay] key (KEY_CONVERT_AUDIO_MAINSUB)
    mdc [repeat] [delay]                         Press mdc [repeat] [delay] key (KEY_MDC)
    seffect [repeat] [delay]                     Press seffect [repeat] [delay] key (KEY_SEFFECT)
    dvr [repeat] [delay]                         Press dvr [repeat] [delay] key (KEY_DVR)
    dtv_signal [repeat] [delay]                  Press dtv_signal [repeat] [delay] key (KEY_DTV_SIGNAL)
    live [repeat] [delay]                        Press live [repeat] [delay] key (KEY_LIVE)
    perpect_focus [repeat] [delay]               Press perpect_focus [repeat] [delay] key (KEY_PERPECT_FOCUS)
    home [repeat] [delay]                        Press home [repeat] [delay] key (KEY_HOME)
    esaving [repeat] [delay]                     Press esaving [repeat] [delay] key (KEY_ESAVING)
    wheel_right [repeat] [delay]                 Press wheel_right [repeat] [delay] key (KEY_WHEEL_RIGHT)
    contents [repeat] [delay]                    Press contents [repeat] [delay] key (KEY_CONTENTS)
    vcr_mode [repeat] [delay]                    Press vcr_mode [repeat] [delay] key (KEY_VCR_MODE)
    catv_mode [repeat] [delay]                   Press catv_mode [repeat] [delay] key (KEY_CATV_MODE)
    dss_mode [repeat] [delay]                    Press dss_mode [repeat] [delay] key (KEY_DSS_MODE)
    tv_mode [repeat] [delay]                     Press tv_mode [repeat] [delay] key (KEY_TV_MODE)
    dvd_mode [repeat] [delay]                    Press dvd_mode [repeat] [delay] key (KEY_DVD_MODE)
    stb_mode [repeat] [delay]                    Press stb_mode [repeat] [delay] key (KEY_STB_MODE)
    caller_id [repeat] [delay]                   Press caller_id [repeat] [delay] key (KEY_CALLER_ID)
    scale [repeat] [delay]                       Press scale [repeat] [delay] key (KEY_SCALE)
    zoom_move [repeat] [delay]                   Press zoom_move [repeat] [delay] key (KEY_ZOOM_MOVE)
    clock_display [repeat] [delay]               Press clock_display [repeat] [delay] key (KEY_CLOCK_DISPLAY)
    av1 [repeat] [delay]                         Press av1 [repeat] [delay] key (KEY_AV1)
    svideo1 [repeat] [delay]                     Press svideo1 [repeat] [delay] key (KEY_SVIDEO1)
    component1 [repeat] [delay]                  Press component1 [repeat] [delay] key (KEY_COMPONENT1)
    setup_clock_timer [repeat] [delay]           Press setup_clock_timer [repeat] [delay] key (KEY_SETUP_CLOCK_TIMER)
    component2 [repeat] [delay]                  Press component2 [repeat] [delay] key (KEY_COMPONENT2)
    magic_bright [repeat] [delay]                Press magic_bright [repeat] [delay] key (KEY_MAGIC_BRIGHT)
    dvi [repeat] [delay]                         Press dvi [repeat] [delay] key (KEY_DVI)
    hdmi [repeat] [delay]                        Press hdmi [repeat] [delay] key (KEY_HDMI)
    w_link [repeat] [delay]                      Press w_link [repeat] [delay] key (KEY_W_LINK)
    dtv_link [repeat] [delay]                    Press dtv_link [repeat] [delay] key (KEY_DTV_LINK)
    app_list [repeat] [delay]                    Press app_list [repeat] [delay] key (KEY_APP_LIST)
    back_mhp [repeat] [delay]                    Press back_mhp [repeat] [delay] key (KEY_BACK_MHP)
    alt_mhp [repeat] [delay]                     Press alt_mhp [repeat] [delay] key (KEY_ALT_MHP)
    dnse [repeat] [delay]                        Press dnse [repeat] [delay] key (KEY_DNSe)
    rss [repeat] [delay]                         Press rss [repeat] [delay] key (KEY_RSS)
    entertainment [repeat] [delay]               Press entertainment [repeat] [delay] key (KEY_ENTERTAINMENT)
    id_input [repeat] [delay]                    Press id_input [repeat] [delay] key (KEY_ID_INPUT)
    id_setup [repeat] [delay]                    Press id_setup [repeat] [delay] key (KEY_ID_SETUP)
    anynet [repeat] [delay]                      Press anynet [repeat] [delay] key (KEY_ANYNET)
    poweroff [repeat] [delay]                    Press poweroff [repeat] [delay] key (KEY_POWEROFF)
    poweron [repeat] [delay]                     Press poweron [repeat] [delay] key (KEY_POWERON)
    anyview [repeat] [delay]                     Press anyview [repeat] [delay] key (KEY_ANYVIEW)
    ms [repeat] [delay]                          Press ms [repeat] [delay] key (KEY_MS)
    more [repeat] [delay]                        Press more [repeat] [delay] key (KEY_MORE)
    pannel_power [repeat] [delay]                Press pannel_power [repeat] [delay] key (KEY_PANNEL_POWER)
    pannel_chup [repeat] [delay]                 Press pannel_chup [repeat] [delay] key (KEY_PANNEL_CHUP)
    pannel_chdown [repeat] [delay]               Press pannel_chdown [repeat] [delay] key (KEY_PANNEL_CHDOWN)
    pannel_volup [repeat] [delay]                Press pannel_volup [repeat] [delay] key (KEY_PANNEL_VOLUP)
    pannel_voldow [repeat] [delay]               Press pannel_voldow [repeat] [delay] key (KEY_PANNEL_VOLDOW)
    pannel_enter [repeat] [delay]                Press pannel_enter [repeat] [delay] key (KEY_PANNEL_ENTER)
    pannel_menu [repeat] [delay]                 Press pannel_menu [repeat] [delay] key (KEY_PANNEL_MENU)
    pannel_source [repeat] [delay]               Press pannel_source [repeat] [delay] key (KEY_PANNEL_SOURCE)
    av2 [repeat] [delay]                         Press av2 [repeat] [delay] key (KEY_AV2)
    av3 [repeat] [delay]                         Press av3 [repeat] [delay] key (KEY_AV3)
    svideo2 [repeat] [delay]                     Press svideo2 [repeat] [delay] key (KEY_SVIDEO2)
    svideo3 [repeat] [delay]                     Press svideo3 [repeat] [delay] key (KEY_SVIDEO3)
    zoom2 [repeat] [delay]                       Press zoom2 [repeat] [delay] key (KEY_ZOOM2)
    panorama [repeat] [delay]                    Press panorama [repeat] [delay] key (KEY_PANORAMA)
    4_3 [repeat] [delay]                         Press 4_3 [repeat] [delay] key (KEY_4_3)
    16_9 [repeat] [delay]                        Press 16_9 [repeat] [delay] key (KEY_16_9)
    dynamic [repeat] [delay]                     Press dynamic [repeat] [delay] key (KEY_DYNAMIC)
    standard [repeat] [delay]                    Press standard [repeat] [delay] key (KEY_STANDARD)
    movie1 [repeat] [delay]                      Press movie1 [repeat] [delay] key (KEY_MOVIE1)
    custom [repeat] [delay]                      Press custom [repeat] [delay] key (KEY_CUSTOM)
    auto_arc_reset [repeat] [delay]              Press auto_arc_reset [repeat] [delay] key (KEY_AUTO_ARC_RESET)
    auto_arc_lna_on [repeat] [delay]             Press auto_arc_lna_on [repeat] [delay] key (KEY_AUTO_ARC_LNA_ON)
    auto_arc_lna_off [repeat] [delay]            Press auto_arc_lna_off [repeat] [delay] key (KEY_AUTO_ARC_LNA_OFF)
    auto_arc_anynet_mode_ok [repeat] [delay]     Press auto_arc_anynet_mode_ok [repeat] [delay] key (KEY_AUTO_ARC_ANYNET_MODE_OK)
    auto_arc_anynet_auto_start [repeat] [delay]  Press auto_arc_anynet_auto_start [repeat] [delay] key
                                                 (KEY_AUTO_ARC_ANYNET_AUTO_START)
    auto_format [repeat] [delay]                 Press auto_format [repeat] [delay] key (KEY_AUTO_FORMAT)
    dnet [repeat] [delay]                        Press dnet [repeat] [delay] key (KEY_DNET)
    hdmi1 [repeat] [delay]                       Press hdmi1 [repeat] [delay] key (KEY_HDMI1)
    auto_arc_caption_on [repeat] [delay]         Press auto_arc_caption_on [repeat] [delay] key (KEY_AUTO_ARC_CAPTION_ON)
    auto_arc_caption_off [repeat] [delay]        Press auto_arc_caption_off [repeat] [delay] key (KEY_AUTO_ARC_CAPTION_OFF)
    auto_arc_pip_double [repeat] [delay]         Press auto_arc_pip_double [repeat] [delay] key (KEY_AUTO_ARC_PIP_DOUBLE)
    auto_arc_pip_large [repeat] [delay]          Press auto_arc_pip_large [repeat] [delay] key (KEY_AUTO_ARC_PIP_LARGE)
    auto_arc_pip_small [repeat] [delay]          Press auto_arc_pip_small [repeat] [delay] key (KEY_AUTO_ARC_PIP_SMALL)
    auto_arc_pip_wide [repeat] [delay]           Press auto_arc_pip_wide [repeat] [delay] key (KEY_AUTO_ARC_PIP_WIDE)
    auto_arc_pip_left_top [repeat] [delay]       Press auto_arc_pip_left_top [repeat] [delay] key (KEY_AUTO_ARC_PIP_LEFT_TOP)
    auto_arc_pip_right_top [repeat] [delay]      Press auto_arc_pip_right_top [repeat] [delay] key (KEY_AUTO_ARC_PIP_RIGHT_TOP)
    auto_arc_pip_left_bottom [repeat] [delay]    Press auto_arc_pip_left_bottom [repeat] [delay] key
                                                 (KEY_AUTO_ARC_PIP_LEFT_BOTTOM)
    auto_arc_pip_right_bottom [repeat] [delay]   Press auto_arc_pip_right_bottom [repeat] [delay] key
                                                 (KEY_AUTO_ARC_PIP_RIGHT_BOTTOM)
    auto_arc_pip_ch_change [repeat] [delay]      Press auto_arc_pip_ch_change [repeat] [delay] key (KEY_AUTO_ARC_PIP_CH_CHANGE)
    auto_arc_autocolor_success [repeat] [delay]  Press auto_arc_autocolor_success [repeat] [delay] key
                                                 (KEY_AUTO_ARC_AUTOCOLOR_SUCCESS)
    auto_arc_autocolor_fail [repeat] [delay]     Press auto_arc_autocolor_fail [repeat] [delay] key (KEY_AUTO_ARC_AUTOCOLOR_FAIL)
    auto_arc_c_force_aging [repeat] [delay]      Press auto_arc_c_force_aging [repeat] [delay] key (KEY_AUTO_ARC_C_FORCE_AGING)
    auto_arc_usbjack_inspect [repeat] [delay]    Press auto_arc_usbjack_inspect [repeat] [delay] key
                                                 (KEY_AUTO_ARC_USBJACK_INSPECT)
    auto_arc_jack_ident [repeat] [delay]         Press auto_arc_jack_ident [repeat] [delay] key (KEY_AUTO_ARC_JACK_IDENT)
    nine_seperate [repeat] [delay]               Press nine_seperate [repeat] [delay] key (KEY_NINE_SEPERATE)
    zoom_in [repeat] [delay]                     Press zoom_in [repeat] [delay] key (KEY_ZOOM_IN)
    zoom_out [repeat] [delay]                    Press zoom_out [repeat] [delay] key (KEY_ZOOM_OUT)
    mic [repeat] [delay]                         Press mic [repeat] [delay] key (KEY_MIC)
    hdmi2 [repeat] [delay]                       Press hdmi2 [repeat] [delay] key (KEY_HDMI2)
    hdmi3 [repeat] [delay]                       Press hdmi3 [repeat] [delay] key (KEY_HDMI3)
    auto_arc_caption_kor [repeat] [delay]        Press auto_arc_caption_kor [repeat] [delay] key (KEY_AUTO_ARC_CAPTION_KOR)
    auto_arc_caption_eng [repeat] [delay]        Press auto_arc_caption_eng [repeat] [delay] key (KEY_AUTO_ARC_CAPTION_ENG)
    auto_arc_pip_source_change [repeat] [delay]  Press auto_arc_pip_source_change [repeat] [delay] key
                                                 (KEY_AUTO_ARC_PIP_SOURCE_CHANGE)
    hdmi4 [repeat] [delay]                       Press hdmi4 [repeat] [delay] key (KEY_HDMI4)
    auto_arc_antenna_air [repeat] [delay]        Press auto_arc_antenna_air [repeat] [delay] key (KEY_AUTO_ARC_ANTENNA_AIR)
    auto_arc_antenna_cable [repeat] [delay]      Press auto_arc_antenna_cable [repeat] [delay] key (KEY_AUTO_ARC_ANTENNA_CABLE)
    auto_arc_antenna_satellite [repeat] [delay]  Press auto_arc_antenna_satellite [repeat] [delay] key
                                                 (KEY_AUTO_ARC_ANTENNA_SATELLITE)
    ext1 [repeat] [delay]                        Press ext1 [repeat] [delay] key (KEY_EXT1)
    ext2 [repeat] [delay]                        Press ext2 [repeat] [delay] key (KEY_EXT2)
    ext3 [repeat] [delay]                        Press ext3 [repeat] [delay] key (KEY_EXT3)
    ext4 [repeat] [delay]                        Press ext4 [repeat] [delay] key (KEY_EXT4)
    ext5 [repeat] [delay]                        Press ext5 [repeat] [delay] key (KEY_EXT5)
    ext6 [repeat] [delay]                        Press ext6 [repeat] [delay] key (KEY_EXT6)
    ext7 [repeat] [delay]                        Press ext7 [repeat] [delay] key (KEY_EXT7)
    ext8 [repeat] [delay]                        Press ext8 [repeat] [delay] key (KEY_EXT8)
    ext9 [repeat] [delay]                        Press ext9 [repeat] [delay] key (KEY_EXT9)
    ext10 [repeat] [delay]                       Press ext10 [repeat] [delay] key (KEY_EXT10)
    ext11 [repeat] [delay]                       Press ext11 [repeat] [delay] key (KEY_EXT11)
    ext12 [repeat] [delay]                       Press ext12 [repeat] [delay] key (KEY_EXT12)
    ext13 [repeat] [delay]                       Press ext13 [repeat] [delay] key (KEY_EXT13)
    ext14 [repeat] [delay]                       Press ext14 [repeat] [delay] key (KEY_EXT14)
    ext15 [repeat] [delay]                       Press ext15 [repeat] [delay] key (KEY_EXT15)
    ext16 [repeat] [delay]                       Press ext16 [repeat] [delay] key (KEY_EXT16)
    ext17 [repeat] [delay]                       Press ext17 [repeat] [delay] key (KEY_EXT17)
    ext18 [repeat] [delay]                       Press ext18 [repeat] [delay] key (KEY_EXT18)
    ext19 [repeat] [delay]                       Press ext19 [repeat] [delay] key (KEY_EXT19)
    ext20 [repeat] [delay]                       Press ext20 [repeat] [delay] key (KEY_EXT20)
    ext21 [repeat] [delay]                       Press ext21 [repeat] [delay] key (KEY_EXT21)
    ext22 [repeat] [delay]                       Press ext22 [repeat] [delay] key (KEY_EXT22)
    ext23 [repeat] [delay]                       Press ext23 [repeat] [delay] key (KEY_EXT23)
    ext24 [repeat] [delay]                       Press ext24 [repeat] [delay] key (KEY_EXT24)
    ext25 [repeat] [delay]                       Press ext25 [repeat] [delay] key (KEY_EXT25)
    ext26 [repeat] [delay]                       Press ext26 [repeat] [delay] key (KEY_EXT26)
    ext27 [repeat] [delay]                       Press ext27 [repeat] [delay] key (KEY_EXT27)
    ext28 [repeat] [delay]                       Press ext28 [repeat] [delay] key (KEY_EXT28)
    ext29 [repeat] [delay]                       Press ext29 [repeat] [delay] key (KEY_EXT29)
    ext30 [repeat] [delay]                       Press ext30 [repeat] [delay] key (KEY_EXT30)
    ext31 [repeat] [delay]                       Press ext31 [repeat] [delay] key (KEY_EXT31)
    ext32 [repeat] [delay]                       Press ext32 [repeat] [delay] key (KEY_EXT32)
    ext33 [repeat] [delay]                       Press ext33 [repeat] [delay] key (KEY_EXT33)
    ext34 [repeat] [delay]                       Press ext34 [repeat] [delay] key (KEY_EXT34)
    ext35 [repeat] [delay]                       Press ext35 [repeat] [delay] key (KEY_EXT35)
    ext36 [repeat] [delay]                       Press ext36 [repeat] [delay] key (KEY_EXT36)
    ext37 [repeat] [delay]                       Press ext37 [repeat] [delay] key (KEY_EXT37)
    ext38 [repeat] [delay]                       Press ext38 [repeat] [delay] key (KEY_EXT38)
    ext39 [repeat] [delay]                       Press ext39 [repeat] [delay] key (KEY_EXT39)
    ext40 [repeat] [delay]                       Press ext40 [repeat] [delay] key (KEY_EXT40)
    ext41 [repeat] [delay]                       Press ext41 [repeat] [delay] key (KEY_EXT41)

TV$ exit
```
