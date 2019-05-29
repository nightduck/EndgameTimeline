// TODO: Set these variably depending on viewing device

// Define all variables initializes in reset so they're visible globally
var margin, width, height, iw, clickable_gradient, unclickable_gradient,
    x1970, x2012, x2013, x2014, x2015, x2016, x2017, x2018, x2023,
    y1970tl, y2013tl, yMaintl, y2014tl, y2012tl,
    x = [], y = [], dw, dh,
    spaceStoneInPresent = false, mindStoneInPresent = false, realityStoneInPresent = false, timeStoneInPresent = false,
    powerStoneInPresent = false, soulStoneInPresent = false, thanosInPresent = false, nebulaInPresent = false,
    canvas, background,
    tlMain, tick1970_onMain, tick2012_onMain, tick2013_onMain, tick2014_onMain, tick2018_onMain, tick2023_onMain,
    label1970_onMain, label2012_onMain, label2013_onMain, label2014_onMain, label2018_onMain, label2023_onMain,
    stub1970, stub2012, stub2013, stub2014,
    tl1970, tick2018_on1970, tick2023_on1970, label2018_on1970, label2023_on1970,
    tl2012, tick2018_on2012, label2018_on2012,
    tl2013, tick2018_on2013, tick2023_on2013, label2018_on2013, label2023_on2013,
    tl2014,
    jumpTo1970, jumpTo2012, jumpTo2013, jumpTo2014,
    returnFrom1970, returnFrom2012, returnFrom2013, returnFrom2014,
    ironman, cap_am, hulk, antman, hawkeye, thor, rocket, gamora, war_machine, black_widow, nebula,
    ironman_glow, cap_am_glow, hulk_glow, antman_glow, hawkeye_glow, thor_glow, rocket_glow, gamora_glow,
    war_machine_glow, black_widow_glow, nebula_glow,
    nebula_evil, thanos, loki,
    nebula_evil_glow, thanos_glow, loki_glow,
    soulStone, powerStone, realityStone, spaceStone_loki, spaceStone_1970,  timeStone, mindStone, mjolnir,
    groupMainTimeline, group1970Timeline, group2012Timeline, group2013Timeline, group2014Timeline,
    group1970Fractals, group2012Fractals, group2013Fractals,
    clickables = [],
    pulsatingInterval;

// Initial conditions
var reset = function() {
    //Make fullscreen icon visible
    $('#fullscreen')[0].style.visibility = "visible";

    // Define bounds, grid, and key axis points
    margin = 20;
    iw = 40;
    width = document.getElementById("endgame-canvas").offsetWidth;
    height = document.getElementById("endgame-canvas").offsetHeight;
    dw = (width - 2*margin) / 40;
    dh = (height - 2*margin) / 40;
    var i;
    for(i = 0; i < 40; i++) {
        x[i] = (i * dw + margin);
        y[i] = (i * dh + margin)
    }
    var xBreakStart = x[2],
        xBreakEnd = x[4];
    x1970 = x[0],
        x2012 = x[6],
        x2013 = x[12],
        x2014 = x[18],
        x2018 = x[26],
        x2023 = x[32],
        y1970tl = y[4],
        y2013tl = y[12],
        yMaintl = y[20],
        y2014tl = y[28],
        y2012tl = y[36],
    // x1970 = margin,
    //     xBreakStart = (width - 2*margin) / 20 + margin,
    //     xBreakEnd = 2 * (width - 2*margin) / 20 + margin,
    //     x2012 = 3 * (width - 2*margin) / 20 + margin,
    //     x2013 = 6 * (width - 2*margin) / 20 + margin,
    //     x2014 = 9 * (width - 2*margin) / 20 + margin,
    //     x2018 = 13 * (width - 2*margin) / 20 + margin,
    //     x2023 = 16 * (width - 2*margin) / 20 + margin,
    //     y1970tl = height / 6,
    //     y2013tl = 2 * height / 6,
    //     yMaintl = 3 * height / 6,
    //     y2014tl = 4 * height / 6,
    //     y2012tl = 5 * height / 6,
        spaceStoneInPresent = false,
        mindStoneInPresent = false,
        realityStoneInPresent = false,
        powerStoneInPresent = false,
        soulStoneInPresent = false,
        thanosInPresent = false,
        nebulaInPresent = false;

    // If the canvas is already defined, clear it. Otherwise, define a new one
    if (canvas) {
        canvas.clear().size(width, height);
        clearInterval(pulsatingInterval);
    } else {
        canvas = SVG('endgame-canvas').size(width, height);
    }

    // Define workspace
    background = canvas.rect(width, height).fill('#d3d3d3');

// Draw main timeline
    dxBreak = (xBreakEnd - xBreakStart) / 8;
    tlMain = canvas.polyline([0,yMaintl, xBreakStart,yMaintl, xBreakStart+dxBreak,yMaintl-5,
        xBreakStart+3*dxBreak,yMaintl+5, xBreakEnd-3*dxBreak,yMaintl-5,
        xBreakEnd-dxBreak,yMaintl+5, xBreakEnd,yMaintl, width,yMaintl])
        .fill('none')
        .stroke({ color: '#333', width: 3, linejoin: 'round' });
    tick1970_onMain = canvas.line(x1970,yMaintl-5, x1970,yMaintl+5)
        .fill('none')
        .stroke({ color: '#333', width: 3, linecap: 'round' });
    tick2012_onMain = canvas.line(x2012,yMaintl-5, x2012,yMaintl+5)
        .fill('none')
        .stroke({ color: '#333', width: 3, linecap: 'round' });
    tick2013_onMain = canvas.line(x2013,yMaintl-5, x2013,yMaintl+5)
        .fill('none')
        .stroke({ color: '#333', width: 3, linecap: 'round' });
    tick2014_onMain = canvas.line(x2014,yMaintl-5, x2014,yMaintl+5)
        .fill('none')
        .stroke({ color: '#333', width: 3, linecap: 'round' });
    tick2018_onMain = canvas.line(x2018,yMaintl-5, x2018,yMaintl+5)
        .fill('none')
        .stroke({ color: '#333', width: 3, linecap: 'round' });
    tick2023_onMain = canvas.line(x2023,yMaintl-5, x2023,yMaintl+5)
        .fill('none')
        .stroke({ color: '#333', width: 3, linecap: 'round' });
    label1970_onMain = canvas.text("1970")
        .font('family', 'Helvetica')
        .cx(x1970)
        .y(yMaintl + 10);
    label2012_onMain = label1970_onMain.clone()
        .text("2012")
        .cx(x2012);
    label2013_onMain = label1970_onMain.clone()
        .text("2013")
        .cx(x2013);
    label2014_onMain = label1970_onMain.clone()
        .text("2014")
        .cx(x2014);
    label2018_onMain = label1970_onMain.clone()
        .text("The Snap")
        .cx(x2018);
    label2023_onMain = label1970_onMain.clone()
        .text("Endgame")
        .cx(x2023);

// Stubs of alternate timelines
    stub1970 = canvas.path('M' + x1970 + ' ' + yMaintl + ' c ' + dw + ' 0 0 '
        + (y1970tl - yMaintl) + ' ' + 2*dw + ' ' + (y1970tl - yMaintl))
        .fill('none')
    stub2012 = canvas.path('M' + x2012 + ' ' + yMaintl + ' c ' + width/40 + ' 0 0 '
        + (y2012tl - yMaintl) + ' ' + width/20 + ' ' + (y2012tl - yMaintl))
        .fill('none');
    stub2013 = canvas.path('M' + x2013 + ' ' + yMaintl + ' c ' + width/40 + ' 0 0 '
        + (y2013tl - yMaintl) + ' ' + width/20 + ' ' + (y2013tl - yMaintl))
        .fill('none');
    stub2014 = canvas.path('M' + x2014 + ' ' + yMaintl + ' c ' + width/40 + ' 0 0 '
        + (y2014tl - yMaintl) + ' ' + width/20 + ' ' + (y2014tl - yMaintl))
        .fill('none');

// 1970 Timeline
    tl1970 = canvas.polyline([x1970+width/20,y1970tl, xBreakStart+2*dxBreak,y1970tl,
        xBreakStart+3*dxBreak,y1970tl+5, xBreakEnd-3*dxBreak,y1970tl-5,
        xBreakEnd-dxBreak,y1970tl+5, xBreakEnd,y1970tl, width,y1970tl])
        .fill('none')
        .stroke({ color: '#555', width: 3, linejoin: 'round', linecap: 'round' });
// var tick2012_on1970 = tick2012_onMain.clone()
//   .cy(y1970tl)
// var tick2013_on1970 = tick2013_onMain.clone()
//   .cy(y1970tl)
// var tick2014_on1970 = tick2014_onMain.clone()
//   .cy(y1970tl)
    tick2018_on1970 = tick2018_onMain.clone()
        .cy(y1970tl);
    tick2023_on1970 = tick2023_onMain.clone()
        .cy(y1970tl);
// var label2012_on1970 = label2012_onMain.clone()
//   .y(y1970tl+10)
// var label2013_on1970 = label2013_onMain.clone()
//   .y(y1970tl+10)
// var label2014_on1970 = label2014_onMain.clone()
//   .y(y1970tl+10)
    label2018_on1970 = label2018_onMain.clone()
        .y(y1970tl+10);
    label2023_on1970 = label2023_onMain.clone()
        .y(y1970tl+10);

// 2012 NYC Timeline
    tl2012 = canvas.line(x2012+width/20,y2012tl, width,y2012tl)
        .stroke({ color: '#555', width: 3, linejoin: 'round', linecap: 'round' });
// var tick2013_on2012 = tick2013_onMain.clone()
//     .cy(y2012tl);
// var tick2014_on2012 = tick2014_onMain.clone()
//   .cy(y2012tl)
    tick2018_on2012 = tick2018_onMain.clone()
        .cy(y2012tl);
// var tick2023_on2012 = tick2023_onMain.clone()
//     .cy(y2012tl);
// var label2013_on2012 = label2013_onMain.clone()
//     .y(y2012tl+10);
// var label2014_on2012 = label2014_onMain.clone()
//  .y(y2012tl+10)
    label2018_on2012 = label2018_onMain.clone()
        .y(y2012tl+10);
// var label2023_on2012 = label2023_onMain.clone()
//     .y(y2012tl+10);

// 2013 Asgard timeline
    tl2013 = canvas.line(x2013+width/20,y2013tl, width,y2013tl)
        .stroke({ color: '#555', width: 3, linejoin: 'round', linecap: 'round' });
//var tick2014_on2013 = tick2014_onMain.clone()
//  .cy(y2013tl)
    tick2018_on2013 = tick2018_onMain.clone()
        .cy(y2013tl);
    tick2023_on2013 = tick2023_onMain.clone()
        .cy(y2013tl);
//var label2014_on2013 = label2014_onMain.clone()
//  .y(y2013tl+10)
    label2018_on2013 = label2018_onMain.clone()
        .y(y2013tl+10);
    label2023_on2013 = label2023_onMain.clone()
        .y(y2013tl+10);

// 2014 GotG Timeline
    tl2014 = canvas.line(x2014+width/20,y2014tl, width,y2014tl)
        .stroke({ color: '#555', width: 3, linejoin: 'round', linecap: 'round' });
// var tick2018_on2014 = tick2018_onMain.clone()
//   .cy(y2014tl)
// var tick2023_on2014 = tick2023_onMain.clone()
//   .cy(y2014tl)
// var label2018_on2014 = label2018_onMain.clone()
//   .y(y2014tl+10)
// var label2023_on2014 = label2023_onMain.clone()
//   .y(y2014tl+10)

// Time travel paths
    jumpTo1970 = canvas.path('M' + (x2012+width/20) + ' ' + y2012tl + ' C ' + x2012 + ' ' +
        height + ' 0 ' + height + ' ' + (x1970 + width/20)
        + ' ' + y1970tl)
        .fill('none');
    // TODO: Finish fixing this
    // jumpTo2012 = canvas.path('M' + x2023 + ' ' + yMaintl +
    //     ' C ' + width + ' ' + y2013tl + ' 0 0 ' + (x2012 + width/20) + ' ' + y2012tl)
    //     .fill('none');
    // jumpTo2013 = canvas.path('M' + x2023 + ' ' + yMaintl + ' C ' + width + ' ' +
    //     y2014tl + ' ' + x2012 + ' ' + height + ' ' + (x2013 + width/20)
    //     + ' ' + y2013tl)
    //     .fill('none');
    // jumpTo2014 = canvas.path('M' + x2023 + ' ' + yMaintl + ' C ' + width + ' ' +
    //     y2013tl + ' 0 0 ' + (x2014 + width/20) + ' ' + y2014tl)
    //     .fill('none');
    returnFrom1970 = canvas.path('M' + (x1970 + width/20) + ' ' + y1970tl + ' C ' + x2012 + ' ' +
        yMaintl + ' ' + x2018 + ' ' + y2014tl + ' ' + (x2023 + width/20)
        + ' ' + yMaintl)
        .fill('none');
    returnFrom2012 = canvas.path('M' + (x2012 + width/20) + ' ' + y2012tl  + ' C ' + x2018 + ' ' +
        y2012tl + ' ' + x2018 + ' ' + y2013tl + ' ' + (x2023 + width/20)
        + ' ' + yMaintl)
        .fill('none');
    returnFrom2013 = canvas.path('M' + (x2013 + width/20) + ' ' + y2013tl + ' C ' + x2018 + ' ' +
        y2013tl + ' ' + x2018 + ' ' + y2013tl + ' ' + (x2023 + width/20)
        + ' ' + yMaintl)
        .fill('none');
    returnFrom2014 = canvas.path('M' + (x2014 + width/20) + ' ' + y2014tl + ' C ' + x2018 + ' ' +
        yMaintl + ' ' + x2023 + ' ' + y2014tl + ' ' + (x2023+width/20)
        + ' ' + yMaintl)
        .fill('none');

    jumpTo2012 = canvas.path('M' + x2023 + ',' + yMaintl +
        ' c ' + dw + ',' + dh + ' ' + -18*dw + ',' + 0 + ' ' +  -22*dw + ',' + dh +
        ' ' + -4*dw + ',' + 2*dh + ' ' + -3*dw + ',' + 14*dh + ' ' + -2*dw + ',' + 15*dh)
        .fill('none');
    jumpTo2013 = canvas.path('M' + x2023 + ',' + yMaintl +
    ' c ' + dw + ',' + -1*dh + ' ' + -15*dw + ',' + 0 + ' ' +  -17*dw + ',' + -1*dh +
    ' ' + -2*dw + ',' + -1*dh + ' ' + -2*dw + ',' + -6*dh + ' ' + -1*dw + ',' + -7*dh)
        .fill('none');
    jumpTo2014 = canvas.path('M' + x2023 + ',' + yMaintl +
        ' c ' + dw + ',' + 1*dh + ' ' + -9*dw + ',' + 0 + ' ' +  -11*dw + ',' + 2*dh +
        ' ' + -2*dw + ',' + 1*dh + ' ' + -2*dw + ',' + 5*dh + ' ' + -1*dw + ',' + 6*dh)
        .fill('none');

// Cap to 2014
// Cap to 2013
// Cap to 2012
// Cap to 1970
// Cap living in 1970 (possible not stroked?)

// Group timelines with their tickmarks
    groupMainTimeline = canvas.group()
        .add(tlMain)
        .add(tick1970_onMain)
        .add(tick2012_onMain)
        .add(tick2013_onMain)
        .add(tick2014_onMain)
        .add(tick2018_onMain)
        .add(tick2023_onMain)
        .add(label1970_onMain)
        .add(label2012_onMain)
        .add(label2013_onMain)
        .add(label2014_onMain)
        .add(label2018_onMain)
        .add(label2023_onMain);
    group1970Timeline = canvas.group()
        .add(tl1970)
        // .add(tick2012_on1970)
        // .add(tick2013_on1970)
        // .add(tick2014_on1970)
        .add(tick2018_on1970)
        .add(tick2023_on1970)
        // .add(label2012_on1970)
        // .add(label2013_on1970)
        // .add(label2014_on1970)
        .add(label2018_on1970)
        .add(label2023_on1970)
        .opacity(0);
    group2012Timeline = canvas.group()
        .add(tl2012)
        // .add(tick2013_on2012)
        // .add(tick2014_on2012)
        .add(tick2018_on2012)
        //.add(tick2023_on2012)
        // .add(label2013_on2012)
        // .add(label2014_on2012)
        .add(label2018_on2012)
        .opacity(0);
    group2013Timeline = canvas.group()
        .add(tl2013)
        //  .add(tick2014_on2013)
        .add(tick2018_on2013)
        .add(tick2023_on2013)
        //  .add(label2014_on2013)
        .add(label2018_on2013)
        .add(label2023_on2013)
        .opacity(0);
    group2014Timeline = canvas.group()
        .add(tl2014)
        .opacity(0);
//  .add(tick2018_on2014)
//  .add(tick2023_on2014)
//  .add(label2018_on2014)
//  .add(label2023_on2014)
    group1970Fractals = canvas.group();
    group2012Fractals = canvas.group();
    group2013Fractals = canvas.group();

// Gradients
    clickable_gradient = canvas.gradient('radial', function(stop) {
        stop.at(0, '#ddf');
        stop.at(0.7, '#ddf');
        stop.at(0.8, '#77f');
        stop.at({ offset: 1, color: '#fff', opacity: 0 });
    });
    unclickable_gradient = canvas.gradient('radial', function(stop) {
        stop.at({ offset: 0, color: '#fff', opacity: 0 });
    });

// Icons
    ironman_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var ironman_icon = canvas.image("ironman.png")
        .size(32,32).center(ironman_glow.cx(), ironman_glow.cy());
    ironman = canvas.group().add(ironman_glow).add(ironman_icon)
        .move(x2023, yMaintl - 80);

    cap_am_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var cap_am_icon = canvas.image("cap.png")
        .size(32,32).center(cap_am_glow.cx(), cap_am_glow.cy());
    cap_am = canvas.group().add(cap_am_glow).add(cap_am_icon)
        .move(x2023, yMaintl-40);

    hulk_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var hulk_icon = canvas.image("hulk.png")
        .size(32,32).center(hulk_glow.cx(), hulk_glow.cy());
    hulk = canvas.group().add(hulk_glow).add(hulk_icon)
        .move(x2023, yMaintl);

    antman_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var antman_icon = canvas.image("antman.png")
        .size(32,32).center(antman_glow.cx(), antman_glow.cy());
    antman = canvas.group().add(antman_glow).add(antman_icon)
        .move(x2023, yMaintl+40);

    thor_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var thor_icon = canvas.image("thor.png")
        .size(32,32).center(thor_glow.cx(), thor_glow.cy());
    thor = canvas.group().add(thor_glow).add(thor_icon)
        .move(x2023+40, yMaintl);

    rocket_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var rocket_icon = canvas.image("rocket.png")
        .size(32,32).center(rocket_glow.cx(), rocket_glow.cy());
    rocket = canvas.group().add(rocket_glow).add(rocket_icon)
        .move(x2023+40, yMaintl-40);

    nebula_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var nebula_icon = canvas.image("nebula.png")
        .size(32,32).center(nebula_glow.cx(), nebula_glow.cy());
    nebula = canvas.group().add(nebula_glow).add(nebula_icon)
        .move(x2023+80, yMaintl+40);

    war_machine_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var war_machine_icon = canvas.image("war_machine.png")
        .size(32,32).center(war_machine_glow.cx(), war_machine_glow.cy());
    war_machine = canvas.group().add(war_machine_glow).add(war_machine_icon)
        .move(x2023+80,yMaintl);

    hawkeye_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var hawkeye_icon = canvas.image("hawkeye.png")
        .size(32,32).center(hawkeye_glow.cx(), hawkeye_glow.cy());
    hawkeye = canvas.group().add(hawkeye_glow).add(hawkeye_icon)
        .move(x2023+80,yMaintl-40);

    black_widow_glow  = canvas.circle(40)
        .fill(unclickable_gradient);
    var black_widow_icon = canvas.image("black_widow.png")
        .size(32,32).center(black_widow_glow.cx(), black_widow_glow.cy());
    black_widow = canvas.group().add(black_widow_glow).add(black_widow_icon)
        .move(x2023+80, yMaintl-80);

    thanos_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var thanos_icon = canvas.image("thanos.png")
        .size(32,32).center(thanos_glow.cx(), thanos_glow.cy());
    thanos = canvas.group().add(thanos_glow).add(thanos_icon)
        .move(x2014+width/20-40, y2014tl-40)
        .opacity(0);

    gamora_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var gamora_icon = canvas.image("gamora.png")
        .size(32,32).center(gamora_glow.cx(), gamora_glow.cy());
    gamora = canvas.group().add(gamora_glow).add(gamora_icon)
        .move(x2014+width/20-40, y2014tl)
        .opacity(0);

    nebula_evil_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var nebula_evil_icon = canvas.image("nebula_evil.png")
        .size(32,32).center(nebula_evil_glow.cx(), nebula_evil_glow.cy());
    nebula_evil = canvas.group().add(nebula_evil_glow).add(nebula_evil_icon)
        .move(x2014+width/20-40, y2014tl+40)
        .opacity(0);

    portal = canvas.circle(16)
        .opacity(0);

    loki_glow = canvas.circle(40)
        .fill(unclickable_gradient);
    var loki_icon = canvas.image("loki.png")
        .size(32,32).center(loki_glow.cx(), loki_glow.cy());
    loki = canvas.group().add(loki_glow).add(loki_icon)
        .move(x2012+width/20-20, y2012tl)
        .opacity(0);

    soulStone = canvas.image("soul_stone.png")
        .size(16,16)
        .move(x2014+width/20, y2014tl)
        .opacity(0);

    powerStone = canvas.image("power_stone.png")
        .size(16,16)
        .move(x2014+width/20, y2014tl+20)
        .opacity(0);

    realityStone = canvas.image("reality_stone.png")
        .size(16,16)
        .move(x2013+width/20, y2013tl)
        .opacity(0);

    spaceStone_loki = canvas.image("space_stone.png")
        .size(16,16)
        .move(x2012+width/20-20, y2012tl+40)
        .opacity(0);

    spaceStone_1970 = canvas.image("space_stone.png")
        .size(16,16)
        .move(x1970+width/20-40, y1970tl)
        .opacity(0);

    timeStone = canvas.image("time_stone.png")
        .size(16,16)
        .move(x2012+width/20-20, y2012tl+60)
        .opacity(0);

    mindStone = canvas.image("mind_stone.png")
        .size(16,16)
        .move(x2012+width/20-20, y2012tl+80)
        .opacity(0);

    mjolnir = canvas.image("mjolnir.png")
        .size(16,16)
        .move(x2013+width/20, y2013tl+20)
        .opacity(0);


    // Initialize original click events
    make_clickable(ironman, animate2023to2012, 500);
    make_clickable(cap_am, animate2023to2012, 500);
    make_clickable(hulk, animate2023to2012, 500);
    make_clickable(antman, animate2023to2012, 500);
    make_clickable(thor, animate2023to2013, 500);
    make_clickable(rocket, animate2023to2013, 500);
    make_clickable(hawkeye, animate2023to2014, 500);
    make_clickable(war_machine, animate2023to2014, 500);
    make_clickable(black_widow, animate2023to2014, 500);
    make_clickable(nebula, animate2023to2014, 500);

    // Make all clickable icons pulsate
    setPulsating();

    // TODO: Implement list of states, and redraw stages of animation if those states have been reached
};

var setPulsating = function() {
    // Pulsate all clickable icons every 5 seconds
    pulsatingInterval = setInterval(function() {
        var i;
        for(i in clickables) {
            clickables[i].first().animate(300, "").scale(1.2).loop(6,true);
        }
    }, 5000);
};

var make_clickable = function(icon, func, delay=0) {
    // Reset click handler
    icon.click(null);
    icon.click(func);

    // Show the clickable gradient
    icon.first().fill(clickable_gradient).opacity(0);
    icon.first().animate(250, "", delay).opacity(1);

    // Stop any ongoing animations to the image
    icon.last().finish();
    //icon.last().animate(300,"",3000).scale(1.25).loop(6, true);

    // Add this to the list of clickables
    if (clickables.indexOf(icon) == -1) {
        clickables.push(icon);
    }
};
var make_unclickable = function(icon) {
    // Remove click handler
    icon.click(null);

    // Remove clickable gradient
    icon.first().fill(unclickable_gradient);

    // Stop any ongoing naimations to the image
    icon.last().finish();

    // Add this to the list of clickables
    clickables.splice(clickables.indexOf(icon), 1);
};


// ----------------  Events ------------------------\

var animate2023to2012 = function() {
    // Hide fullscreen, as it requires a reset to be used
    $('#fullscreen')[0].style.visibility = "hidden";

    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Prep icons for movement
    // ironman.animate(500, "<").move(x2023-ironman.first().width(), yMaintl-ironman.first().height);
    // cap_am.animate(500, "<").move(x2023-cap_am.first().width(), yMaintl);
    // hulk.animate(500, "<").move(x2023, yMaintl-hulk.first().height);
    // antman.animate(500, "<").move(x2023, yMaintl-antman.first().height);

    // Trace paths for thor and rocket to go to 2013.
    var ironmanPath = jumpTo2012.clone()
        .dmove(ironman.cx()-x2023,ironman.cy()-yMaintl);
    var capPath = jumpTo2012.clone()
        .dmove(cap_am.cx()-x2023,cap_am.cy()-yMaintl);
    var hulkPath = jumpTo2012.clone()
        .dmove(hulk.cx()-x2023,hulk.cy()-yMaintl);
    var antmanPath = jumpTo2012.clone()
        .dmove(antman.cx()-x2023,antman.cy()-yMaintl);

    // Draw the path of travel
    jumpTo2012.drawAnimated(1000,'<>')
        .stroke({ color: '#00F', width: 3, linecap: 'round' });

    // Show 2012 stub
    stub2012.drawAnimated({
        duration: 400,
        easing: '<>',
        delay: 600
        })
        .stroke({ color: '#555', width: 3, linecap: 'round' });

    // Show Loki and 3 infinity stones.
    loki.animate({
        duration: 300,
        easing: '<>',
        delay: 900
        }).opacity(1);
    spaceStone_loki.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);
    timeStone.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);
    mindStone.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);

    var length = jumpTo2012.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased){
        var p = ironmanPath.pointAt(eased * length);
        ironman.center(p.x, p.y);

        p = capPath.pointAt(eased * length);
        cap_am.center(p.x, p.y);

        p = hulkPath.pointAt(eased * length);
        hulk.center(p.x, p.y);

        p = antmanPath.pointAt(eased * length);
        antman.center(p.x, p.y)
    }).after(function() {
        var p = ironmanPath.pointAt(length);
        ironman.center(p.x, p.y);

        p = capPath.pointAt(length);
        cap_am.center(p.x, p.y);

        p = hulkPath.pointAt(length);
        hulk.center(p.x, p.y);

        p = antmanPath.pointAt(length);
        antman.center(p.x, p.y)
    });

    // Remove click handlers
    make_unclickable(ironman);
    make_unclickable(cap_am);
    make_unclickable(hulk);
    make_unclickable(antman);

    // Update click handlers for Loki and space stone
    make_clickable(loki, lokiStealsStone, 1200);
    spaceStone_loki.click(lokiStealsStone);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var lokiStealsStone = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Define gradient for portal
    var portalGradient = canvas.gradient('radial', function(stop) {
        stop.at(0, '#08172a');
        stop.at(0.6, '#083459');
        stop.at(0.8, '#498fb3')
        stop.at(0.9, '#b4e2e2');
        stop.at(1, '#a0d1da')
    });

    var durationOpen = 300;
    var durationClose = 400;

    // Group loki and space stone together
    var lokiAndStone = canvas.group()
        .add(loki)
        .add(spaceStone_loki);

    // Display the portal behind loki
    portal.center(lokiAndStone.cx(), lokiAndStone.cy()).opacity(1).fill(portalGradient)
    portal.animate(durationOpen,'<').scale(5,5);

    // Loki and stone sucked into portal as it closes
    lokiAndStone.animate(durationClose, '<', durationOpen)
        .scale(0,0);
    portal.animate(durationClose, '<')
        .scale(0,0.8);

    // Give mind stone to antman
    mindStone.animate(500, '<>', durationOpen+durationClose)
        .move(antman.cx(), antman.cy());

    // Give time stone to hulk
    timeStone.animate(500, '<>', durationOpen+durationClose)
        .move(hulk.cx(), hulk.cy());

    // Remove click handlers
    loki.click(null);
    spaceStone_loki.click(null);


    // Update click handlers for cap and ironman
    make_clickable(ironman, animate2012to1970, durationOpen+durationClose);
    make_clickable(cap_am, animate2012to1970, durationOpen+durationClose);

    // Update click handlers for hulk and antman
    make_clickable(hulk, animate2012to2023, durationOpen+durationClose);
    make_clickable(antman, animate2012to2023, durationOpen+durationClose);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2023to2013 = function() {
    // Hide fullscreen, as it requires a reset to be used
    $('#fullscreen')[0].style.visibility = "hidden";

    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for thor and rocket to go to 2013.
    var thorPath = jumpTo2013.clone()
        .dmove(thor.cx()-x2023,thor.cy()-yMaintl);
    var rocketPath = jumpTo2013.clone()
        .dmove(rocket.cx()-x2023,rocket.cy()-yMaintl);

    // Draw the path of travel
    jumpTo2013.drawAnimated(1000,'<>')
        .stroke({ color: '#F00', width: 3, linecap: 'round' });

    // Show reality stone.
    realityStone.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);
    mjolnir.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);

    // Show 2013 stub
    stub2013.drawAnimated({
        duration: 400,
        easing: '<>',
        delay: 600
        })
        .stroke({ color: '#555', width: 3, linecap: 'round' });

    // Move rocket and thor to 2013
    var length = jumpTo2012.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased){
        var p = thorPath.pointAt(eased * length);
        thor.center(p.x, p.y);

        p = rocketPath.pointAt(eased * length);
        rocket.center(p.x, p.y);
    }).after(function() {
            var p = thorPath.pointAt(length);
            thor.center(p.x, p.y);

            p = rocketPath.pointAt(length);
            rocket.center(p.x, p.y);
        });

    // Give reality stone to rocket
    var rocket_coor = rocketPath.pointAt(rocketPath.length());
    realityStone.animate(500, '<>')
        .move(rocket_coor.x, rocket_coor.y);
    var thor_coor = thorPath.pointAt(thorPath.length());
    mjolnir.animate(500, '<>')
        .move(thor_coor.x, thor_coor.y);

    // Update click handlers for rocket and thor
    make_clickable(rocket, animate2013to2023, 1200);
    make_clickable(thor, animate2013to2023, 1200);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2023to2014 = function() {
    // Hide fullscreen, as it requires a reset to be used
    $('#fullscreen')[0].style.visibility = "hidden";

    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for thor and rocket to go to 2013.
    var warMachinePath = jumpTo2014.clone()
        .dmove(war_machine.cx()-x2023,war_machine.cy()-yMaintl);
    var nebulaPath = jumpTo2014.clone()
        .dmove(nebula.cx()-x2023,nebula.cy()-yMaintl);
    var hawkeyePath = jumpTo2014.clone()
        .dmove(hawkeye.cx()-x2023,hawkeye.cy()-yMaintl);
    var blackWidowPath = jumpTo2014.clone()
        .dmove(black_widow.cx()-x2023,black_widow.cy()-yMaintl);

    // Draw the path of travel
    jumpTo2014.drawAnimated(1000,'<>')
        .stroke({ color: '#F0F', width: 3, linecap: 'round' });

    // Show power stone.
    powerStone.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);

    // Show 2014 stub
    stub2014.drawAnimated({
        duration: 400,
        easing: '<>',
        delay: 600
        })
        .stroke({ color: '#555', width: 3, linecap: 'round' });

    // Move rocket and thor to 2013
    var length = jumpTo2014.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased){
        var p = warMachinePath.pointAt(eased * length);
        war_machine.center(p.x, p.y);

        p = nebulaPath.pointAt(eased * length);
        nebula.center(p.x, p.y);

        p = hawkeyePath.pointAt(eased * length);
        hawkeye.center(p.x, p.y);

        p = blackWidowPath.pointAt(eased * length);
        black_widow.center(p.x, p.y);
    }).after(function() {
        var p = warMachinePath.pointAt(length);
        war_machine.center(p.x, p.y);

        p = nebulaPath.pointAt(length);
        nebula.center(p.x, p.y);

        p = hawkeyePath.pointAt(length);
        hawkeye.center(p.x, p.y);

        p = blackWidowPath.pointAt(length);
        black_widow.center(p.x, p.y);
    });

    // Give power stone to war machine
    var warMachine_coor = warMachinePath.pointAt(warMachinePath.length());
    powerStone.animate(500, '<>')
        .move(warMachine_coor.x, warMachine_coor.y);

    // Update click handler for hawkeye and black widow
    make_clickable(hawkeye, animate2014to2023_SoulStone, 1000);
    make_clickable(black_widow, animate2014to2023_SoulStone, 1000);

    // Update click handler for war machine and nebula
    powerStone.click(null);
    powerStone.click(animate2014To2023_PowerStone);
    make_clickable(war_machine, animate2014To2023_PowerStone, 1000);
    make_clickable(nebula, animate2014To2023_PowerStone, 1000);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2012to1970 = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for ironman and cap to jump to 1970
    var ironmanPath = jumpTo1970.clone()
        .dmove(ironman.cx()-x2012-width/20,ironman.cy()-y2012tl);
    var capPath = jumpTo1970.clone()
        .dmove(cap_am.cx()-x2012-width/20,cap_am.cy()-y2012tl);

    // Draw path of travel
    jumpTo1970.drawAnimated(1000,'<>')
        .stroke({ color: '#3FF', width: 3, linecap: 'round' });

    // Draw stub of new timeline
    stub1970.drawAnimated({
        duration: 400,
        easing: '<>',
        delay: 600
        })
        .stroke({ color: '#555', width: 3, linecap: 'round' });

    // Make new space stone appear
    spaceStone_1970.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);

    // Move cap and ironman to 1970
    var length = jumpTo1970.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        var p = ironmanPath.pointAt(eased * length);
        ironman.center(p.x, p.y);

        p = capPath.pointAt(eased * length);
        cap_am.center(p.x, p.y);
    }).after(function() {
        var p = ironmanPath.pointAt(length);
        ironman.center(p.x, p.y);

        p = capPath.pointAt(length);
        cap_am.center(p.x, p.y);
    });

    // Give time stone to hulk
    var cap_coor = capPath.pointAt(capPath.length());
    spaceStone_1970.animate(500, '<>')
        .move(cap_coor.x, cap_coor.y);

    // Update click handler for cap and ironman
    make_clickable(ironman, animate1970to2023, 1200);
    make_clickable(cap_am, animate1970to2023, 1200);
    spaceStone_1970.click(null);
    spaceStone_1970.click(animate1970to2023, 1200);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2012to2023 = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for Hulk and Antman return to present with time and mind stones
    var hulkPath = returnFrom2012.clone()
        .dmove(hulk.cx()-x2012-width/20,hulk.cy()-y2012tl);
    var antmanPath = returnFrom2012.clone()
        .dmove(antman.cx()-x2012-width/20,antman.cy()-y2012tl);

    // Draw the path of travel
    returnFrom2012.drawAnimated(1000,'<>')
        .stroke({ color: '#00F', width: 3, linecap: 'round' });

    // Move icons back to 2023. Stones and supers have to be move separately, since stones were previously
    // moved in this function
    var length = returnFrom2012.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        p = hulkPath.pointAt(eased * length);
        hulk.center(p.x, p.y);
        timeStone.move(p.x, p.y);

        p = antmanPath.pointAt(eased * length);
        antman.center(p.x, p.y)
        mindStone.move(p.x, p.y);
    }).after(function() {
        p = hulkPath.pointAt(length);
        hulk.center(p.x, p.y);
        timeStone.move(p.x, p.y);

        p = antmanPath.pointAt(length);
        antman.center(p.x, p.y)
        mindStone.move(p.x, p.y);
    });

    // Remove click handlers.
    make_unclickable(hulk);
    make_unclickable(antman);

    // Mark boolean that this dependency is satisfied
    mindStoneInPresent = true;
    timeStoneInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2013to2023 = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for Thor and Rocket return to present with reality stone and mjolnir
    var thorPath = returnFrom2013.clone()
        .dmove(thor.cx()-x2013-width/20,thor.cy()-y2013tl);
    var rocketPath = returnFrom2013.clone()
        .dmove(rocket.cx()-x2013-width/20,rocket.cy()-y2013tl);

    // Draw the path of travel
    returnFrom2013.drawAnimated(1000,'<>')
        .stroke({ color: '#F00', width: 3, linecap: 'round' });

    // Rocket and Thor return from 2013 with reality stone (and possibly Mjolnir)
    // moved in this function
    var length = returnFrom2013.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        p = thorPath.pointAt(eased * length);
        thor.center(p.x, p.y);
        mjolnir.move(p.x, p.y);

        p = rocketPath.pointAt(eased * length);
        rocket.center(p.x, p.y);
        realityStone.move(p.x, p.y);
    }).after(function() {
        p = thorPath.pointAt(length);
        thor.center(p.x, p.y);
        mjolnir.move(p.x, p.y);

        p = rocketPath.pointAt(length);
        rocket.center(p.x, p.y);
        realityStone.move(p.x, p.y);
    });

    // Remove click handlers
    make_unclickable(rocket);
    make_unclickable(thor);

    // Mark boolean that this dependency is satisfied
    realityStoneInPresent = true

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014to2023_SoulStone = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Black widow dissapears
	black_widow.animate(500,"<").move(black_widow.x(), height-black_widow.first().height()/2)
        .after(function() {
            black_widow.scale(1,0.5);
        });

	// Soul stone appears with hawkeye
	soulStone.move(hawkeye.cx(), hawkeye.cy());
	soulStone.animate(1000,"<>",1000)
        .opacity(1);

	// Trace path for hawkeye to return to present
    var hawkeyePath = returnFrom2014.clone()
        .opacity(0)
        .dmove(hawkeye.cx()-x2014-width/20,hawkeye.cy()-y2014tl);

    // Draw the path of travel, assuming war machine hasn't already travelled it
    if (!powerStoneInPresent) {
        returnFrom2014.drawAnimated({
            duration: 1000,
            easing: '<>',
            delay: 2000
            })
            .stroke({color: '#F0F', width: 3, linecap: 'round'});
    }

    // Rocket and Thor return from 2013 with reality stone (and possibly Mjolnir)
    // moved in this function
    var length = returnFrom2014.length();
    canvas.finish();
    canvas.animate(1000, '<>',2000).during(function(pos, morph, eased) {
        p = hawkeyePath.pointAt(eased * length);
        hawkeye.center(p.x, p.y);
        soulStone.move(p.x, p.y);
    }).after(function() {
        p = hawkeyePath.pointAt(length);
        hawkeye.center(p.x, p.y);
        soulStone.move(p.x, p.y);
    });
    
	// Remove click handler for hawkeye
    make_unclickable(hawkeye);
    make_unclickable(black_widow);

    // Mark boolean that this dependency is satisfied
    soulStoneInPresent = true

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 3000);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014To2023_PowerStone = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace path for war machine to return to present
    var warMachinePath = returnFrom2014.clone()
        .opacity(0)
        .dmove(war_machine.cx()-x2014-width/20,war_machine.cy()-y2014tl);


    // Draw the path of travel, assuming hawkeye hasn't already travelled it
    if (!soulStoneInPresent) {
        returnFrom2014.drawAnimated(1000, '<>')
            .stroke({color: '#F0F', width: 3, linecap: 'round'});
    }

    // War machine returns to 2023 with power stone. Nebula stays behind
    var length = returnFrom2014.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        p = warMachinePath.pointAt(eased * length);
        war_machine.center(p.x, p.y);
        powerStone.move(p.x, p.y);
    }).after(function() {
        p = warMachinePath.pointAt(length);
        war_machine.center(p.x, p.y);
        powerStone.move(p.x, p.y);
    });

    // Thanos, Gamora, and Evil Nebula show up
    thanos.animate(1000, '<>')
        .opacity(1);
    gamora.animate(1000, '<>')
        .opacity(1);
    nebula_evil.animate(1000, '<>')
        .opacity(1);

    // Remove click handlers
    powerStone.click(null);
    make_unclickable(war_machine);
    make_unclickable(nebula);

    // Create click handler for evil nebula
    make_clickable(nebula_evil, animate2014to2023_Nebula);

    // Add click handler for evil Nebula to go to the present.
    powerStoneInPresent = true

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014to2023_Nebula = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace path for evil nebula
    var nebulaPath = returnFrom2014.clone()
        .opacity(0)
        .dmove(nebula_evil.cx()-x2014-width/20,nebula_evil.cy()-y2014tl);

    // Evil nebula goes to 2023
    var length = returnFrom2014.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        p = nebulaPath.pointAt(eased * length);
        nebula_evil.center(p.x, p.y);
    }).after(function() {
        p = nebulaPath.pointAt(length);
        nebula_evil.center(p.x, p.y);
    });

    // Mark evil nebula in present
    nebulaInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    } else {
        make_unclickable(nebula_evil);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014to2023_Thanos = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace path of travel for thanos, gamora, and good nebula
    var nebulaPath = returnFrom2014.clone()
        .opacity(0)
        .dmove(nebula.cx()-x2014-width/20,nebula.cy()-y2014tl);
    var gamoraPath = returnFrom2014.clone()
        .opacity(0)
        .dmove(gamora.cx()-x2014-width/20,gamora.cy()-y2014tl);
    var thanosPath = returnFrom2014.clone()
        .opacity(0)
        .dmove(thanos.cx()-x2014-width/20,thanos.cy()-y2014tl);

    // Evil nebula goes to 2023
    var length = returnFrom2014.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        p = nebulaPath.pointAt(eased * length);
        nebula.center(p.x, p.y);

        p = gamoraPath.pointAt(eased * length);
        gamora.center(p.x, p.y);

        p = thanosPath.pointAt(eased * length);
        thanos.center(p.x, p.y);
    }).after(function() {
        p = nebulaPath.pointAt(length);
        nebula.center(p.x, p.y);

        p = gamoraPath.pointAt(length);
        gamora.center(p.x, p.y);

        p = thanosPath.pointAt(length);
        thanos.center(p.x, p.y);
    });

    // Remove click handler
    make_unclickable(nebula_evil);

    // Make Tony clickable
    make_clickable(ironman, finalBattle,1000);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate1970to2023 = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for Hulk and Antman return to present with time and mind stones
    var ironmanPath = returnFrom1970.clone()
        .dmove(ironman.cx()-x1970-width/20,ironman.cy()-y1970tl);
    var capPath = returnFrom1970.clone()
        .dmove(cap_am.cx()-x1970-width/20,cap_am.cy()-y1970tl);

    // Draw the path of travel
    returnFrom1970.drawAnimated(1000,'<>')
        .stroke({ color: '#3FF', width: 3, linecap: 'round' });

    // Cap and Ironman return to present with space stone
    var length = returnFrom1970.length();
    canvas.finish();
    canvas.animate(1000, '<>').during(function(pos, morph, eased) {
        p = ironmanPath.pointAt(eased * length);
        ironman.center(p.x, p.y);

        p = capPath.pointAt(eased * length);
        cap_am.center(p.x, p.y);
        spaceStone_1970.move(p.x, p.y);
    }).after(function() {
        p = ironmanPath.pointAt(length);
        ironman.center(p.x, p.y);

        p = capPath.pointAt(length);
        cap_am.center(p.x, p.y);
        spaceStone_1970.move(p.x, p.y);
    });

    // Remove click handlers
    make_unclickable(ironman);
    make_unclickable(cap_am);
    spaceStone_1970.click(null);

    // Mark boolean that this dependency is satisfied
    spaceStoneInPresent = true

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

// TODO
var finalBattle = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Thanos gets dusted, Ironman and evil gamora die. Add event handler for cap to return infinity
    // stones.

    // TODO: Optional - Give infinity stones to hulk and he brings everyone back with portals and shit
    // TODO: Mjolnir goes to cap

    var ix = ironman.x();
    var iy = ironman.y();
    var ih = ironman.first().height();
    var iw = ironman.first().width();
    powerStone.animate(500, "<>").move(ix, iy);
    soulStone.animate(500, "<>").move(ix+iw-soulStone.width(), iy);
    timeStone.animate(500, "<>").move(ix-timeStone.width()/2, iy + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(500, "<>").move(ix, iy+ih-spaceStone_1970.height());
    realityStone.animate(500, "<>").move(ix+iw/2-realityStone.width()/2, iy - realityStone.height()/3);
    mindStone.animate(500, "<>").move(ix+iw-mindStone.width()/2, iy + ih/2 - mindStone.height()/2);
    mjolnir.animate(500, "<>").move(cap_am.cx(), cap_am.cy());

    thanos.animate(1000,"<",750).opacity(0);

    // Remove click handler
    make_unclickable(ironman);
    make_clickable(cap_am, capReturnsStones, 2000);

    // Pulsate all clickable icons periodically
    setPulsating();
};

// TODO
var capReturnsStones = function() {
    // Temporarily reset the pulsating icons
    clearInterval(pulsatingInterval);

    // Give stones to cap
    var ix = cap_am.x();
    var iy = cap_am.y();
    var ih = cap_am.first().height();
    var iw = cap_am.first().width();
    powerStone.animate(500, "<>").move(ix, iy);
    soulStone.animate(500, "<>").move(ix+iw-soulStone.width(), iy);
    timeStone.animate(500, "<>").move(ix-timeStone.width()/2, iy + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(500, "<>").move(ix, iy+ih-spaceStone_1970.height());
    realityStone.animate(500, "<>").move(ix+iw/2-realityStone.width()/2, iy - realityStone.height()/3);
    mindStone.animate(500, "<>").move(ix+iw-mindStone.width()/2, iy + ih/2 - mindStone.height()/2);

    // Move cap to 2014 timeline with all stones
    cap_am.animate(1000, "<>", 750).move(x2014 + width/20, y2014tl);
    powerStone.animate(1000, "<>", 250).move(x2014 + width/20, y2014tl);
    soulStone.animate(1000, "<>", 250).move(x2014 + width/20+iw-soulStone.width(), y2014tl);
    timeStone.animate(1000, "<>", 250).move(x2014 + width/20-timeStone.width()/2, y2014tl + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(1000, "<>", 250).move(x2014 + width/20, y2014tl+ih-spaceStone_1970.height());
    realityStone.animate(1000, "<>", 250).move(x2014+iw/2-realityStone.width()/2 + width/20, y2014tl - realityStone.height()/3);
    mindStone.animate(1000, "<>", 250).move(x2014 + width/20+iw-mindStone.width()/2, y2014tl + ih/2 - mindStone.height()/2);
    mjolnir.animate(1000, "<>", 750).move(x2014 + width/20 + iw/2, y2014tl + ih/2);
    // TODO: Adjust position of soul and power stones. Reveal rest of 2014 timeline on slight delay

    // Move cap to 2013 timeline. Leave power and soul stones behind
    cap_am.animate(1000, "<>", 250).move(x2013 + width/20, y2013tl);
    timeStone.animate(1000, "<>", 250).move(x2013 + width/20-timeStone.width()/2, y2013tl + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(1000, "<>", 250).move(x2013 + width/20, y2013tl+ih-spaceStone_1970.height());
    realityStone.animate(1000, "<>", 250).move(x2013+iw/2-realityStone.width()/2 + width/20, y2013tl - realityStone.height()/3);
    mindStone.animate(1000, "<>", 250).move(x2013 + width/20+iw-mindStone.width()/2, y2013tl + ih/2 - mindStone.height()/2);
    mjolnir.animate(1000, "<>", 250).move(x2013 + width/20 + iw/2, y2013tl + ih/2);
    // TODO: Adjust position of reality stone and mjolnir. Reveal rest of 2013 timeline on slight delay

    // Move cap to 2012 timeline. Leave reality stone behind
    cap_am.animate(1000, "<>", 250).move(x2012 + width/20, y2012tl);
    timeStone.animate(1000, "<>", 250).move(x2012 + width/20-timeStone.width()/2, y2012tl + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(1000, "<>", 250).move(x2012 + width/20, y2012tl+ih-spaceStone_1970.height());
    mindStone.animate(1000, "<>", 250).move(x2012 + width/20+iw-mindStone.width()/2, y2012tl + ih/2 - mindStone.height()/2);
    // TODO: Adjust position of mind and time stones. Reveal rest of 2012 timeline on slight delay.

    // Move cap to 1970 timeline. Leave mind and time stones behind
    cap_am.animate(1000, "<>", 250).move(x1970 + width/20, y1970tl);
    spaceStone_1970.animate(1000, "<>", 250).move(x1970 + width/20, y1970tl+ih-spaceStone_1970.height());
    // TODO: Adjust position of space stone. Reveal rest of 1970 timeline on slight delay

    make_clickable(cap_am, capLivesOutLife, 4500);
    // Cap moves to 1970. Leaves space stone and restof 1970 timeline populates. Cap travels along
    // this timeline and we see a prompt where he's sitting on the bench
};

var capLivesOutLife = function() {
    // TODO: Cap travels along
};

// TODO
var gotg2014Prompt = function() {

};

// TODO
var endgame2013Prompt = function() {

};

// TODO
var loki2012Prompt = function() {

};

// TODO
var endgame1970Prompt = function() {

};

// TODO
var bench1970Prompt = function() {

};


$(document).ready(function() {
    $('#reset').on('click', function() {
        reset();
    });

    $('#fullscreen').on('click', function () {
        // if already full screen; exit
        // else go fullscreen
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            $("#fullscreen")[0].src = "fullscreen.png";
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            // TODO: Get a new png for exitfullscreen
            $("#fullscreen")[0].src = "exitfullscreen.png";
            element = $('#endgame-container')[0];
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }

        // var container = $('#endgame-container')[0];
        // canvas.scale(container.clientHeight / canvas.height(), container.clientWidth / canvas.width());
        // canvas.height(container.clientHeight);
        // canvas.width(container.clientWidth);
    });

    $('#endgame-container')[0].addEventListener("fullscreenchange", function () {
        reset();
    });
    $('#endgame-container')[0].addEventListener("mozfullscreenchange", function () {
        reset();
    });
    $('#endgame-container')[0].addEventListener("webkitfullscreenchange", function () {
        reset();
    });
    $('#endgame-container')[0].addEventListener("msfullscreenchange", function () {
        reset();
    });

    $("#reset").hover(
        function(){$(this).animate({width: "32px", height:"32px"}, 300);},
        function(){$(this).animate({width: "26px", height:"26px"}, 300);}
    );
    $("#fullscreen").hover(
        function(){$(this).animate({width: "32px", height:"32px"}, 300);},
        function(){$(this).animate({width: "26px", height:"26px"}, 300);}
    );

    reset();
});
