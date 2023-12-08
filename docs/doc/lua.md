

## 诛降四段

常规宏F10
爆发宏F9
劫驱宏Ctrl+F10
前置宏E手动	
特效腰坠数字区”+“
```lua
button1 = 5     --开F10 --关闭
button2 = 4     --开F9  --切换
button3 = 6     --特效腰坠

State1 = "0"
State2 = "0"
key = ""

function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED") then
        if (arg == button1) then
            AbortMacro()
            if (State2 == "0" and State1 == "0") then
                State1 = "1"
                State2 = "0"
                key = "F10"
                PlayMacro(key)
            else
                State1 = "0"
                State2 = "0"
                key = ""
                AbortMacro()
            end
        elseif (arg == button2) then
            AbortMacro()
            if (State1 == "0" and State2 == "0") then
                State1 = "0"
                State2 = "1"
                key = "F9"
                PlayMacro(key)
                --Sleep(900)
                --PressAndReleaseKey("numplus")
            elseif (State1 == "1" and State2 == "0") then
                State1 = "0"
                State2 = "1"
                key = "F9"
                PlayMacro(key)
            elseif (State1 == "0" and State2 == "1") then
                State1 = "1"
                State2 = "0"
                key = "F10"
                PlayMacro(key)
            end  
        end  
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button3) then
        PressAndReleaseKey("numplus")
    end
end

--当宏未开启：按button1开启F10；按button2开启F9；
--当F9已开启：按button1停止；按button2停止F9，并切换至F10；
--当F10已开启：按button1停止；按button2停止F10，并切换至F9；
```


## 日常二段
主宏F10	
辅助Ctrl+F10
特效腰坠数字区”+“
```lua
button1 = 5     --主宏开关
button2 = 6     --特效腰坠

State = "0"
key = "F10"
function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button1) then
        if (State == "0") then
            State = "1"
            PlayMacro(key)
        else
            State = "0"
            AbortMacro()
        end
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button2 and State == "1") then
        PressAndReleaseKey("numplus")
    end
end
```

循环切换
切换第一页快捷栏F8
切换第二页快捷栏F9
```lua
button = 6

State = "0"

function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button) then
        if (State == "0") then
            PressAndReleaseKey("F8")
            State = "1"
        elseif (State == "1") then
            PressAndReleaseKey("F9")
            State = "0"
        end
    end
end
```

## 切换窗口
```lua
button = 4    --Alt+Tab

function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button) then
        PressKey("ralt")
        Sleep(100)
        PressAndReleaseKey("tab")
        Sleep(300)
        ReleaseKey("ralt")
    end
end
```

## 轻功上马
```lua
button = 4     --双开挖宝

State = "0"
key = "F10"
function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button) then
        PressAndReleaseKey("w")
        Sleep(200)
        PressAndReleaseKey("w")
        Sleep(500)
        PressAndReleaseKey("t")
    end
end
```


## 键值测试
```lua
function OnEvent(event, arg)
    OutputLogMessage("Event: "..event.." Arg: "..arg.."\n")
end
--控制台键值测试
```


## 日常挖宝
```lua
button1 = 5     --主宏开关
button2 = 6     --特效腰坠
button3 = 4     --轻功上马（平原适宜）

State = "0"
key = "F10"
function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button1) then
        if (State == "0") then
            State = "1"
            PlayMacro(key)
        else
            State = "0"
            AbortMacro()
        end
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button2 and State = "1") then
        PressAndReleaseKey("numplus")
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button3 and State == "0") then
        PressAndReleaseKey("w")
        Sleep(200)
        PressAndReleaseKey("w")
        Sleep(500)
        PressAndReleaseKey("t")
    end
end
```

## 日常采集
```lua
button1 = 5     --主宏开关
button2 = 6     --特效腰坠
button3 = 4     --持续互动

State = "0"
key = ""
function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button1) then
        if (State == "0") then
            State = "1"
            key = "F10"
            PlayMacro(key)
        else
            State = "0"
            AbortMacro()
        end
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button2 and State == "1") then
        PressAndReleaseKey("numplus")
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button3 and State == "0") then
        State = "1"
        key = "FF"
        PlayMacro(key)
    end
end
```

## 日常双骑
```lua
button1 = 5     --主宏开关
button2 = 6     --特效腰坠
button3 = 4     --邀请双骑

--("0")选择第一个队友
--("9")双骑

State = "0"
key = "F10"
function OnEvent(event, arg)
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button1) then
        if (State == "0") then
            State = "1"
            PlayMacro(key)
        else
            State = "0"
            AbortMacro()
        end
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button2 and State == "1") then
        PressAndReleaseKey("numplus")
    end
    if (event == "MOUSE_BUTTON_PRESSED" and arg == button3 and State == "0") then
        PressAndReleaseKey("0")
        Sleep(500)
        PressAndReleaseKey("9")
    end
end
```