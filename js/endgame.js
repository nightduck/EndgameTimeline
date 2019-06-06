// Define string resources
const rsc_string = {
    info_2012: "This timeline was royally messed up. Not only did Cap interact with Hydra, possibly interfering with the events of Winter Solder, but Loki escaped with the space stone to go star in his own TV show. It's likely Thanos still gets all the stones, but the snap would play out very differently",
    info_1950: "After jumping between alternate realities (plothole) without creating new branched realities (plothole), catching up with redskull, and replacing all the stones in their original forms (plothole), he finally returned to Peggy for that dance. They lived out their happy ending in a new timeline. And he never left (see cap on bench)",
    info_1970: "In this timeline, Steve and Stark stole some Pym particles, borrowed the Tessaract, and Stark resolved some daddy issues.",
    info_2013: "Why is it the timeline with the most emotionally unstable avenger is the only one to go according to plan? They got the reality stone and Mjolnir, which were replaced by Cap, and the events of this timeline developed almost identically to prime reality.",
    info_2014: "Black Widow dies so Hawkeye can get the soul stone. Thanos, Gamora, and Evil Nebula capture good Nebula when she attempts to return to the present. Evil Nebula goes back in her place and summons Thanos and his minions back to the future.",
    info_bench: "Since cap doesn't return through the machine, we can conclude he never returns to his own reality. The Cap sitting on the bench is not the Cap that we just saw travel back in time. Rather, the Cap on the bench is from this branch's parent reality. Thus, the movie does not portray prime reality, it portrays a branched reality.",
    info_2014gotg: "In this timeline, Gamora is absent. Drax never would've met Quill and Rocket without Gamora being assaulted in the prison. The prison breakout would only be performed by Quill, Rocket, and Groot. Rocket and Groot leave Quill behind when he goes to get his cassette player. Thus, Quill stays in jail and Ronan gets the power stone from him when he raids the prison later. Also, Thanos is now absent from this timeline, greatly upsetting the political balance of the universe.",
    info_1970endgame: "When the tessaract is returned to this timeline, events play out the same way they would've in prime reality. Thus this reality has its own snap, it's own time travel, and it's own branched timelines. These branches have their own branches on and on into infinite fractals",
    info_2013endgame: "When the reality stone and Mjolnir are returned to this timeline, events play out the same way they would've in prime reality. Thus this reality has it's own snap, it's own time travel, and it's own branched timelines. These branches have their own branches on and on into infinite fractals",
    jumpTo2012: "The center stage in this three ring circus: Stark, Steve, Scott, and Bruce travel to the attack on New York to retrieve 3 infinity stones. Let's see how that turns out.",
    lokiFucksOff: "Oh shit where did Loki go?",
    jumpTo2013: "Thor and Rocket head to Asgard circa Thor: The Dark World to retrieve the reality stone.",
    jumpTo2014: "Rhodey and Nebula go to Morag circa Guardians of the Galaxy to retrieve the power stone. ScarJo and Hawkeye go with them, but head to Vormir to get the Soul Stone",
    jumpTo1970: "In a bold act of improvising that would make Ryan Stiles proud, Steve and Tony go to a military base in 1970 to retrieve another Tesseract and some Pym particles",
    returnFrom2012: "Bruce and Scott return to the present, time stone and mind stone in hand.",
    returnFrom2013: "Thor and Rocket return to the present with the reality stone and a souvenir.",
    returnFrom2014_SoulStone: "After Clint brutally murders his lifetime co-worker, he acquires the soul stone and returns to the present",
    returnFrom2014_PowerStone: "Rhodey returns with the power stone, but Nebula is kidnapped, though Rhodey is unaware of this.",
    returnFrom1970: "Cap and Stark each encounter old friends, and return to the present",
    returnFrom2014_Nebula: "2014 Nebula disguises herself as 2023 Nebula and goes to the future/present (depending on your point of view)",
    thanosToPresent: "Nebula hacks into ... something, and summons Thanos and his army into the future where we prepare for act 3",
    starkStones: "Stark manages to acquire the stones and snaps Thanos into oblivion. Also Cap picks up Mjolnir",
    capStones: "Cap collects all the stones and Mjolnir. After jumping between alternate realities (plothole) without creating new branched realities (plothole), catching up with redskull, and replacing all the stones in their original forms (plothole), he finally returned to Peggy for that dance.",
    capLivesOutLife: "Cap and Peggy grow old together and witness events play out the way they would in prime reality. Cap never returns to his original timeline. He does, however, put Peggy in a home once she starts getting senile."
};

// Define all variables initializes in redraw so they're visible globally
var margin, width, height, verticalOffset, iw, fontsize, clickable_gradient, unclickable_gradient,
    x1950, x1970, x2012, x2013, x2014, x2018, x2023,
    y1950tl, y1970tl, y2013tl, yMaintl, y2014tl, y2012tl,
    x = [], y = [], dw, dh,
    spaceStoneInPresent = false, mindStoneInPresent = false, realityStoneInPresent = false, timeStoneInPresent = false,
    powerStoneInPresent = false, soulStoneInPresent = false, thanosInPresent = false, nebulaInPresent = false,
    canvas, background,
    tlMain, tick1950_onMain, tick1970_onMain, tick2012_onMain, tick2013_onMain, tick2014_onMain, tick2018_onMain, tick2023_onMain,
    label1950_onMain, label1970_onMain, label2012_onMain, label2013_onMain, label2014_onMain, label2018_onMain, label2023_onMain,
    stub1950, stub1970, stub2012, stub2013, stub2014,
    tl1950, tick2018_on1950, tickbench_on1950, label2018_on1950, labelbench_on1950,
    tl1970, tick2018_on1970, tick2023_on1970, label2018_on1970, label2023_on1970,
    tl2012, tick2018_on2012, label2018_on2012,
    tl2013, tick2018_on2013, tick2023_on2013, label2018_on2013, label2023_on2013,
    tl2014,
    jumpTo1970, jumpTo2012, jumpTo2013, jumpTo2014,
    returnFrom1970, returnFrom2012, returnFrom2013, returnFrom2014,
    ironman, cap_am, hulk, antman, hawkeye, thor, rocket, gamora, war_machine, black_widow, nebula, peggy,
    ironman_glow, cap_am_glow, hulk_glow, antman_glow, hawkeye_glow, thor_glow, rocket_glow, gamora_glow, peggy_glow,
    war_machine_glow, black_widow_glow, nebula_glow,
    nebula_evil, thanos, loki,
    nebula_evil_glow, thanos_glow, loki_glow,
    info_2012, info_2013, info_2014, info_1970, info_1950, info_bench, info_2014gotg, info_1970endgame,
    info_2013endgame,
    soulStone, powerStone, realityStone, spaceStone_loki, spaceStone_1970,  timeStone, mindStone, mjolnir,
    groupMainTimeline, group1950Timeline, group1970Timeline, group2012Timeline, group2013Timeline, group2014Timeline,
    group1950Fractals, group1970Fractals, group2012Fractals, group2013Fractals,
    clickables = [],
    pulsatingInterval,
    ironmanCapState = 0,    // This tracks the plotline of cap and ironman. For states >=5, it also tracks items
    hulkState = 0,          // This tracks the plotline of hulk and antman
    thorState=0,            // This tracks the plotline of thor and rocket
    nebulaState = 0,        // This tracks the plotline of nebula, war machine, thanos, evil nebula, and gamora
    hawkeyeState=0;         // This trakcs the plotline of hawkeye and black widow

var imgPath = "rsc/endgame/";

var finishAllAnimations = function(dom) {
      dom.finish();
      if (dom.children) {
          for (var i in dom.children()) {
              finishAllAnimations(dom.children()[i]);
          }
      }
};

// Initial conditions
var redraw = function() {
    //Make fullscreen icon visible
    $('#fullscreen')[0].style.visibility = "visible";

    // Clear list of clickables
    clickables.length = 0;

    // Clear the padding, in case they were set for mobile portrait mode
    document.getElementById('top-padding').style.height = "0px";
    document.getElementById('bottom-padding').style.height = "0px";
    document.getElementById('canvas-caption').classList.remove('caption-drawer');
    document.getElementById('canvas-caption').classList.remove('visible');
    document.getElementById('show-caption').classList.add('hidden');

    // Define bounds. Limit height to a 4:3 aspect ratio, and if in fullscreen, center vertically
    margin = 20;
    width = document.getElementById("endgame-canvas").offsetWidth;
    fontsize = Math.min(16, width/50);
    // if (
    //     document.fullscreenElement ||
    //     document.webkitFullscreenElement ||
    //     document.mozFullScreenElement ||
    //     document.msFullscreenElement
    // ) {
    //     // If fullscreen, set height to height of screen
    //     height = window.screen.availHeight;
    // } else {
    //     // If not in fullscreen, set height to the max the div will allow, ...
    //     height = parseInt(getComputedStyle(document.getElementById("endgame-canvas")).maxHeight, 10);
    //     if (height > window.screen.availHeight) {
    //         // ... unless that max div height is higher than the screen, then just max out at screen height. This
    //         // scenario is common on mobile landscape views
    //         height = window.screen.availHeight;
    //     }
    // }
    // Set the height to the screen height to begin with, then crop to a 4:3 aspect ratio if that's a bit much
    height = window.screen.availHeight;
    if (height > 3 / 4 * width) {
        // If the height is too tall, correct it to a 4:3 aspect ratio
        var newHeight = 3 / 4 * width;
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            // If the user is on mobile in portrait mode, we want to center the canvas vertically, so pad the top and
            // bottom
            filler = (height - newHeight) / 2;
            document.getElementById('top-padding').style.height = filler + "px";
            document.getElementById('bottom-padding').style.height = filler + "px";
        }
        height = newHeight;
    } else {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            document.getElementById('canvas-caption').classList.add('caption-drawer');
            document.getElementById('canvas-caption').classList.add('visible');
            document.getElementById('show-caption').classList.remove('hidden');
            document.getElementById('show-caption').src = imgPath + "down-chevron.png";
        }
    }

    // Define grid and key axis points
    dw = (width - 2 * margin) / 40;
    dh = (height - 2 * margin) / 40;
    var i;
    for (i = 0; i < 40; i++) {
        x[i] = (i * dw + margin);
        y[i] = (i * dh + margin)
    }
    var xBreakStart = x[6],
        xBreakEnd = x[8];
    x1950 = x[0],
        x1970 = x[4],
        x2012 = x[10],
        x2013 = x[16],
        x2014 = x[22],
        x2018 = x[28],
        x2023 = x[34],
        y1950tl = y[2],
        y1970tl = y[9],
        y2013tl = y[15],
        yMaintl = y[22],
        y2014tl = y[30],
        y2012tl = y[37],
        spaceStoneInPresent = false,
        mindStoneInPresent = false,
        realityStoneInPresent = false,
        powerStoneInPresent = false,
        soulStoneInPresent = false,
        thanosInPresent = false,
        nebulaInPresent = false;
    if (dw < 20) {
        iw = 2*dw;    // Set iw to smaller value if screen width too small
    } else {
        iw = 40;
    }

    // If the canvas is already defined, clear it. Otherwise, define a new one
    if (canvas) {
        // Cancel any ongoing animations
        clearInterval(pulsatingInterval);
        finishAllAnimations(canvas);

        // C
        canvas.clear().size(width, height);

    } else {
        canvas = SVG('endgame-canvas').size(width, height);
    }

    // Define workspace
    background = canvas.rect(width, height).fill('#d3d3d3');

// Draw main timeline
    dxBreak = (xBreakEnd - xBreakStart) / 8;
    tlMain = canvas.polyline([0, yMaintl, xBreakStart, yMaintl, xBreakStart + dxBreak, yMaintl - 5,
        xBreakStart + 3 * dxBreak, yMaintl + 5, xBreakEnd - 3 * dxBreak, yMaintl - 5,
        xBreakEnd - dxBreak, yMaintl + 5, xBreakEnd, yMaintl, width, yMaintl])
        .fill('none')
        .stroke({color: '#333', width: 2, linejoin: 'round'});
    tick1950_onMain = canvas.line(x1950, yMaintl - 5, x1950, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tick1970_onMain = canvas.line(x1970, yMaintl - 5, x1970, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tick2012_onMain = canvas.line(x2012, yMaintl - 5, x2012, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tick2013_onMain = canvas.line(x2013, yMaintl - 5, x2013, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tick2014_onMain = canvas.line(x2014, yMaintl - 5, x2014, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tick2018_onMain = canvas.line(x2018, yMaintl - 5, x2018, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tick2023_onMain = canvas.line(x2023, yMaintl - 5, x2023, yMaintl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    label1970_onMain = canvas.text("1970")
        .font({family: 'Helvetica', size : fontsize})
        .cx(x1970)
        .y(yMaintl + 10);
    label1950_onMain = label1970_onMain.clone()
        .text("1950?")
        .cx(x1950);
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
    stub1950 = canvas.path('M' + x1950 + ' ' + yMaintl + ' c ' + dw + ' 0 0 '
        + (y1950tl - yMaintl) + ' ' + 2 * dw + ' ' + (y1950tl - yMaintl))
        .fill('none');
    stub1970 = canvas.path('M' + x1970 + ' ' + yMaintl + ' c ' + dw + ' 0 0 '
        + (y1970tl - yMaintl) + ' ' + 2 * dw + ' ' + (y1970tl - yMaintl))
        .fill('none');
    stub2012 = canvas.path('M' + x2012 + ' ' + yMaintl + ' c ' + width / 40 + ' 0 0 '
        + (y2012tl - yMaintl) + ' ' + width / 20 + ' ' + (y2012tl - yMaintl))
        .fill('none');
    stub2013 = canvas.path('M' + x2013 + ' ' + yMaintl + ' c ' + width / 40 + ' 0 0 '
        + (y2013tl - yMaintl) + ' ' + width / 20 + ' ' + (y2013tl - yMaintl))
        .fill('none');
    stub2014 = canvas.path('M' + x2014 + ' ' + yMaintl + ' c ' + width / 40 + ' 0 0 '
        + (y2014tl - yMaintl) + ' ' + width / 20 + ' ' + (y2014tl - yMaintl))
        .fill('none');

    // 1950 Timeline
    //tl1950 = canvas.line(x1950 + 2*dw, y1950tl, width, y1950tl)
    tl1950 = canvas.path('M' + (x1950 + 2*dw) + ' ' + y1950tl + ' L ' + width + ',' + y1950tl)
        .fill('none');
    tick2018_on1950 = canvas.line(x2018, y1950tl - 5, x2018, y1950tl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    tickbench_on1950 = canvas.line(x2023+2*dw, y1950tl - 5, x2023+2*dw, y1950tl + 5)
        .fill('none')
        .stroke({color: '#333', width: 2, linecap: 'round'});
    label2018_on1950 = canvas.text("The Snap")
        .font({family: 'Helvetica', size : fontsize})
        .cx(x2018)
        .y(y1950tl + 10);
    labelbench_on1950 = label2018_on1950.clone()
        .text("Cap on Bench")
        .x(x2023+2*dw);

// 1970 Timeline
    tl1970 = canvas.polyline([x1970 + width / 20, y1970tl, xBreakStart + 2 * dxBreak, y1970tl,
        xBreakStart + 3 * dxBreak, y1970tl + 5, xBreakEnd - 3 * dxBreak, y1970tl - 5,
        xBreakEnd - dxBreak, y1970tl + 5, xBreakEnd, y1970tl, width, y1970tl])
        .fill('none')
        .stroke({color: '#555', width: 2, linejoin: 'round', linecap: 'round'});
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
        .y(y1970tl + 10);
    label2023_on1970 = label2023_onMain.clone()
        .y(y1970tl + 10);

// 2012 NYC Timeline
    tl2012 = canvas.line(x2012 + width / 20, y2012tl, width, y2012tl)
        .stroke({color: '#555', width: 2, linejoin: 'round', linecap: 'round'});
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
        .text("The Snap?")
        .y(y2012tl + 10);
// var label2023_on2012 = label2023_onMain.clone()
//     .y(y2012tl+10);

// 2013 Asgard timeline
    tl2013 = canvas.line(x2013 + width / 20, y2013tl, width, y2013tl)
        .stroke({color: '#555', width: 2, linejoin: 'round', linecap: 'round'});
//var tick2014_on2013 = tick2014_onMain.clone()
//  .cy(y2013tl)
    tick2018_on2013 = tick2018_onMain.clone()
        .cy(y2013tl);
    tick2023_on2013 = tick2023_onMain.clone()
        .cy(y2013tl);
//var label2014_on2013 = label2014_onMain.clone()
//  .y(y2013tl+10)
    label2018_on2013 = label2018_onMain.clone()
        .y(y2013tl + 10);
    label2023_on2013 = label2023_onMain.clone()
        .y(y2013tl + 10);

// 2014 GotG Timeline
    tl2014 = canvas.line(x2014 + width / 20, y2014tl, width, y2014tl)
        .stroke({color: '#555', width: 2, linejoin: 'round', linecap: 'round'});
// var tick2018_on2014 = tick2018_onMain.clone()
//   .cy(y2014tl)
// var tick2023_on2014 = tick2023_onMain.clone()
//   .cy(y2014tl)
// var label2018_on2014 = label2018_onMain.clone()
//   .y(y2014tl+10)
// var label2023_on2014 = label2023_onMain.clone()
//   .y(y2014tl+10)

    // Fractal timelines
    var fractal1950_2014 = canvas.path('M' + x2014 + ' ' + y1950tl + ' c ' + dw/2 + ' 0 0 '
        + 2*dw + ' ' + dw + ' ' + 2*dw + ' l ' + dw + ' 0')
        .fill('none')
        .stroke({ width: 2, color: '#555', dasharray: '3,3' });
    var fractal1950_2013 = canvas.path('M' + x2013 + ' ' + y1950tl + ' c ' + dw/2 + ' 0 0 '
        + -2*dw + ' ' + dw + ' ' + -2*dw + ' l ' + dw + ' 0')
        .fill('none')
        .stroke({ width: 2, color: '#555', dasharray: '3,3' });
    var fractal1950_2012 = fractal1950_2014.clone().x(x2012);
    var fractal1950_1970 = fractal1950_2013.clone().x(x1970);
    var fractal1950_1950 = canvas.path('M' + x1950 + ' ' + yMaintl + ' c ' + dw/2 + ' 0 0 '
        + 4*dw + ' ' + dw + ' ' + 4*dw + ' l ' + dw + ' 0')
        .fill('none')
        .stroke({ width: 2, color: '#555', dasharray: '3,3' });
    var fractal1970_2014 = fractal1950_2014.clone().y(y1970tl);
    var fractal1970_2013 = fractal1950_2013.clone().y(y1970tl-2*dw);
    var fractal1970_2012 = fractal1950_2012.clone().y(y1970tl);
    var fractal1970_1970 = fractal1950_1950.clone().x(x1970);
    var fractal1970_1950 = fractal1950_1950.clone();
    var fractal2013_2014 = fractal1950_2014.clone().y(y2013tl);
    var fractal2013_2013 = fractal1950_1950.clone().x(x2013);
    var fractal2013_2012 = canvas.path('M' + x2012 + ' ' + yMaintl + ' c ' + dw/2 + ' 0 0 '
        + -4*dw + ' ' + dw + ' ' + -4*dw + ' l ' + dw + ' 0')
        .fill('none')
        .stroke({ width: 2, color: '#555', dasharray: '3,3' });
    var fractal2013_1970 = fractal1970_1970.clone();
    var fractal2013_1950 = fractal1950_1950.clone();

// Time travel paths
    jumpTo1970 = canvas.path('M' + (x2012 + 2 * dw) + ' ' + y2012tl +
        ' c' + -8 * dw + ',' + 0 + ' ' + -8 * dw + ',' + -24 * dh + ' ' + -6 * dw + ',' + -28 * dh)
        .fill('none');
    jumpTo2012 = canvas.path('M' + x2023 + ',' + yMaintl +
        ' c ' + -3 * dw + ',' + dh + ' ' + -3 * dw + ',' + dh + ' ' + -6 * dw + ',' + dh +
        ' c ' + -3 * dw + ',' + 0 + ' ' + -7 * dw + ',' + 0 + ' ' + -10 * dw + ',' + 0 +
        ' c ' + -3 * dw + ',' + 0 + ' ' + -5 * dw + ',' + 1 * dh + ' ' + -6 * dw + ',' + 4 * dh +
        ' c ' + -1 * dw + ',' + 3 * dh + ' ' + -1 * dw + ',' + 8 * dh + ' ' + 0 + ',' + 10 * dh)
        .fill('none');
    jumpTo2013 = canvas.path('M' + x2023 + ',' + yMaintl +
        ' c ' + -2.5 * dw + ',' + -2 * dh + ' ' + -2.5 * dw + ',' + -2 * dh + ' ' + -5 * dw + ',' + -2 * dh +
        ' c ' + -2.5 * dw + ',' + 0 + ' ' + -3.5 * dw + ',' + 0 + ',' + -6 * dw + ',' + 0 +
        ' c ' + -2.5 * dw + ',' + 0 + ' ' + -4.5 * dw + ',' + -1 * dh + ' ' + -5 * dw + ',' + -2 * dh +
        ' c ' + -0.5 * dw + ',' + -1 * dh + ' ' + -0.5 * dw + ',' + -2 * dh + ' ' + 0 + ',' + -3 * dh)
        .fill('none');
    jumpTo2014 = canvas.path('M' + x2023 + ',' + yMaintl +
        ' c ' + -3 * dw + ',' + 3 * dh + ' ' + -2 * dw + ',' + 3 * dh + ' ' + -5 * dw + ',' + 3 * dh +
        ' c ' + -3 * dw + ',' + 0 + ' ' + -4 * dw + ',' + 0 + ' ' + -5 * dw + ',' + 2 * dh +
        ' c ' + -0.5 * dw + ',' + 1 * dh + ' ' + -0.5 * dw + ',' + 2 * dh + ' ' + 0 + ',' + 3 * dh)
        .fill('none')

    returnFrom1970 = canvas.path('M' + (x1970 + 2 * dw) + ' ' + y1970tl +
        ' c ' + -1 * dw + ',' + 2 * dh + ' ' + -1 * dw + ',' + 4 * dh + ' ' + 0 + ',' + 7 * dh +
        ' c ' + 1 * dw + ',' + 3 * dh + ' ' + 3 * dw + ',' + 5 * dh + ' ' + 6 * dw + ',' + 5 * dh +
        ' c ' + 3 * dw + ',' + 0 + ' ' + 14 * dw + ',' + 0 + ' ' + 17 * dw + ',' + 0 +
        ' c ' + 3 * dw + ',' + 0 + ' ' + 3 * dw + ',' + 0 + ' ' + 5 * dw + ',' + 1 * dh)
        .fill('none');
    returnFrom2012 = canvas.path('M' + (x2012 + 2 * dw) + ' ' + y2012tl +
        ' c ' + -1 * dw + ',' + -2 * dh + ' ' + -1 * dw + ',' + -6 * dh + ' ' + 0 + ',' + -9 * dh +
        ' c ' + 1 * dw + ',' + -3 * dh + ' ' + 3 * dw + ',' + -4 * dh + ' ' + 6 * dw + ',' + -4 * dh +
        ' c ' + 3 * dw + ',' + 0 + ' ' + 8 * dw + ',' + 0 + ' ' + 11 * dw + ',' + 0 +
        ' c ' + 3 * dw + ',' + 0 + ' ' + 3 * dw + ',' + -1 * dh + ' ' + 5 * dw + ',' + -2 * dh)
        .fill('none');
    returnFrom2013 = canvas.path('M' + (x2013 + 2 * dw) + ' ' + y2013tl +
        ' c ' + -0.4 * dw + ',' + 1 * dh + ' ' + -0.4 * dw + ',' + 1 * dh + ' ' + 0 + ',' + 2 * dh +
        ' c ' + 0.5 * dw + ',' + 1 * dh + ' ' + 2.5 * dw + ',' + 2 * dh + ' ' + 5 * dw + ',' + 2 * dh +
        ' c ' + 2.5 * dw + ',' + 0 + ' ' + 3.5 * dw + ',' + 0 + ' ' + 6 * dw + ',' + 0 +
        ' c ' + 2.5 * dw + ',' + 0 + ' ' + 2.5 * dw + ',' + dh + ' ' + 5 * dw + ',' + 3 * dh)
        .fill('none');
    returnFrom2014 = canvas.path('M' + (x2014 + width / 20) + ' ' + y2014tl +
        ' c ' + -0.3 * dw + ',' + -0.8 * dh + ' ' + -0.3 * dw + ',' + -1.2 * dh + ' ' + 0 + ',' + -2 * dh +
        ' c ' + 1 * dw + ',' + -2 * dh + ' ' + 2 * dw + ',' + -2 * dh + ' ' + 5 * dw + ',' + -2 * dh +
        ' c ' + 2 * dw + ',' + 0 + ' ' + 2 * dw + ',' + dh + ' ' + 5 * dw + ',' + -4 * dh)
        .fill('none');

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
    group1950Timeline = canvas.group()
        .add(tickbench_on1950)
        .add(tick2018_on1950)
        .add(labelbench_on1950)
        .add(label2018_on1950)
        .opacity(0);
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
    group1950Fractals = canvas.group()
        .add(fractal1950_2014)
        .add(fractal1950_1950)
        .add(fractal1950_1970)
        .add(fractal1950_2012)
        .add(fractal1950_2013)
        .opacity(0);
    group1970Fractals = canvas.group()
        .add(fractal1970_1950)
        .add(fractal1970_1970)
        .add(fractal1970_2012)
        .add(fractal1970_2013)
        .add(fractal1970_2014)
        .opacity(0);
    group2012Fractals = canvas.group();
    group2013Fractals = canvas.group()
        .add(fractal2013_1950)
        .add(fractal2013_1970)
        .add(fractal2013_2012)
        .add(fractal2013_2013)
        .add(fractal2013_2014)
        .opacity(0);

// Gradients
    clickable_gradient = canvas.gradient('radial', function (stop) {
        stop.at(0, '#ddf');
        stop.at(0.7, '#ddf');
        stop.at(0.8, '#77f');
        stop.at({offset: 1, color: '#fff', opacity: 0});
    });
    unclickable_gradient = canvas.gradient('radial', function (stop) {
        stop.at({offset: 0, color: '#fff', opacity: 0});
    });

    // Define prompt icons (for exploring app after animations are all done
    var info_2012_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var info_icon = canvas.image(imgPath + "prompt.png")
        .size(iw*0.8, iw*0.8).center(info_2012_glow.cx(), info_2012_glow.cy());
    info_2012 = canvas.group().add(info_2012_glow).add(info_icon)
        .center(x2012+2*dw, y2012tl)
        .opacity(0);

    info_1950 = info_2012.clone().center(x1950, yMaintl);
    info_1970 = info_2012.clone().center(x1970+2*dw, y1970tl);
    info_2013 = info_2012.clone().center(x2013+2*dw, y2013tl);
    info_2014 = info_2012.clone().center(x2014+2*dw, y2014tl);
    info_bench = info_2012.clone().center(x2023+2*dw, y1950tl);
    info_2014gotg = info_2012.clone().center(x2014+6*dw, y2014tl);
    info_1970endgame = info_2012.clone().center(x2023, y1970tl);
    info_2013endgame = info_2012.clone().center(x2023, y2013tl);

// Icons
    ironman_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var ironman_icon = canvas.image(imgPath + "ironman.png")
        .size(iw*0.8, iw*0.8).center(ironman_glow.cx(), ironman_glow.cy())
    ironman = canvas.group().add(ironman_glow).add(ironman_icon)
        .move(x2023, yMaintl - iw);

    cap_am_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var cap_am_icon = canvas.image(imgPath + "cap.png")
        .size(iw*0.8, iw*0.8).center(cap_am_glow.cx(), cap_am_glow.cy());
    cap_am = canvas.group().add(cap_am_glow).add(cap_am_icon)
        .move(x2023 + iw, yMaintl - iw);

    hulk_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var hulk_icon = canvas.image(imgPath + "hulk.png")
        .size(iw*0.8, iw*0.8).center(hulk_glow.cx(), hulk_glow.cy());
    hulk = canvas.group().add(hulk_glow).add(hulk_icon)
        .move(x2023, yMaintl);

    antman_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var antman_icon = canvas.image(imgPath + "antman.png")
        .size(iw*0.8, iw*0.8).center(antman_glow.cx(), antman_glow.cy());
    antman = canvas.group().add(antman_glow).add(antman_icon)
        .move(x2023 + iw, yMaintl);

    thor_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var thor_icon = canvas.image(imgPath + "thor.png")
        .size(iw*0.8, iw*0.8).center(thor_glow.cx(), thor_glow.cy());
    thor = canvas.group().add(thor_glow).add(thor_icon)
        .move(x2023 + 2 * iw, yMaintl - iw);

    rocket_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var rocket_icon = canvas.image(imgPath + "rocket.png")
        .size(iw*0.8, iw*0.8).center(rocket_glow.cx(), rocket_glow.cy());
    rocket = canvas.group().add(rocket_glow).add(rocket_icon)
        .move(x2023 + 2 * iw, yMaintl);

    nebula_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var nebula_icon = canvas.image(imgPath + "nebula.png")
        .size(iw*0.8, iw*0.8).center(nebula_glow.cx(), nebula_glow.cy());
    nebula = canvas.group().add(nebula_glow).add(nebula_icon)
        .move(x2023 + 2 * iw, yMaintl - 2 * iw);

    war_machine_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var war_machine_icon = canvas.image(imgPath + "war_machine.png")
        .size(iw*0.8, iw*0.8).center(war_machine_glow.cx(), war_machine_glow.cy());
    war_machine = canvas.group().add(war_machine_glow).add(war_machine_icon)
        .move(x2023 + iw, yMaintl - 2 * iw);

    hawkeye_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var hawkeye_icon = canvas.image(imgPath + "hawkeye.png")
        .size(iw*0.8, iw*0.8).center(hawkeye_glow.cx(), hawkeye_glow.cy());
    hawkeye = canvas.group().add(hawkeye_glow).add(hawkeye_icon)
        .move(x2023 + iw, yMaintl + iw);

    black_widow_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var black_widow_icon = canvas.image(imgPath + "black_widow.png")
        .size(iw*0.8, iw*0.8).center(black_widow_glow.cx(), black_widow_glow.cy());
    black_widow = canvas.group().add(black_widow_glow).add(black_widow_icon)
        .move(x2023 + 2 * iw, yMaintl + iw);

    thanos_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var thanos_icon = canvas.image(imgPath + "thanos.png")
        .size(iw*0.8, iw*0.8).center(thanos_glow.cx(), thanos_glow.cy());
    thanos = canvas.group().add(thanos_glow).add(thanos_icon)
        .move(x2014 + 2 * dw + 2 * iw, y2014tl - iw)
        .opacity(0);

    gamora_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var gamora_icon = canvas.image(imgPath + "gamora.png")
        .size(iw*0.8, iw*0.8).center(gamora_glow.cx(), gamora_glow.cy());
    gamora = canvas.group().add(gamora_glow).add(gamora_icon)
        .move(x2014 + 2 * dw + 2 * iw, y2014tl)
        .opacity(0);

    nebula_evil_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var nebula_evil_icon = canvas.image(imgPath + "nebula_evil.png")
        .size(iw*0.8, iw*0.8).center(nebula_evil_glow.cx(), nebula_evil_glow.cy());
    nebula_evil = canvas.group().add(nebula_evil_glow).add(nebula_evil_icon)
        .move(x2014 + 2 * dw + 3 * iw, y2014tl - iw)
        .opacity(0);

    portal = canvas.circle(iw / 2)
        .opacity(0);

    loki_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var loki_icon = canvas.image(imgPath + "loki.png")
        .size(iw*0.8, iw*0.8).center(loki_glow.cx(), loki_glow.cy());
    loki = canvas.group().add(loki_glow).add(loki_icon)
        .move(x2012 + 2 * dw + 2 * iw, y2012tl - iw)
        .opacity(0);

    peggy_glow = canvas.circle(iw)
        .fill(unclickable_gradient);
    var peggy_icon = canvas.image(imgPath + "carter.png")
        .size(iw*0.8, iw*0.8).center(peggy_glow.cx(), peggy_glow.cy());
    peggy = canvas.group().add(peggy_glow).add(peggy_icon)
        .move(x1950, yMaintl-iw)
        .opacity(0);

    soulStone = canvas.image(imgPath + "soul_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x2014 + 2 * dw, y2014tl)
        .opacity(0);

    powerStone = canvas.image(imgPath + "power_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x2014 + 2 * dw + 2 * iw, y2014tl + iw / 2)
        .opacity(0);

    realityStone = canvas.image(imgPath + "reality_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x2013 + 2 * dw + iw, y2013tl)
        .opacity(0);

    spaceStone_loki = canvas.image(imgPath + "space_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x2012 + 2 * dw + 5 * iw / 2, y2012tl)
        .opacity(0);

    spaceStone_1970 = canvas.image(imgPath + "space_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x1970 + 2 * dw, y1970tl)
        .opacity(0);

    timeStone = canvas.image(imgPath + "time_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x2012 + 2 * dw + 2 * iw, y2012tl)
        .opacity(0);

    mindStone = canvas.image(imgPath + "mind_stone.png")
        .size(iw*0.4, iw*0.4)
        .move(x2012 + 2 * dw + 2 * iw, y2012tl + iw / 2)
        .opacity(0);

    mjolnir = canvas.image(imgPath + "mjolnir.png")
        .size(iw*0.4, iw*0.4)
        .move(x2013 + 2 * dw + iw, y2013tl - iw / 2)
        .opacity(0);


    // Redraw the paths of travel, if needed
    if (ironmanCapState >= 1) {
        jumpTo2012.stroke({color: '#00F', width: 2, linecap: 'round'});
        stub2012.stroke({color: '#555', width: 2, linecap: 'round'});
    }
    if (ironmanCapState >= 3) {
        jumpTo1970.stroke({color: '#3FF', width: 2, linecap: 'round'});
        stub1970.stroke({color: '#555', width: 2, linecap: 'round'});
    }
    if (ironmanCapState >= 4) {
        returnFrom1970.stroke({color: '#3FF', width: 2, linecap: 'round'});
    }
    if (hulkState >= 3) {
        returnFrom2012.stroke({color: '#00F', width: 2, linecap: 'round'});
    }
    if (thorState >= 1) {
        jumpTo2013.stroke({color: '#F00', width: 2, linecap: 'round'});
        stub2013.stroke({color: '#555', width: 2, linecap: 'round'});
    }
    if (thorState >= 2) {
        returnFrom2013.stroke({color: '#F00', width: 2, linecap: 'round'});
    }
    if (nebulaState >= 1) {
        jumpTo2014.stroke({color: '#F0F', width: 2, linecap: 'round'});
        stub2014.stroke({color: '#555', width: 2, linecap: 'round'});
    }
    if (nebulaState >= 2 || hawkeyeState >= 2) {
        returnFrom2014.stroke({color: '#F0F', width: 2, linecap: 'round'});
    }

    // Move the icons to the neccesary places
    switch (hulkState) {
        case 0:
            make_clickable(hulk, animate2023to2012, 500);
            make_clickable(antman, animate2023to2012, 500);
            break;
        case 1:
            // Draw icons in 2012
            hulk.move(x2012 + 2 * dw, y2012tl);
            antman.move(x2012 + 2 * dw + iw, y2012tl);
            mindStone.opacity(1);
            timeStone.opacity(1);

            make_unclickable(hulk);
            make_unclickable(antman);
            break;
        case 2:
            // Give stones to hulk and antman
            hulk.move(x2012 + 2 * dw, y2012tl);
            antman.move(x2012 + 2 * dw + iw, y2012tl);
            mindStone.move(antman.cx(), antman.cy());
            timeStone.move(hulk.cx(), hulk.cy());
            mindStone.opacity(1);
            timeStone.opacity(1);

            make_clickable(hulk, animate2012to2023, 0, [timeStone]);
            make_clickable(antman, animate2012to2023, 0, [mindStone]);
            break;
        case 3:
            // Draw icons with stones in 2023
            mindStone.move(antman.cx(), antman.cy());
            timeStone.move(hulk.cx(), hulk.cy());
            mindStone.opacity(1);
            timeStone.opacity(1);

            make_unclickable(hulk, [timeStone]);
            make_unclickable(antman, [mindStone]);

            timeStoneInPresent = true;
            mindStoneInPresent = true;
            break;
    }

    switch (thorState) {
        case 0:
            make_clickable(thor, animate2023to2013, 500);
            make_clickable(rocket, animate2023to2013, 500);
            break;
        case 1:
            // Draw icons in 2013 with reality stone and mjolnir and update click handlers
            thor.move(x2013 + 2 * dw, y2013tl - iw);
            rocket.move(x2013 + 2 * dw, y2013tl);
            mjolnir.opacity(1);
            realityStone.opacity(1);
            mjolnir.move(thor.cx(), thor.cy());
            realityStone.move(rocket.cx(), rocket.cy());
            make_clickable(rocket, animate2013to2023, 0, [realityStone]);
            make_clickable(thor, animate2013to2023, 0, [mjolnir]);
            break;
        case 2:
            // Give toys to thor and rocket and make them unclickable
            mjolnir.opacity(1);
            realityStone.opacity(1);
            mjolnir.move(thor.cx(), thor.cy());
            realityStone.move(rocket.cx(), rocket.cy());
            make_unclickable(rocket, [realityStone]);
            make_unclickable(thor, [mjolnir]);

            // Show prompt, assuming everyone else is gone
            info_2013.animate(250, '<>').opacity(1);
            make_clickable(info_2013, function() {set_caption_text(rsc_string.info_2013);});

            realityStoneInPresent = true;
            break;
    }

    switch (hawkeyeState) {
        case 0:
            make_clickable(hawkeye, animate2023to2014, 500);
            make_clickable(black_widow, animate2023to2014, 500);
            break;
        case 1:
            // Draw icons in 2014
            hawkeye.move(x2014 + 2 * dw, y2014tl);
            black_widow.move(x2014 + 2 * dw + iw, y2014tl);
            make_clickable(hawkeye, animate2014to2023_SoulStone);
            make_clickable(black_widow, animate2014to2023_SoulStone);
            break;
        case 2:
            // Hide blackwidow, reposition hawkeye, and give hawkeye soul stone
            black_widow.move(x2014 + 2 * dw + iw, height-iw/2);
            black_widow.scale(1,0.5);
            soulStone.opacity(1);
            hawkeye.move(x2023 + 2 * iw, yMaintl + iw);
            soulStone.move(hawkeye.cx(), hawkeye.cy());
            make_unclickable(hawkeye, [soulStone]);
            make_unclickable(black_widow);

            soulStoneInPresent = true;
            break;
    }

    switch (nebulaState) {
        case 0:
            make_clickable(war_machine, animate2023to2014, 500);
            make_clickable(nebula, animate2023to2014, 500);
            break;
        case 1:
            // Draw nebula and war machine in 2014 and give war machine power stone
            nebula.move(x2014 + 2 * dw + iw, y2014tl - iw);
            war_machine.move(x2014 + 2 * dw, y2014tl - iw);
            powerStone.move(war_machine.cx(), war_machine.cy());
            powerStone.opacity(1);
            make_clickable(war_machine, animate2014To2023_PowerStone, 0, [powerStone]);
            make_clickable(nebula, animate2014To2023_PowerStone, 0);
            break;
        case 2:
            // Draw only nebula in 2014, show Thanos and gang. Give war machine power stone
            nebula.move(x2014 + 2 * dw + iw, y2014tl - iw);
            powerStone.move(war_machine.cx(), war_machine.cy());
            powerStone.opacity(1);
            thanos.opacity(1);
            gamora.opacity(1);
            nebula_evil.opacity(1);
            make_unclickable(war_machine, [powerStone]);
            make_unclickable(nebula);
            make_clickable(nebula_evil, animate2014to2023_Nebula);

            powerStoneInPresent = true;
            break;
        case 3:
            // Draw nebula captured in 2014. Evil nebula in her place in 2023
            nebula.move(x2014 + 2 * dw + iw, y2014tl - iw);
            nebula_evil.move(x2023 + 2 * iw, yMaintl - 2 * iw);
            powerStone.move(war_machine.cx(), war_machine.cy());
            powerStone.opacity(1);
            thanos.opacity(1);
            gamora.opacity(1);
            nebula_evil.opacity(1);
            make_unclickable(war_machine, [powerStone]);
            make_unclickable(nebula);

            // Normally we would set evil nebula clickable if everyone is in present, but at this point in the redraw
            // funcion, spaceStoneInPresent is guaranteed to be false, so just make her unclickable
            nebulaInPresent = true;
            powerStoneInPresent = true;
            make_unclickable(nebula_evil);
            break;
    }

    // Move the icons for the ironman/cap plotline
    switch (ironmanCapState) {
        case 0:
            make_clickable(ironman, animate2023to2012, 500);
            make_clickable(cap_am, animate2023to2012, 500);
            break;
        case 1:
            // Move icons to 2012, and remove click handlers, show loki
            ironman.move(x2012 + 2 * dw, y2012tl - iw);
            cap_am.move(x2012 + 2 * dw + iw, y2012tl - iw);
            loki.opacity(1);
            spaceStone_loki.opacity(1);
            make_clickable(loki, lokiStealsStone, 0, [spaceStone_loki]);
            make_unclickable(ironman);
            make_unclickable(cap_am);
            break;
        case 2:
            // Assign click handlers
            ironman.move(x2012 + 2 * dw, y2012tl - iw);
            cap_am.move(x2012 + 2 * dw + iw, y2012tl - iw);
            make_clickable(ironman, animate2012to1970);
            make_clickable(cap_am, animate2012to1970);
            break;
        case 3:
            // Move icons to 1970, and assign click handlers
            ironman.move(x1970 + 2 * dw, y1970tl - iw);
            cap_am.move(x1970 + 2 * dw + iw, y1970tl - iw);
            spaceStone_1970.move(cap_am.cx(), cap_am.cy());
            spaceStone_1970.opacity(1);
            make_clickable(ironman, animate1970to2023, 0);
            make_clickable(cap_am, animate1970to2023, 0, [spaceStone_1970]);

            // Show prompt, assuming everyone else is gone
            if (hulkState >= 3) {
                info_2012.animate(250, '<>').opacity(1);
                make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);});
            }
            break;
        case 4:
            // Draw space stone with them in 2023
            spaceStone_1970.move(cap_am.cx(), cap_am.cy());
            spaceStone_1970.opacity(1);

            // Set click handlers for final battle if everyone's in the present
            spaceStoneInPresent = true;
            if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
                && soulStoneInPresent && nebulaInPresent) {
                make_clickable(nebula_evil, animate2014to2023_Thanos);
            }

            // Show prompts
            info_1970.animate(250, '<>').opacity(1);
            make_clickable(info_1970, function() {set_caption_text(rsc_string.info_1970);});
            if (hulkState >= 3) {
                info_2012.animate(250, '<>').opacity(1);
                make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);});
            }
            break;
    }


    if (nebulaState >= 4) {
        // Depends on thorState = 2, hawkeyeState = 2, nebulaState = 3, and ironmanCapState = 4
        // Draw Thanos and gang in 2023 with everyone else.
        thanos.move(x2023, yMaintl - 2 * iw);
        gamora.move(x2023 + iw, yMaintl + iw);
        nebula.move(x2023, yMaintl + iw);
        nebula_evil.move(x2023 + 2 * iw, yMaintl - 2 * iw);
        powerStone.move(war_machine.cx(), war_machine.cy());
        powerStone.opacity(1);
        thanos.opacity(1);
        gamora.opacity(1);
        nebula_evil.opacity(1);
        make_unclickable(nebula_evil);
        if (nebulaState == 4) make_clickable(ironman, finalBattle);

        // Show prompt
        info_2014.animate(250, '<>').opacity(1);
        make_clickable(info_2014, function() {set_caption_text(rsc_string.info_2014);});
    }

    switch (ironmanCapState) {
        case 5:
            // Depends on nebulaState = 4
            // Give ironman all the things, Thanos disappears
            var imx = ironman.x();
            var imy = ironman.y();
            powerStone.move(imx, imy);
            soulStone.move(imx+iw-soulStone.width(), imy);
            timeStone.move(imx-timeStone.width()/2, imy + iw/2 - timeStone.height()/2);
            spaceStone_1970.move(imx, imy+iw-spaceStone_1970.height());
            realityStone.move(imx+iw/2-realityStone.width()/2, imy - realityStone.height()/3);
            mindStone.move(imx+iw-mindStone.width()/2, imy + iw/2 - mindStone.height()/2);
            mjolnir.move(cap_am.cx(), cap_am.cy());
            powerStone.opacity(1);
            soulStone.opacity(1);
            timeStone.opacity(1);
            spaceStone_1970.opacity(1);
            realityStone.opacity(1);
            mindStone.opacity(1);
            mjolnir.opacity(1);
            thanos.opacity(0);
            make_unclickable(ironman, [powerStone, soulStone, timeStone, spaceStone_1970, realityStone, mindStone, mjolnir]);
            make_clickable(cap_am, capReturnsStones, 0, [mjolnir]);

            info_2012.animate(250, '<>').opacity(1);
            make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);});
            info_1970.animate(250, '<>').opacity(1);
            make_clickable(info_1970, function() {set_caption_text(rsc_string.info_1970);});
            break;
        case 6:
            // Put all the stones at each timeline and move cap to 1950 timeline, show Peggy
            cap_am.move(x1950, yMaintl);
            timeStone.move(x2012 + 3*dw, y2012tl-iw/2);
            soulStone.move(x2014 + 3*dw+iw/2, y2014tl-iw/2);
            powerStone.move(x2014 + 3*dw, y2014tl-iw/2);
            realityStone.move(x2013 + 3*dw, y2013tl-iw/2);
            mjolnir.move(x2013 + 3*dw+iw/2, y2013tl-iw/2);
            timeStone.move(x2012 + 3*dw, y2012tl-iw/2);
            mindStone.move(x2012 + 3*dw+iw/2, y2012tl-iw/2);
            spaceStone_1970.move(x1970 + 3*dw, y1970tl-iw/2);

            stub1970.stroke({color: '#555', width: 2, linecap: 'round'});
            stub2012.stroke({color: '#555', width: 2, linecap: 'round'});
            stub2013.stroke({color: '#555', width: 2, linecap: 'round'});
            stub2014.stroke({color: '#555', width: 2, linecap: 'round'});
            peggy.opacity(1);
            group2014Timeline.opacity(1);
            group2013Timeline.opacity(1);
            group2012Timeline.opacity(1);
            group1970Timeline.opacity(1);
            powerStone.opacity(1);
            soulStone.opacity(1);
            timeStone.opacity(1);
            spaceStone_1970.opacity(1);
            realityStone.opacity(1);
            mindStone.opacity(1);
            mjolnir.opacity(1);

            make_clickable(cap_am, capLivesOutLife);
            make_clickable(peggy, capLivesOutLife);

            info_2012.animate(250, '<>').opacity(1);
            make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);});
            info_1970.animate(250, '<>').opacity(1);
            make_clickable(info_1970, function() {set_caption_text(rsc_string.info_1970);});
            info_2014gotg.animate(250, '<>').opacity(1);
            make_clickable(info_2014gotg, function() {set_caption_text(rsc_string.info_2014gotg);});
            info_2013endgame.animate(250, '<>').opacity(1);
            make_clickable(info_2013endgame, function() {set_caption_text(rsc_string.info_2013endgame);});
            info_1970endgame.animate(250, '<>').opacity(1);
            make_clickable(info_1970endgame, function() {set_caption_text(rsc_string.info_1970endgame);});
            info_2013endgame.last().mouseenter(function() {group2013Fractals.animate(250,"<>").opacity(1);});
            info_2013endgame.last().mouseleave(function() {group2013Fractals.animate(250,"<>").opacity(0);});
            info_1970endgame.last().mouseenter(function() {group1970Fractals.animate(250,"<>").opacity(1);});
            info_1970endgame.last().mouseleave(function() {group1970Fractals.animate(250,"<>").opacity(0);});
            break;
        case 7:
            // Place all stones in correct spots, show all timelines and put cap at end of 1950 timeline
            cap_am.move(x2023 + 3*dw-iw, y1950tl);
            timeStone.move(x2012 + 3*dw, y2012tl-iw/2);
            soulStone.move(x2014 + 3*dw+iw/2, y2014tl-iw/2);
            powerStone.move(x2014 + 3*dw, y2014tl-iw/2);
            realityStone.move(x2013 + 3*dw, y2013tl-iw/2);
            mjolnir.move(x2013 + 3*dw+iw/2, y2013tl-iw/2);
            timeStone.move(x2012 + 3*dw, y2012tl-iw/2);
            mindStone.move(x2012 + 3*dw+iw/2, y2012tl-iw/2);
            spaceStone_1970.move(x1970 + 3*dw, y1970tl-iw/2);

            stub1950.stroke({color: '#555', width: 2, linecap: 'round'});
            stub1970.stroke({color: '#555', width: 2, linecap: 'round'});
            stub2012.stroke({color: '#555', width: 2, linecap: 'round'});
            stub2013.stroke({color: '#555', width: 2, linecap: 'round'});
            stub2014.stroke({color: '#555', width: 2, linecap: 'round'});
            tl1950.stroke({color: '#555', width: 2, linecap: 'round'});
            group1950Timeline.opacity(1);

            group2014Timeline.opacity(1);
            group2013Timeline.opacity(1);
            group2012Timeline.opacity(1);
            group1970Timeline.opacity(1);
            powerStone.opacity(1);
            soulStone.opacity(1);
            timeStone.opacity(1);
            spaceStone_1970.opacity(1);
            realityStone.opacity(1);
            mindStone.opacity(1);
            mjolnir.opacity(1);
            make_unclickable(cap_am);

            info_2012.animate(250, '<>').opacity(1);
            make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);});
            info_1970.animate(250, '<>').opacity(1);
            make_clickable(info_1970, function() {set_caption_text(rsc_string.info_1970);});
            info_2014gotg.animate(250, '<>').opacity(1);
            make_clickable(info_2014gotg, function() {set_caption_text(rsc_string.info_2014gotg);});
            info_2013endgame.animate(250, '<>').opacity(1);
            make_clickable(info_2013endgame, function() {set_caption_text(rsc_string.info_2013endgame);});
            info_1970endgame.animate(250, '<>').opacity(1);
            make_clickable(info_1970endgame, function() {set_caption_text(rsc_string.info_1970endgame);});
            info_1950.animate(250, '<>').opacity(1);
            make_clickable(info_1950, function() {set_caption_text(rsc_string.info_1950);});
            info_bench.animate(250, '<>').opacity(1);
            make_clickable(info_bench, function() {set_caption_text(rsc_string.info_bench);});
            info_2013endgame.last().mouseenter(function() {group2013Fractals.animate(250,"<>").opacity(1);});
            info_2013endgame.last().mouseleave(function() {group2013Fractals.animate(250,"<>").opacity(0);});
            info_1970endgame.last().mouseenter(function() {group1970Fractals.animate(250,"<>").opacity(1);});
            info_1970endgame.last().mouseleave(function() {group1970Fractals.animate(250,"<>").opacity(0);});
            info_bench.last().mouseenter(function() {group1950Fractals.animate(250,"<>").opacity(1);});
            info_bench.last().mouseleave(function() {group1950Fractals.animate(250,"<>").opacity(0);});
            break;
    }

    // Make all clickable icons pulsate
    setPulsating();
};

var setPulsating = function() {
    // Pulsate all clickable icons every 5 seconds
    pulsatingInterval = setInterval(function() {
        var i;
        for(i in clickables) {
            clickables[i].first().finish();
            clickables[i].first().animate(300, "").scale(1.2).loop(6,true);
        }
    }, 5000);
};

// Makes an icon group clickable, by assigning the new click handler, and adding a "Click Me" animation
var make_clickable = function(icon, func, delay=0, carryItems = []) {
    // Reset click handler
    setTimeout(function() {
        icon.click(null)
            .click(func);
        icon.last()
            .mouseenter(function(){this.animate(250,'<>').scale(1.2,1.2);})
            .mouseleave(function(){this.animate(250,'<>').scale(1,1);});

        for (var i in carryItems) {
            carryItems[i].click(null)
                .click(func)
                .mouseenter(null)
                .mouseleave(null)
                .mouseenter(function(){icon.last().animate(250,'<>').scale(1.2,1.2);})
                .mouseleave(function(){icon.last().animate(250,'<>').scale(1,1);});
        }
    }, delay);

    // Show the clickable gradient
    icon.first().fill(clickable_gradient).opacity(0);
    icon.first().animate(250, "", delay).opacity(1);

    // Stop any ongoing animations to the image
    //icon.last().finish();
    //icon.last().animate(300,"",3000).scale(1.25).loop(6, true);

    // Add this to the list of clickables (if not already in it)
    if (clickables.indexOf(icon) == -1) {
        clickables.push(icon);
    }
};

// Makes an icon group unclickable, by clearing the click handler, and removing the "Click Me" animation
var make_unclickable = function(icon, carryItems = []) {
    // Remove click handler
    icon.click(null);

    icon.last()
        .finish()
        .mouseenter(null)
        .mouseleave(null)
        .scale(1,1);

    for (var i in carryItems) {
        carryItems[i].click(null)
            .mouseenter(null)
            .mouseleave(null);
    }

    // Remove clickable gradient
    icon.first().fill(unclickable_gradient);

    // Stop any ongoing animations to the gradient
    icon.first().finish();

    // Remove this from the list of clickables
    if ((index = clickables.indexOf(icon)) > -1) {
        clickables.splice(index, 1);
    }
};

var set_caption_text = function(text) {
    $('#canvas-caption')[0].innerText = text;
}


// ----------------  Events ------------------------

var animate2023to2012 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Move icons into preparatory position
    ironman.finish();
    cap_am.finish();
    hulk.finish();
    antman.finish();
    // ironman.animate(200,'<').move(x2023,yMaintl-iw).after(function() { ironman.move(x2023,yMaintl-iw); });
    // cap_am.animate(200,'<').move(x2023+iw,yMaintl-iw).after(function() { cap_am.move(x2023+iw,yMaintl-iw); });
    // hulk.animate(200,'<').move(x2023,yMaintl).after(function() { hulk.move(2023,yMaintl); });
    // antman.animate(200,'<').move(x2023+iw,yMaintl).after(function() { antman.move(x2023+iw,yMaintl); });
    //
    // setTimeout(function() {
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
        jumpTo2012.drawAnimated({duration: 1000, easing: '<>'})
            .stroke({ color: '#00F', width: 2, linecap: 'round' });

        // Show 2012 stub
        stub2012.drawAnimated({
            duration: 400,
            easing: '<>',
            delay: 600
            })
            .stroke({ color: '#555', width: 2, linecap: 'round' });

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

        // Move ironman to 2012
        var length = ironmanPath.length();
        ironman.animate(1000, '<>').during(function(pos, morph, eased) {
            p = ironmanPath.pointAt(eased * length);
            ironman.center(p.x, p.y);
        }).after(function() {
            p = ironmanPath.pointAt(length);
            ironman.center(p.x, p.y);
        });
        // Move cap to 2012
        length = capPath.length();
        cap_am.animate(1000, '<>').during(function(pos, morph, eased) {
            p = capPath.pointAt(eased * length);
            cap_am.center(p.x, p.y);
        }).after(function() {
            p = capPath.pointAt(length);
            cap_am.center(p.x, p.y);
        });
        // Move hulk to 2012
        length = hulkPath.length();
        hulk.animate(1000, '<>').during(function(pos, morph, eased) {
            p = hulkPath.pointAt(eased * length);
            hulk.center(p.x, p.y);
        }).after(function() {
            p = hulkPath.pointAt(length);
            hulk.center(p.x, p.y);
        });
        // Move antman to 2012
        length = antmanPath.length();
        antman.animate(1000, '<>').during(function(pos, morph, eased) {
            p = antmanPath.pointAt(eased * length);
            antman.center(p.x, p.y)
        }).after(function() {
            p = antmanPath.pointAt(length);
            antman.center(p.x, p.y)
        });
    //}, 200);


    // Remove click handlers
    make_unclickable(ironman);
    make_unclickable(cap_am);
    make_unclickable(hulk);
    make_unclickable(antman);

    // Update click handlers for Loki and space stone
    make_clickable(loki, lokiStealsStone, 1200, [spaceStone_loki]);

    // Update states
    ironmanCapState++;
    hulkState++;

    // Update caption text
    set_caption_text(rsc_string.jumpTo2012);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var lokiStealsStone = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Define gradient for portal
    var portalGradient = canvas.gradient('radial', function(stop) {
        stop.at(0, '#08172a');
        stop.at(0.6, '#083459');
        stop.at(0.8, '#498fb3')
        stop.at(0.9, '#b4e2e2');
        stop.at(1, '#a0d1da')
    });

    var durationDelay = 200;
    var durationOpen = 300;
    var durationClose = 400;

    // Give loki the stone
    spaceStone_loki.animate(durationDelay, "<>").move(loki.cx(), loki.cy());

    // Animate the portal after a delay
    setTimeout(function() {
        // Group loki and space stone together
        var lokiAndStone = canvas.group()
            .add(loki)
            .add(spaceStone_loki);

        // Display the portal behind loki
        portal.center(lokiAndStone.cx(), lokiAndStone.cy()).opacity(1).fill(portalGradient);
        portal.animate(durationOpen,'<').scale(3,4);

        // Loki and stone sucked into portal as it closes
        lokiAndStone.animate(durationClose, '<', durationOpen)
            .scale(0,0);
        portal.animate(durationClose, '<')
            .scale(0,0.8);

        // Give mind stone to antman
        mindStone.animate(200, '<>', durationOpen+durationClose)
            .move(antman.cx(), antman.cy());

        // Give time stone to hulk
        timeStone.animate(200, '<>', durationOpen+durationClose)
            .move(hulk.cx(), hulk.cy());
    }, durationDelay);

    // Remove click handlers
    loki.click(null);
    spaceStone_loki.click(null);


    // Update click handlers for cap and ironman
    make_clickable(ironman, animate2012to1970, durationOpen+durationClose);
    make_clickable(cap_am, animate2012to1970, durationOpen+durationClose);

    // Update click handlers for hulk and antman
    make_clickable(hulk, animate2012to2023, durationOpen+durationClose, [timeStone]);
    make_clickable(antman, animate2012to2023, durationOpen+durationClose, [mindStone]);


    // Update states
    ironmanCapState++;
    hulkState++;

    // Update caption text
    set_caption_text(rsc_string.lokiFucksOff);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2023to2013 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Move icons into preparatory position
    thor.finish();
    rocket.finish();
    thor.animate(200,'<').move(x2023,yMaintl-iw).after(function() { thor.move(x2023,yMaintl-iw); });
    rocket.animate(200,'<').move(x2023,yMaintl).after(function() { rocket.move(x2023,yMaintl); });

    // Perform bulk of movement
    setTimeout(function() {
        // Finish the preparatory animations
        thor.finish();
        rocket.finish();

        // Trace paths for thor and rocket to go to 2013.
        var thorPath = jumpTo2013.clone()
            .dmove(thor.cx()-x2023,thor.cy()-yMaintl);
        var rocketPath = jumpTo2013.clone()
            .dmove(rocket.cx()-x2023,rocket.cy()-yMaintl);

        // Draw the path of travel
        jumpTo2013.drawAnimated({duration: 700, easing: '>'})
            .stroke({ color: '#F00', width: 2, linecap: 'round' });

        // Show reality stone.
        realityStone.animate({
            duration: 300,
            easing: '<>',
            delay: 700
        }).opacity(1);
        mjolnir.animate({
            duration: 300,
            easing: '<>',
            delay: 700
        }).opacity(1);

        // Show 2013 stub
        stub2013.drawAnimated({
            duration: 400,
            easing: '<>',
            delay: 300
            })
            .stroke({ color: '#555', width: 2, linecap: 'round' });

        // Move thor to 2013
        var length = thorPath.length();
        thor.animate(700, '>').during(function(pos, morph, eased){
            p = thorPath.pointAt(eased * length);
            thor.center(p.x, p.y);
        }).after(function() {
            p = thorPath.pointAt(length);
            thor.center(p.x, p.y);
        });
        // Move rocket to 2013
        var length = rocketPath.length();
        rocket.animate(700, '>').during(function(pos, morph, eased){
            p = rocketPath.pointAt(eased * length);
            rocket.center(p.x, p.y);
        }).after(function() {
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
    }, 200);

    // Update click handlers for rocket and thor
    make_clickable(rocket, animate2013to2023, 1200, [realityStone]);
    make_clickable(thor, animate2013to2023, 1200, [mjolnir]);

    // Update states
    thorState++;

    // Update caption text
    set_caption_text(rsc_string.jumpTo2013);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2023to2014 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Move icons into preparatory position
    war_machine.finish();
    nebula.finish();
    hawkeye.finish();
    black_widow.finish();
    war_machine.animate(200,'<').move(x2023,yMaintl-iw).after(function() {
        war_machine.move(x2023,yMaintl-iw);
    });
    nebula.animate(200,'<').move(x2023+iw,yMaintl-iw).after(function() {
        nebula.move(x2023+iw,yMaintl-iw);
    });
    hawkeye.animate(200,'<').move(x2023,yMaintl).after(function() {
        hawkeye.move(x2023,yMaintl);
    });
    black_widow.animate(200,'<').move(x2023+iw,yMaintl).after(function() {
        black_widow.move(x2023+iw,yMaintl);
    });

    // Perform bulk of movement
    setTimeout(function() {
        // Finish the preparatory animations
        war_machine.finish();
        hawkeye.finish();
        nebula.finish();
        black_widow.finish();

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
        jumpTo2014.drawAnimated({duration: 600, easing: '>'})
            .stroke({ color: '#F0F', width: 2, linecap: 'round' });

        // Show power stone.
        powerStone.animate({
            duration: 300,
            easing: '<>',
            delay: 600
        }).opacity(1);

        // Show 2014 stub
        stub2014.drawAnimated({
            duration: 400,
            easing: '<>',
            delay: 200
            })
            .stroke({ color: '#555', width: 2, linecap: 'round' });

        // Move war machine to 2014
        var length = warMachinePath.length();
        war_machine.animate(600, '>').during(function(pos, morph, eased){
            p = warMachinePath.pointAt(eased * length);
            war_machine.center(p.x, p.y);
        }).after(function() {
            p = warMachinePath.pointAt(length);
            war_machine.center(p.x, p.y);
        });
        // Move hawkeye to 2014
        length = hawkeyePath.length();
        hawkeye.animate(600, '>').during(function(pos, morph, eased){
            p = hawkeyePath.pointAt(eased * length);
            hawkeye.center(p.x, p.y);
        }).after(function() {
            p = hawkeyePath.pointAt(length);
            hawkeye.center(p.x, p.y);
        });
        // Move nebula to 2014
        length = nebulaPath.length();
        nebula.animate(600, '>').during(function(pos, morph, eased){
            p = nebulaPath.pointAt(eased * length);
            nebula.center(p.x, p.y);
        }).after(function() {
            p = nebulaPath.pointAt(length);
            nebula.center(p.x, p.y);
        });
        // Move black widow to 2014
        length = blackWidowPath.length();
        black_widow.animate(600, '>').during(function(pos, morph, eased){
            p = blackWidowPath.pointAt(eased * length);
            black_widow.center(p.x, p.y);
        }).after(function() {
            p = blackWidowPath.pointAt(length);
            black_widow.center(p.x, p.y);
        });

        // Give power stone to war machine
        var warMachine_coor = warMachinePath.pointAt(warMachinePath.length());
        powerStone.animate(500, '<>')
            .move(warMachine_coor.x, warMachine_coor.y);
    }, 200);

    // Update click handler for hawkeye and black widow
    make_clickable(hawkeye, animate2014to2023_SoulStone, 1000);
    make_clickable(black_widow, animate2014to2023_SoulStone, 1000);

    // Update click handler for war machine and nebula
    make_clickable(war_machine, animate2014To2023_PowerStone, 1000, [powerStone]);
    make_clickable(nebula, animate2014To2023_PowerStone, 1000);

    // Update states
    nebulaState++;
    hawkeyeState++;

    // Update caption text
    set_caption_text(rsc_string.jumpTo2014);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2012to1970 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for ironman and cap to jump to 1970
    var ironmanPath = jumpTo1970.clone()
        .dmove(ironman.cx()-x2012-width/20,ironman.cy()-y2012tl);
    var capPath = jumpTo1970.clone()
        .dmove(cap_am.cx()-x2012-width/20,cap_am.cy()-y2012tl);

    // Draw path of travel
    jumpTo1970.drawAnimated({ duration: 1000, easing: '<>'})
        .stroke({ color: '#3FF', width: 2, linecap: 'round' });

    // Draw stub of new timeline
    stub1970.drawAnimated({
        duration: 400,
        easing: '<>',
        delay: 600
        })
        .stroke({ color: '#555', width: 2, linecap: 'round' });

    // Make new space stone appear
    spaceStone_1970.animate({
        duration: 300,
        easing: '<>',
        delay: 900
    }).opacity(1);

    // Move ironman to 1970
    var length = ironmanPath.length();
    ironman.finish();
    ironman.animate(1000, '<>').during(function(pos, morph, eased) {
        p = ironmanPath.pointAt(eased * length);
        ironman.center(p.x, p.y);
    }).after(function() {
        p = ironmanPath.pointAt(length);
        ironman.center(p.x, p.y);
    });
    // Move cap to 1970
    length = capPath.length();
    cap_am.finish();
    cap_am.animate(1000, '<>').during(function(pos, morph, eased) {
        p = capPath.pointAt(eased * length);
        cap_am.center(p.x, p.y);
    }).after(function() {
        p = capPath.pointAt(length);
        cap_am.center(p.x, p.y);
    });

    // Give space stone to cap
    var cap_coor = capPath.pointAt(capPath.length());
    spaceStone_1970.animate(500, '<>')
        .move(cap_coor.x, cap_coor.y);

    // Update click handler for cap and ironman
    make_clickable(ironman, animate1970to2023, 1200);
    make_clickable(cap_am, animate1970to2023, 1200, [spaceStone_1970]);

    // Update states
    ironmanCapState++;

    // Update caption text
    set_caption_text(rsc_string.jumpTo1970);

    // Show prompt, assuming everyone else is gone
    if (hulkState >= 3) {
        info_2012.animate(250, '<>', 150).opacity(1);
        make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);}, 150);
    }

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2012to2023 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for Hulk and Antman return to present with time and mind stones
    var hulkPath = returnFrom2012.clone()
        .dmove(hulk.cx()-x2012-width/20,hulk.cy()-y2012tl);
    var antmanPath = returnFrom2012.clone()
        .dmove(antman.cx()-x2012-width/20,antman.cy()-y2012tl);

    // Draw the path of travel
    returnFrom2012.drawAnimated({duration:1000, easing: '<>'})
        .stroke({ color: '#00F', width: 2, linecap: 'round' });

    // Move hulk back to 2023 with time stone
    var length = hulkPath.length();
    hulk.finish();
    hulk.animate(1000, '<>').during(function(pos, morph, eased) {
        p = hulkPath.pointAt(eased * length);
        hulk.center(p.x, p.y);
        timeStone.move(p.x, p.y);
    }).after(function() {
        p = hulkPath.pointAt(length);
        hulk.center(p.x, p.y);
        timeStone.move(p.x, p.y);
    });
    // Move antman back to 2023 with mindstone
    length = antmanPath.length();
    antman.finish();
    antman.animate(1000, '<>').during(function(pos, morph, eased) {
        p = antmanPath.pointAt(eased * length);
        antman.center(p.x, p.y)
        mindStone.move(p.x, p.y);
    }).after(function() {
        p = antmanPath.pointAt(length);
        antman.center(p.x, p.y)
        mindStone.move(p.x, p.y);
    });

    // Remove click handlers.
    make_unclickable(hulk, [timeStone]);
    make_unclickable(antman, [mindStone]);

    // Mark boolean that this dependency is satisfied
    mindStoneInPresent = true;
    timeStoneInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Update states
    hulkState++;

    // Show prompt, assuming everyone else is gone
    if (ironmanCapState >= 3) {
        info_2012.animate(250, '<>', 150).opacity(1);
        make_clickable(info_2012, function() {set_caption_text(rsc_string.info_2012);}, 150);
    }

    // Update caption text
    set_caption_text(rsc_string.returnFrom2012);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2013to2023 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for Thor and Rocket return to present with reality stone and mjolnir
    var thorPath = returnFrom2013.clone()
        .dmove(thor.cx()-x2013-width/20,thor.cy()-y2013tl);
    var rocketPath = returnFrom2013.clone()
        .dmove(rocket.cx()-x2013-width/20,rocket.cy()-y2013tl);

    // Draw the path of travel
    returnFrom2013.drawAnimated({duration: 650, easing: '<'})
        .stroke({ color: '#F00', width: 2, linecap: 'round' });

    // Move thor to 2023 with mjolnir
    var length = thorPath.length();
    thor.finish();
    thor.animate(650, '<').during(function(pos, morph, eased) {
        p = thorPath.pointAt(eased * length);
        thor.center(p.x, p.y);
        mjolnir.move(p.x, p.y);
    }).after(function() {
        p = thorPath.pointAt(length);
        thor.center(p.x, p.y);
        mjolnir.move(p.x, p.y);
    });
    // Move rocket back to 2023 with reality stone
    length = rocketPath.length();
    rocket.finish();
    rocket.animate(650, '<').during(function(pos, morph, eased) {
        p = rocketPath.pointAt(eased * length);
        rocket.center(p.x, p.y);
        realityStone.move(p.x, p.y);
    }).after(function() {
        p = rocketPath.pointAt(length);
        rocket.center(p.x, p.y);
        realityStone.move(p.x, p.y);
    });

    // After arriving back in 2023, thor and rocket move into
    setTimeout(function() {
        thor.finish();
        rocket.finish();
        thor.animate(250,'>').move(x2023+2*iw, yMaintl-iw).after(function() { thor.move(x2023+2*iw, yMaintl-iw); });
        rocket.animate(250,'>').move(x2023+2*iw, yMaintl).after(function() { rocket.move(x2023+2*iw, yMaintl); });
        mjolnir.animate(250,'>').move(x2023+5*iw/2, yMaintl-iw/2).after(function() { mjolnir.move(x2023+5*iw/2, yMaintl-iw/2); });
        realityStone.animate(250,'>').move(x2023+5*iw/2, yMaintl+iw/2).after(function() { realityStone.move(x2023+5*iw/2, yMaintl+iw/2); });
    }, 650);

    // Remove click handlers
    make_unclickable(rocket, [realityStone]);
    make_unclickable(thor, [mjolnir]);

    // Mark boolean that this dependency is satisfied
    realityStoneInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 900);
    }

    // Update states
    thorState++;

    // Show prompt
    info_2013.animate(250, '<>', 150).opacity(1);
    make_clickable(info_2013, function() {set_caption_text(rsc_string.info_2013);}, 150);

    // Update caption text
    set_caption_text(rsc_string.returnFrom2013);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014to2023_SoulStone = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Black widow dissapears
	black_widow.animate(500,"<").move(black_widow.x(), height-black_widow.first().height()/2)
        .after(function() {
            black_widow.scale(1,0.5);
        });

	// Soul stone appears with hawkeye
	soulStone.move(hawkeye.cx(), hawkeye.cy());
	soulStone.animate(500,"<>",500)
        .opacity(1);

	// Trace path for hawkeye to return to present
    var hawkeyePath = returnFrom2014.clone()
        .opacity(0)
        .dmove(hawkeye.cx()-x2014-width/20,hawkeye.cy()-y2014tl);

    // Draw the path of travel, assuming war machine hasn't already travelled it
    if (!powerStoneInPresent) {
        returnFrom2014.drawAnimated({
            duration: 650,
            easing: '<',
            delay: 1000
            })
            .stroke({color: '#F0F', width: 2, linecap: 'round'});
    }

    // Hawkeye returns to 2023 with soul stone
    var length = hawkeyePath.length();
    hawkeye.finish();
    hawkeye.animate(650, '<',1000).during(function(pos, morph, eased) {
        p = hawkeyePath.pointAt(eased * length);
        hawkeye.center(p.x, p.y);
        soulStone.move(p.x, p.y);
    }).after(function() {
        p = hawkeyePath.pointAt(length);
        hawkeye.center(p.x, p.y);
        soulStone.move(p.x, p.y);
    });

    // After arrival in 2023, move to correct place
    setTimeout(function() {
        hawkeye.finish();
        hawkeye.animate(400,'>').move(x2023+2*iw, yMaintl+iw).after(function() { hawkeye.move(x2023+2*iw, yMaintl+iw); });
        soulStone.animate(400,'>').move(x2023+5*iw/2, yMaintl+3*iw/2).after(function() { soulStone.move(x2023+5*iw/2, yMaintl+3*iw/2); });
    }, 1650);
    
	// Remove click handler for hawkeye
    make_unclickable(hawkeye, [soulStone]);
    make_unclickable(black_widow);

    // Mark boolean that this dependency is satisfied
    soulStoneInPresent = true

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 3000);
    }

    // Update states
    hawkeyeState++;

    // Show prompt, assuming everyone else is gone
    if (nebulaState >= 4) {
        info_2014.animate(250, '<>', 150).opacity(1);
        make_clickable(info_2014, function() {set_caption_text(rsc_string.info_2014);}, 150);
    }

    // Update caption text
    set_caption_text(rsc_string.returnFrom2014_SoulStone);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014To2023_PowerStone = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace path for war machine to return to present
    var warMachinePath = returnFrom2014.clone()
        .opacity(0)
        .dmove(war_machine.cx()-x2014-width/20,war_machine.cy()-y2014tl);


    // Draw the path of travel, assuming hawkeye hasn't already travelled it
    if (!soulStoneInPresent) {
        returnFrom2014.drawAnimated({duration: 650, easing: '<'})
            .stroke({color: '#F0F', width: 2, linecap: 'round'});
    }

    // War machine returns to 2023 with power stone. Nebula stays behind
    var length = warMachinePath.length();
    war_machine.finish();
    war_machine.animate(600, '<').during(function(pos, morph, eased) {
        p = warMachinePath.pointAt(eased * length);
        war_machine.center(p.x, p.y);
        powerStone.move(p.x, p.y);
    }).after(function() {
        p = warMachinePath.pointAt(length);
        war_machine.center(p.x, p.y);
        powerStone.move(p.x, p.y);
    });

    // After arrival in 2023, move to correct place
    setTimeout(function() {
        war_machine.finish();
        war_machine.animate(250,'>').move(x2023+iw, yMaintl-2*iw).after(function() { war_machine.move(x2023+iw, yMaintl-2*iw); });
        powerStone.animate(250,'>').move(x2023+3*iw/2, yMaintl-3*iw/2).after(function() { powerStone.move(x2023+3*iw/2, yMaintl-3*iw/2); });
    }, 600);

    // Thanos, Gamora, and Evil Nebula show up
    thanos.animate(1000, '<>')
        .opacity(1);
    gamora.animate(1000, '<>')
        .opacity(1);
    nebula_evil.animate(1000, '<>')
        .opacity(1);

    // Remove click handlers
    make_unclickable(war_machine, [powerStone]);
    make_unclickable(nebula);

    // Create click handler for evil nebula
    make_clickable(nebula_evil, animate2014to2023_Nebula);

    // Add click handler for evil Nebula to go to the present.
    powerStoneInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Update states
    nebulaState++;

    // Update caption text
    set_caption_text(rsc_string.returnFrom2014_PowerStone);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014to2023_Nebula = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Move evil nebula in place for time travel
    nebula_evil.finish();
    nebula_evil.animate(300,'<').move(x2014+2*dw, y2014tl-iw).after(function() { nebula_evil.move(x2014+2*dw, y2014tl-iw); });

    // Evil nebula goes to 2023
    setTimeout(function() {
        nebula_evil.finish();

        // Trace path for evil nebula
        var nebulaPath = returnFrom2014.clone()
            .opacity(0)
            .dmove(nebula_evil.cx()-x2014-width/20,nebula_evil.cy()-y2014tl);

        var length = nebulaPath.length();
        nebula_evil.animate(600, '-').during(function(pos, morph, eased) {
            p = nebulaPath.pointAt(eased * length);
            nebula_evil.center(p.x, p.y);
        }).after(function() {
            p = nebulaPath.pointAt(length);
            nebula_evil.center(p.x, p.y);
        });
    }, 300);

    //After arrival in 2023, move to correct place
    setTimeout(function() {
        nebula_evil.finish();
        nebula_evil.animate(300,'>').move(x2023+2*iw, yMaintl-2*iw).after(function() { nebula_evil.move(x2023+2*iw, yMaintl-2*iw); });
    }, 900);

    // Mark evil nebula in present
    nebulaInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    } else {
        make_unclickable(nebula_evil);
    }

    // Update states
    nebulaState++;

    // Update caption text
    set_caption_text(rsc_string.returnFrom2014_Nebula);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate2014to2023_Thanos = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Move evil nebula in place for time travel
    thanos.finish();
    gamora.finish();
    nebula.finish();
    thanos.animate(300,'<').move(x2014+2*dw, y2014tl-iw).after(function() { thanos.move(x2014+2*dw, y2014tl-iw); });
    gamora.animate(300,'<').move(x2014+2*dw+iw, y2014tl).after(function() { gamora.move(x2014+2*dw+iw, y2014tl); });
    nebula.animate(300,'<').move(x2014+2*dw, y2014tl).after(function() { nebula.move(x2014+2*dw, y2014tl); });

    setTimeout(function(){
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

        // Good nebula returns to 2023
        var length = nebulaPath.length();
        nebula.finish();
        nebula.animate(600, '-').during(function(pos, morph, eased) {
            p = nebulaPath.pointAt(eased * length);
            nebula.center(p.x, p.y);
        }).after(function() {
            p = nebulaPath.pointAt(length);
            nebula.center(p.x, p.y);
        });
        // Gamora returns to 2023
        length = gamoraPath.length();
        gamora.finish();
        gamora.animate(600, '-').during(function(pos, morph, eased) {
            p = gamoraPath.pointAt(eased * length);
            gamora.center(p.x, p.y);
        }).after(function() {
            p = gamoraPath.pointAt(length);
            gamora.center(p.x, p.y);
        });
        // Thanos returns to 2023
        length = thanosPath.length();
        thanos.finish();
        thanos.animate(600, '-').during(function(pos, morph, eased) {
            p = thanosPath.pointAt(eased * length);
            thanos.center(p.x, p.y);
        }).after(function() {
            p = thanosPath.pointAt(length);
            thanos.center(p.x, p.y);
        });
    }, 300);

    //After arrival in 2023, move to correct place
    setTimeout(function() {
        thanos.finish();
        gamora.finish();
        nebula.finish();
        thanos.animate(300,'>').move(x2023, yMaintl-2*iw).after(function() { thanos.move(x2023, yMaintl-2*iw); });
        gamora.animate(300,'>').move(x2023+iw, yMaintl+iw).after(function() { gamora.move(x2023+iw, yMaintl+iw); });
        nebula.animate(300,'>').move(x2023, yMaintl+iw).after(function() { nebula.move(x2023, yMaintl+iw); });
    }, 900);

    // Remove click handler
    make_unclickable(nebula_evil);

    // Make Tony clickable
    make_clickable(ironman, finalBattle,1000);

    // Update states
    nebulaState++;

    // Show prompt
    info_2014.animate(250, '<>', 150).opacity(1);
    make_clickable(info_2014, function() {set_caption_text(rsc_string.info_2014);}, 150);

    // Update caption text
    set_caption_text(rsc_string.thanosToPresent);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var animate1970to2023 = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Trace paths for Hulk and Antman return to present with time and mind stones
    var ironmanPath = returnFrom1970.clone()
        .dmove(ironman.cx()-x1970-width/20,ironman.cy()-y1970tl);
    var capPath = returnFrom1970.clone()
        .dmove(cap_am.cx()-x1970-width/20,cap_am.cy()-y1970tl);

    // Draw the path of travel
    returnFrom1970.drawAnimated({duration: 1250, easing: '<>'})
        .stroke({ color: '#3FF', width: 2, linecap: 'round' });

    // Ironman returns to present
    var length = ironmanPath.length();
    ironman.finish();
    ironman.animate(1250, '<>').during(function(pos, morph, eased) {
        p = ironmanPath.pointAt(eased * length);
        ironman.center(p.x, p.y);
    }).after(function() {
        p = ironmanPath.pointAt(length);
        ironman.center(p.x, p.y);
    });
    // Cap returns to present with space stone
    length = capPath.length();
    cap_am.finish();
    cap_am.animate(1250, '<>').during(function(pos, morph, eased) {
        p = capPath.pointAt(eased * length);
        cap_am.center(p.x, p.y);
        spaceStone_1970.move(p.x, p.y);
    }).after(function() {
        p = capPath.pointAt(length);
        cap_am.center(p.x, p.y);
        spaceStone_1970.move(p.x, p.y);
    });

    // Remove click handlers
    make_unclickable(ironman);
    make_unclickable(cap_am, [spaceStone_1970]);

    // Mark boolean that this dependency is satisfied
    spaceStoneInPresent = true;

    // Set click handlers for final battle if everyone's in the present
    if (spaceStoneInPresent && mindStoneInPresent && timeStoneInPresent && realityStoneInPresent && powerStoneInPresent
        && soulStoneInPresent && nebulaInPresent) {
        make_clickable(nebula_evil, animate2014to2023_Thanos, 1000);
    }

    // Update states
    ironmanCapState++;

    // Show prompt
    info_1970.animate(250, '<>', 150).opacity(1);
    make_clickable(info_1970, function() {set_caption_text(rsc_string.info_1970);}, 150);

    // Update caption text
    set_caption_text(rsc_string.returnFrom1970);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var finalBattle = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Thanos gets dusted, Ironman and evil gamora die. Add event handler for cap to return infinity
    // stones.

    // TODO: Optional - Give infinity stones to hulk and he brings everyone back with portals and shit

    // Give stones to ironman
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

    // Give mjolnir to cap
    mjolnir.animate(500, "<>").move(cap_am.cx(), cap_am.cy());

    thanos.animate(500,"<",600).opacity(0);

    // Remove click handler from ironman
    make_unclickable(ironman, [powerStone, soulStone, timeStone, spaceStone_1970, realityStone, mindStone, mjolnir]);

    // Assign click handler to cap
    make_clickable(cap_am, capReturnsStones, 1200, [mjolnir]);

    // Update states
    ironmanCapState++;
    nebulaState++;

    // Update caption text
    set_caption_text(rsc_string.starkStones);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var capReturnsStones = function() {
    // Temporarily redraw the pulsating icons
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
    group2014Timeline.animate(500,"",1750).opacity(1);
    soulStone.animate(450,"<>").move(x2014 + 3*dw+iw/2, y2014tl-iw/2);
    powerStone.animate(450,"<>").move(x2014 + 3*dw, y2014tl-iw/2);
    info_2014gotg.animate(250, '<>', 1900).opacity(1);
    make_clickable(info_2014gotg, function() {set_caption_text(rsc_string.info_2014gotg);}, 1900);

    // Move cap to 2013 timeline. Leave power and soul stones behind
    cap_am.animate(1000, "<>", 250).move(x2013 + width/20, y2013tl);
    timeStone.animate(1000, "<>", 250).move(x2013 + width/20-timeStone.width()/2, y2013tl + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(1000, "<>", 250).move(x2013 + width/20, y2013tl+ih-spaceStone_1970.height());
    realityStone.animate(1000, "<>", 250).move(x2013+iw/2-realityStone.width()/2 + width/20, y2013tl - realityStone.height()/3);
    mindStone.animate(1000, "<>", 250).move(x2013 + width/20+iw-mindStone.width()/2, y2013tl + ih/2 - mindStone.height()/2);
    mjolnir.animate(1000, "<>", 250).move(x2013 + width/20 + iw/2, y2013tl + ih/2);
    group2013Timeline.animate(500,"",3000).opacity(1);
    realityStone.animate(450,"<>").move(x2013 + 3*dw, y2013tl-iw/2);
    mjolnir.animate(450,"<>").move(x2013 + 3*dw+iw/2, y2013tl-iw/2);
    info_2013endgame.animate(250, '<>', 3150).opacity(1);
    make_clickable(info_2013endgame, function() {set_caption_text(rsc_string.info_2013endgame);}, 3150);
    setTimeout(function() {
            info_2013endgame.last().mouseenter(function() {group2013Fractals.animate(250,"<>").opacity(1);});
            info_2013endgame.last().mouseleave(function() {group2013Fractals.animate(250,"<>").opacity(0);});
        }, 5650);

    // Move cap to 2012 timeline. Leave reality stone behind
    cap_am.animate(1000, "<>", 250).move(x2012 + width/20, y2012tl);
    timeStone.animate(1000, "<>", 250).move(x2012 + width/20-timeStone.width()/2, y2012tl + ih/2 - timeStone.height()/2);
    spaceStone_1970.animate(1000, "<>", 250).move(x2012 + width/20, y2012tl+ih-spaceStone_1970.height());
    mindStone.animate(1000, "<>", 250).move(x2012 + width/20+iw-mindStone.width()/2, y2012tl + ih/2 - mindStone.height()/2);
    group2012Timeline.animate(500,"",4250).opacity(1);
    timeStone.animate(450,"<>").move(x2012 + 3*dw, y2012tl-iw/2);
    mindStone.animate(450,"<>").move(x2012 + 3*dw+iw/2, y2012tl-iw/2);
    // info_2012loki.animate(250, '<>', 4400).opacity(1);
    // make_clickable(info_2013endgame, function() {set_caption_text(rsc_string.info_2012loki);}, 4400);

    // Move cap to 1970 timeline. Leave mind and time stones behind
    cap_am.animate(1000, "<>", 250).move(x1970 + width/20, y1970tl);
    spaceStone_1970.animate(1000, "<>", 250).move(x1970 + width/20, y1970tl+ih-spaceStone_1970.height());
    group1970Timeline.animate(500,"",5500).opacity(1);
    spaceStone_1970.animate(450,"<>").move(x1970 + 3*dw, y1970tl-iw/2);
    info_1970endgame.animate(250, '<>', 5650).opacity(1);
    make_clickable(info_1970endgame, function() {set_caption_text(rsc_string.info_1970endgame);}, 5650);
    setTimeout(function() {
            info_1970endgame.last().mouseenter(function() {group1970Fractals.animate(250,"<>").opacity(1);});
        info_1970endgame.last().mouseleave(function() {group1970Fractals.animate(250,"<>").opacity(0);});
        }, 5650);

    // Move cap to 1950, show Peggy
    cap_am.animate(1000, "<>", 250).move(x1950, yMaintl);
    peggy.animate(500, "<>", 6500).opacity(1);

    make_unclickable(cap_am, [powerStone, soulStone, timeStone, spaceStone_1970, realityStone, mindStone, mjolnir]);
    make_clickable(cap_am, capLivesOutLife, 6750);
    make_clickable(peggy, capLivesOutLife, 6750);
    // Cap moves to 1970. Leaves space stone and restof 1970 timeline populates. Cap travels along
    // this timeline and we see a prompt where he's sitting on the bench

    // Update states
    ironmanCapState++;

    // Update caption text
    set_caption_text(rsc_string.capStones);

    // Pulsate all clickable icons periodically
    setPulsating();
};

var capLivesOutLife = function() {
    // Temporarily redraw the pulsating icons
    clearInterval(pulsatingInterval);

    // Stroke 1950 timeline
    stub1950.drawAnimated({duration: 700, easing: '<'})
        .stroke({color: '#555', width: 2, linecap: 'round'});
    tl1950.drawAnimated({
        duration: 3000,
        easing: '>',
        delay: 700
        })
        .stroke({color: '#555', width: 2, linecap: 'round'});

    info_1950.animate(250, '<>', 150).opacity(1);
    make_clickable(info_1950, function() {set_caption_text(rsc_string.info_1950);}, 150);

    group1950Timeline.animate(250, '=', 3000).opacity(1);

    // Cap and peggy travel along 1950 timeline
    var length = stub1950.length();
    cap_am.animate(750, '<').during(function(pos, morph, eased){
        p = stub1950.pointAt(eased * length);
        cap_am.move(p.x, p.y);
    }).after(function() {
        p = stub1950.pointAt(length);
        cap_am.move(p.x, p.y);
    });
    peggy.animate(750, '<').during(function(pos, morph, eased){
        p = stub1950.pointAt(eased * length);
        peggy.move(p.x, p.y-iw);
    }).after(function() {
        p = stub1950.pointAt(length);
        peggy.move(p.x, p.y-iw);
    });
    cap_am.animate(1200, '-').move(x[26]);
    peggy.animate(1200, '-').move(x[26]);

    // Peggy dies in 2016, but cap goes on to future
    cap_am.animate(750, '>').move(x2023 + 2*dw-iw);
    peggy.animate(500, '<>').opacity(0);

    make_unclickable(cap_am);
    make_unclickable(peggy);
    // Update states
    ironmanCapState++;

    info_bench.animate(250, '<>', 3200).opacity(1);
    make_clickable(info_bench, function() {set_caption_text(rsc_string.info_bench);}, 3200);
    info_bench.last().mouseenter(function() {group1950Fractals.animate(250,"<>").opacity(1);});
    info_bench.last().mouseleave(function() {group1950Fractals.animate(250,"<>").opacity(0);});

    // Update caption text
    set_caption_text(rsc_string.capLivesOutLife);

    // Pulsate all clickable icons periodically
    setPulsating();
};


$(document).ready(function() {
    $('#reset').on('click', function() {
        ironmanCapState = 0;
        hulkState = 0;
        thorState = 0;
        hawkeyeState = 0;
        nebulaState = 0;
        redraw();
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
            $("#fullscreen")[0].src = imgPath + "fullscreen.png";
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
            $("#fullscreen")[0].src = imgPath + "exitfullscreen.png";
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

    $('#show-caption').on('click', function() {
        //document.getElementById('canvas-caption').focus();
        if (document.getElementById('canvas-caption').classList.contains('visible')) {
            document.getElementById('show-caption').src = imgPath + "up-chevron.png";
            document.getElementById('canvas-caption').classList.remove('visible')
        } else {
            document.getElementById('show-caption').src = imgPath + "down-chevron.png";
            document.getElementById('canvas-caption').classList.add('visible');
        }
    });

    window.addEventListener('resize', function() {
        redraw();
    })

    $('#endgame-container')[0].addEventListener("fullscreenchange", function () {
        redraw();
    });
    $('#endgame-container')[0].addEventListener("mozfullscreenchange", function () {
        redraw();
    });
    $('#endgame-container')[0].addEventListener("webkitfullscreenchange", function () {
        redraw();
    });
    $('#endgame-container')[0].addEventListener("msfullscreenchange", function () {
        redraw();
    });

    $("#reset").hover(
        function(){$(this).animate({width: "32px", height:"32px"}, 300);},
        function(){$(this).animate({width: "26px", height:"26px"}, 300);}
    );
    $("#fullscreen").hover(
        function(){$(this).animate({width: "32px", height:"32px"}, 300);},
        function(){$(this).animate({width: "26px", height:"26px"}, 300);}
    );

    redraw();
});
