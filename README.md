<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vitrina de Proyectos</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root{
            --bg:#050816;
            --bg-2:#0d1430;
            --text:#f4f7ff;
            --muted:#b7c0e0;
            --primary:#00d4ff;
            --secondary:#7c5cff;
            --accent:#57ff9a;
            --border:rgba(255,255,255,.12);
        }

        *{ box-sizing:border-box; }

        body{
            margin:0;
            min-height:100vh;
            font-family:'Space Grotesk',sans-serif;
            color:var(--text);
            background:
                radial-gradient(circle at top left, rgba(0,212,255,.18), transparent 24%),
                radial-gradient(circle at top right, rgba(124,92,255,.20), transparent 28%),
                radial-gradient(circle at center bottom, rgba(87,255,154,.10), transparent 26%),
                linear-gradient(135deg, var(--bg), var(--bg-2));
            overflow-x:hidden;
            position:relative;
        }

        .intro-overlay{
            position:fixed;
            inset:0;
            z-index:10000;
            background:#000;
            display:flex;
            align-items:center;
            justify-content:center;
            animation: fadeOutOverlay 0.8s 1.8s forwards;
        }

        .intro-content{
            text-align:center;
        }

        .intro-glitch{
            font-size:clamp(2rem, 5vw, 4rem);
            font-weight:700;
            color:var(--primary);
            text-shadow:0 0 10px var(--primary), 0 0 20px var(--primary);
            animation: glitchIntro 0.3s 0.2s, glitchIntro2 0.2s 0.5s, glitchFade 0.5s 1.5s forwards;
            opacity:0;
            animation-fill-mode:forwards;
        }

        .intro-line{
            width:0;
            height:2px;
            background:var(--primary);
            margin:15px auto;
            box-shadow:0 0 10px var(--primary);
            animation: expandLine 0.6s 0.4s forwards, glitchFade 0.5s 1.5s forwards;
        }

        .intro-subtitle{
            color:var(--muted);
            font-size:1.1rem;
            opacity:0;
            animation: fadeInText 0.5s 0.7s forwards, glitchFade 0.5s 1.5s forwards;
        }

        .intro-particle{
            position:absolute;
            width:3px;
            height:3px;
            background:var(--primary);
            border-radius:50%;
            box-shadow:0 0 8px var(--primary);
            animation: particleIntro 2s ease-out forwards;
        }

        .hero{
            position:relative;
            text-align:center;
            margin-bottom:44px;
            padding:50px 18px 30px;
            overflow:hidden;
            isolation:isolate;
            animation: fadeUp 1s ease both;
            animation-delay:2.5s;
            min-height: 250px;
        }

        .hero-bg{
            position:absolute;
            inset:0;
            z-index:-2;
            overflow:hidden;
        }

        .data-streams{
            position:absolute;
            inset:0;
            overflow:hidden;
            opacity:0.6;
        }

        .data-stream{
            position:absolute;
            width:1px;
            height:100%;
            background:linear-gradient(180deg, transparent, var(--primary), transparent);
            animation: dataStreamMove 3s linear infinite;
        }

        .data-stream:nth-child(1){ left:10%; animation-delay:0s; }
        .data-stream:nth-child(2){ left:25%; animation-delay:0.5s; }
        .data-stream:nth-child(3){ left:40%; animation-delay:1s; }
        .data-stream:nth-child(4){ left:55%; animation-delay:1.5s; }
        .data-stream:nth-child(5){ left:70%; animation-delay:2s; }
        .data-stream:nth-child(6){ left:85%; animation-delay:2.5s; }

        .matrix-rain{
            position:absolute;
            inset:0;
            overflow:hidden;
            opacity:0.3;
        }

        .matrix-column{
            position:absolute;
            top:-20%;
            width:2px;
            background:linear-gradient(180deg, transparent, var(--accent), transparent);
            animation: matrixFall 2s linear infinite;
        }

        .matrix-column:nth-child(odd){
            background:linear-gradient(180deg, transparent, var(--primary), transparent);
        }

        .circuit-lines{
            position:absolute;
            inset:0;
            opacity:0.4;
        }

        .circuit-line{
            position:absolute;
            height:1px;
            background:linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent);
            animation: circuitGlow 4s ease-in-out infinite;
        }

        .circuit-line:nth-child(1){ top:20%; left:0; width:100%; animation-delay:0s; }
        .circuit-line:nth-child(2){ top:40%; left:0; width:100%; animation-delay:1s; }
        .circuit-line:nth-child(3){ top:60%; left:0; width:100%; animation-delay:2s; }
        .circuit-line:nth-child(4){ top:80%; left:0; width:100%; animation-delay:3s; }

        .data-dots{
            position:absolute;
            inset:0;
        }

        .data-dot{
            position:absolute;
            width:3px;
            height:3px;
            background:var(--primary);
            border-radius:50%;
            box-shadow:0 0 8px var(--primary);
            animation: dotPulse 3s ease-in-out infinite;
        }

        .data-dot:nth-child(1){ top:15%; left:20%; animation-delay:0s; }
        .data-dot:nth-child(2){ top:35%; left:65%; animation-delay:0.8s; }
        .data-dot:nth-child(3){ top:55%; left:35%; animation-delay:1.6s; }
        .data-dot:nth-child(4){ top:75%; left:75%; animation-delay:2.4s; }
        .data-dot:nth-child(5){ top:25%; left:80%; animation-delay:3.2s; }
        .data-dot:nth-child(6){ top:65%; left:15%; animation-delay:4s; }

        .hologram-effect{
            position:absolute;
            inset:0;
            background:radial-gradient(circle at 50% 50%, rgba(0,212,255,0.1), transparent 60%);
            animation: hologramPulse 3s ease-in-out infinite;
        }

        .scan-line{
            position:absolute;
            left:0;
            width:100%;
            height:2px;
            background:linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent);
            animation: scanMove 4s linear infinite;
        }

        .ai-scene{
            position:absolute;
            bottom: 10px;
            left: 15px;
            width: 120px;
            height: 110px;
            z-index: -1;
        }

        .ai-robot{
            position:absolute;
            bottom:15px;
            left:0;
            z-index:3;
        }

        .robot-head-container{
            position:relative;
            width:35px;
            height:30px;
            margin:0 auto 4px;
        }

        .robot-head{
            width:100%;
            height:100%;
            background:linear-gradient(180deg, #8ad3f0, #3a8bb8);
            border-radius:8px;
            border:1px solid rgba(0,212,255,.6);
            box-shadow:0 0 10px rgba(0,212,255,.3);
            position:relative;
            animation: headGlow 3s infinite alternate;
        }

        .robot-eyes-container{
            position:absolute;
            top:10px;
            left:0;
            right:0;
            display:flex;
            justify-content:space-around;
            padding:0 7px;
        }

        .robot-eye{
            width:5px;
            height:5px;
            background:#fff;
            border-radius:50%;
            box-shadow:0 0 6px #fff, 0 0 10px var(--primary);
            animation: eyeBlink 3s infinite, eyeGlow 2s infinite alternate;
        }

        .robot-antenna{
            position:absolute;
            top:-10px;
            left:50%;
            transform:translateX(-50%);
            width:2px;
            height:10px;
            background:linear-gradient(180deg, var(--secondary), #5a4ccc);
            border-radius:2px;
        }

        .robot-antenna-tip{
            position:absolute;
            top:-14px;
            left:50%;
            transform:translateX(-50%);
            width:7px;
            height:7px;
            background:var(--accent);
            border-radius:50%;
            box-shadow:0 0 9px var(--accent);
            animation: tipPulse 1.2s infinite;
        }

        .robot-body{
            width:40px;
            height:35px;
            background:linear-gradient(180deg, #dbefff, #7dc5e8);
            border-radius:9px;
            margin:0 auto;
            border:1px solid rgba(0,212,255,.5);
            position:relative;
            box-shadow:0 0 9px rgba(0,212,255,.2);
            animation: bodyGlow 4s infinite alternate;
        }

        .control-panel{
            position:absolute;
            top:6px;
            left:6px;
            right:6px;
            height:17px;
            background:rgba(0,15,30,.4);
            border-radius:5px;
            overflow:hidden;
        }

        .panel-display{
            position:absolute;
            top:3px;
            left:3px;
            right:3px;
            bottom:3px;
            background:rgba(0,212,255,.15);
            border-radius:3px;
            overflow:hidden;
        }

        .data-line{
            height:2px;
            background:var(--primary);
            margin-bottom:2px;
            border-radius:1px;
            animation: dataFlow 2.5s infinite;
        }

        .data-line:nth-child(2){
            width:70%;
            animation-delay:.5s;
        }

        .data-line:nth-child(3){
            width:50%;
            animation-delay:1s;
        }

        .data-line:nth-child(4){
            width:85%;
            animation-delay:1.5s;
        }

        .programmer-laptop{
            position:absolute;
            bottom:16px;
            left:50%;
            transform:translateX(-50%);
            width:70px;
            height:42px;
            z-index:2;
        }

        .laptop-screen{
            position:absolute;
            top:0;
            left:50%;
            transform:translateX(-50%);
            width:58px;
            height:33px;
            background:linear-gradient(180deg, #081522, #000c15);
            border:1px solid rgba(0,212,255,.4);
            border-radius:4px 4px 0 0;
            overflow:hidden;
            box-shadow:0 0 10px rgba(0,212,255,.2);
        }

        .code-display{
            position:absolute;
            top:3px;
            left:3px;
            right:3px;
            bottom:3px;
            background:rgba(0,10,20,.8);
            border-radius:2px;
            overflow:hidden;
        }

        .binary-code{
            font-family:monospace;
            font-size:6px;
            color:var(--primary);
            line-height:1.3;
            animation: codeScroll 5s linear infinite;
        }

        .laptop-base{
            position:absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
            width:70px;
            height:9px;
            background:linear-gradient(180deg, #4a9bc6, #256a90);
            border-radius:0 0 5px 5px;
            border:1px solid rgba(0,212,255,.4);
            box-shadow:0 0 8px rgba(0,212,255,.15);
        }

        .keyboard-keys{
            position:absolute;
            top:2px;
            left:3px;
            right:3px;
            height:5px;
            background:rgba(0,0,0,.3);
            border-radius:2px;
        }

        .coding-effect{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:linear-gradient(90deg, transparent, rgba(0,212,255,.15), transparent);
            animation: codingSweep 3s infinite;
        }

        /* Nueva animación: Desarrollo Web */
        .web-dev-scene{
            position:absolute;
            top: 15px;
            right: 20px;
            width: 100px;
            height: 85px;
            z-index: -1;
        }

        .web-browser{
            position:absolute;
            top:0;
            left:50%;
            transform:translateX(-50%);
            width:70px;
            height:50px;
            background:linear-gradient(180deg, #121a2a, #0a0f1a);
            border:1px solid rgba(124,92,255,.5);
            border-radius:6px;
            overflow:hidden;
            box-shadow:0 0 12px rgba(124,92,255,.3);
            animation: browserGlow 3s infinite alternate;
        }

        .browser-header{
            position:absolute;
            top:0;
            left:0;
            right:0;
            height:10px;
            background:linear-gradient(90deg, #1a1a3a, #2a2a5a);
            border-bottom:1px solid rgba(124,92,255,.3);
            display:flex;
            align-items:center;
            padding:0 4px;
        }

        .browser-dot{
            width:4px;
            height:4px;
            background:var(--secondary);
            border-radius:50%;
            margin-right:2px;
            opacity:.7;
        }

        .browser-dot:nth-child(2){ background:var(--accent); opacity:.7; }
        .browser-dot:nth-child(3){ background:var(--primary); opacity:.7; }

        .web-content{
            position:absolute;
            top:12px;
            left:3px;
            right:3px;
            bottom:3px;
        }

        .web-line{
            height:2px;
            background:var(--secondary);
            margin-bottom:3px;
            border-radius:1px;
            opacity:.6;
            animation: webLineAnimate 2.5s infinite;
        }

        .web-line:nth-child(2){
            width:75%;
            animation-delay:0.5s;
            background:var(--primary);
        }

        .web-line:nth-child(3){
            width:50%;
            animation-delay:1s;
            background:var(--accent);
        }

        .web-line:nth-child(4){
            width:85%;
            animation-delay:1.5s;
            background:var(--secondary);
        }

        .web-line:nth-child(5){
            width:60%;
            animation-delay:2s;
            background:var(--primary);
        }

        .web-cursor{
            position:absolute;
            width:8px;
            height:8px;
            border:1px solid var(--accent);
            border-radius:2px;
            animation: cursorBlink 1s infinite;
        }

        .web-server{
            position:absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
            width:55px;
            height:25px;
            background:linear-gradient(180deg, #1a1a3a, #0a0a2a);
            border:1px solid rgba(124,92,255,.4);
            border-radius:5px;
            box-shadow:0 0 10px rgba(124,92,255,.2);
        }

        .server-lights{
            position:absolute;
            top:4px;
            left:6px;
            right:6px;
            display:flex;
            justify-content:space-between;
        }

        .server-light{
            width:3px;
            height:3px;
            border-radius:50%;
            animation: serverPulse 1.5s infinite;
        }

        .server-light:nth-child(1){ background:var(--accent); animation-delay:0s; }
        .server-light:nth-child(2){ background:var(--primary); animation-delay:0.5s; }
        .server-light:nth-child(3){ background:var(--secondary); animation-delay:1s; }

        .deploy-arrow{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            width:0;
            height:0;
            border-left:6px solid transparent;
            border-right:6px solid transparent;
            border-top:8px solid var(--accent);
            animation: deployPulse 1.8s infinite;
        }

        .hero-badge,.tag{
            display:inline-block;
            padding:7px 14px;
            border-radius:999px;
            border:1px solid rgba(255,255,255,.15);
            background:rgba(255,255,255,.06);
            backdrop-filter:blur(10px);
            letter-spacing:1px;
            font-size:12px;
        }

        .hero-badge{
            color:var(--primary);
            box-shadow:0 0 20px rgba(0,212,255,.18);
            animation: badgePulse 2.8s ease-in-out infinite;
        }

        .title{
            font-size:clamp(2.6rem, 6vw, 5.2rem);
            margin:18px 0 12px;
            line-height:1.05;
            background:linear-gradient(90deg, #ffffff, var(--primary), var(--secondary), #ffffff);
            background-size:300% 100%;
            -webkit-background-clip:text;
            background-clip:text;
            color:transparent;
            text-shadow:0 0 30px rgba(0,212,255,.15);
            animation: glowText 3.2s ease-in-out infinite, textShift 4.5s linear infinite;
            position:relative;
            z-index:1;
        }

        .subtitle{
            max-width:720px;
            margin:0 auto 18px;
            color:var(--muted);
            line-height:1.7;
            font-size:1.08rem;
            position:relative;
            z-index:1;
        }

        .status-indicator{
            color:var(--accent);
            font-size:.95rem;
            letter-spacing:.5px;
            animation: fadeUp 1.4s ease both;
            position:relative;
            z-index:1;
        }

        .container{
            width:min(1150px,92%);
            margin:0 auto;
            padding:72px 0 60px;
            position:relative;
            z-index:1;
        }

        .top-name{
            position:fixed;
            top:18px;
            left:18px;
            z-index:9999;
            padding:10px 16px;
            border-radius:999px;
            border:1px solid rgba(0,212,255,.35);
            background:linear-gradient(135deg, rgba(0,212,255,.16), rgba(124,92,255,.16));
            backdrop-filter:blur(14px);
            color:#fff;
            font-size:14px;
            box-shadow:0 0 18px rgba(0,212,255,.22), inset 0 0 18px rgba(255,255,255,.08);
            animation: floatBadge 4s ease-in-out infinite, pulseRay 2.2s ease-in-out infinite;
            overflow:hidden;
        }

        .top-name::before,
        .top-name::after{
            content:"";
            position:absolute;
            inset:-2px;
            border-radius:999px;
            pointer-events:none;
        }

        .top-name::before{
            background:radial-gradient(circle, rgba(0,212,255,.35) 0%, transparent 60%);
            filter:blur(10px);
            opacity:.7;
            animation: glowMove 2.8s linear infinite;
        }

        .top-name::after{
            background:linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
            transform:translateX(-120%);
            animation: shine 2.4s ease-in-out infinite;
            mix-blend-mode:screen;
        }

        .section-title{
            margin:34px 0 18px;
            font-size:1.3rem;
            color:#fff;
            position:relative;
            padding-left:14px;
        }

        .section-title::before{
            content:"";
            position:absolute;
            left:0;
            top:50%;
            transform:translateY(-50%);
            width:4px;
            height:22px;
            border-radius:99px;
            background:linear-gradient(180deg, var(--primary), var(--secondary));
        }

        .grid{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));
            gap:22px;
            margin-top:16px;
        }

        .card{
            position:relative;
            padding:28px;
            border-radius:22px;
            background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
            border:1px solid var(--border);
            box-shadow:0 10px 30px rgba(0,0,0,.25);
            backdrop-filter:blur(18px);
            transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease;
            overflow:hidden;
            animation: cardIn .8s ease both;
        }

        .card:nth-child(2){ animation-delay:.12s; }
        .card:nth-child(3){ animation-delay:.24s; }
        .card:nth-child(4){ animation-delay:.36s; }

        .card::before{
            content:"";
            position:absolute;
            inset:0;
            background:linear-gradient(135deg, rgba(0,212,255,.14), rgba(124,92,255,.14), transparent 72%);
            opacity:0;
            transition:opacity .3s ease;
        }

        .card::after{
            content:"";
            position:absolute;
            inset:-40% -60%;
            background:radial-gradient(circle, rgba(0,212,255,.10), transparent 45%);
            animation: driftGlow 7s ease-in-out infinite;
        }

        .card:hover{
            transform:translateY(-10px) scale(1.03);
            border-color:rgba(0,212,255,.55);
            box-shadow:0 18px 44px rgba(0,0,0,.42);
        }

        .card:hover::before{ opacity:1; }

        .card-content{ position:relative; z-index:1; }

        .card-content h3{ margin:16px 0 10px; font-size:1.35rem; }
        .card-content p{ margin:0 0 18px; color:var(--muted); line-height:1.6; min-height:72px; }

        .project-meta{
            display:flex;
            gap:8px;
            flex-wrap:wrap;
            margin-bottom:18px;
        }

        .btn-group{
            display:flex;
            gap:10px;
            flex-wrap:wrap;
        }

        .btn-glow,
        .btn-secondary{
            display:inline-block;
            text-decoration:none;
            padding:12px 18px;
            border-radius:12px;
            font-weight:700;
            transition:transform .2s ease, background .2s ease, box-shadow .2s ease;
        }

        .btn-glow{
            color:#06111c;
            background:linear-gradient(90deg, var(--primary), #8df5ff);
            box-shadow:0 0 18px rgba(0,212,255,.22);
            animation: pulseBtn 2.2s ease-in-out infinite;
        }

        .btn-secondary{
            border:1px solid rgba(255,255,255,.18);
            color:var(--text);
            background:rgba(255,255,255,.05);
        }

        .btn-glow:hover,.btn-secondary:hover{ transform:translateY(-2px); }
        .btn-glow:hover{ box-shadow:0 0 24px rgba(0,212,255,.32); }
        .btn-secondary:hover{ background:rgba(255,255,255,.1); }

        @keyframes fadeOutOverlay{
            0%{ opacity:1; }
            100%{ opacity:0; visibility:hidden; }
        }

        @keyframes glitchIntro{
            0%{ opacity:0; transform:translateX(0); }
            10%{ opacity:1; }
            20%{ opacity:0.8; }
            30%{ opacity:1; transform:translateX(-1px); }
            40%{ opacity:0.5; transform:translateX(1px); }
            50%{ opacity:1; transform:translateX(-1px); }
            60%{ opacity:0.8; }
            70%{ opacity:1; transform:translateX(0); }
            80%{ opacity:0.5; }
            90%{ opacity:1; }
            100%{ opacity:1; }
        }

        @keyframes glitchIntro2{
            0%{ transform:skewX(0); }
            10%{ transform:skewX(0.5deg); }
            20%{ transform:skewX(-0.3deg); }
            30%{ transform:skewX(0); }
            40%{ transform:skewX(0.2deg); }
            50%{ transform:skewX(0); }
            100%{ transform:skewX(0); }
        }

        @keyframes glitchFade{
            0%{ opacity:1; }
            100%{ opacity:0; }
        }

        @keyframes expandLine{
            0%{ width:0; }
            100%{ width:200px; }
        }

        @keyframes fadeInText{
            0%{ opacity:0; transform:translateY(5px); }
            100%{ opacity:1; transform:translateY(0); }
        }

        @keyframes particleIntro{
            0%{ opacity:1; transform:translate(0, 0) scale(1); }
            100%{ opacity:0; transform:translate(var(--px), var(--py)) scale(0); }
        }

        @keyframes dataStreamMove{
            0%{ transform:translateY(-100%); opacity:0; }
            50%{ opacity:1; }
            100%{ transform:translateY(100%); opacity:0; }
        }

        @keyframes matrixFall{
            0%{ transform:translateY(-100%); opacity:0; }
            10%{ opacity:1; }
            90%{ opacity:1; }
            100%{ transform:translateY(100vh); opacity:0; }
        }

        @keyframes circuitGlow{
            0%,100%{ opacity:0.2; }
            50%{ opacity:0.8; }
        }

        @keyframes dotPulse{
            0%,100%{ transform:scale(1); opacity:0.5; }
            50%{ transform:scale(1.8); opacity:1; }
        }

        @keyframes hologramPulse{
            0%,100%{ opacity:0.5; transform:scale(1); }
            50%{ opacity:0.8; transform:scale(1.05); }
        }

        @keyframes scanMove{
            0%{ top:-2px; }
            100%{ top:100%; }
        }

        @keyframes headGlow{
            0%{ box-shadow:0 0 10px rgba(0,212,255,.3); }
            100%{ box-shadow:0 0 15px rgba(0,212,255,.5), 0 0 20px rgba(124,92,255,.3); }
        }

        @keyframes bodyGlow{
            0%{ box-shadow:0 0 9px rgba(0,212,255,.2); }
            100%{ box-shadow:0 0 15px rgba(0,212,255,.4), 0 0 18px rgba(124,92,255,.2); }
        }

        @keyframes eyeBlink{
            0%,92%,100%{ opacity:1; }
            96%{ opacity:0.2; }
        }

        @keyframes eyeGlow{
            0%{ box-shadow:0 0 6px #fff, 0 0 10px var(--primary); }
            100%{ box-shadow:0 0 8px #fff, 0 0 12px var(--primary), 0 0 18px rgba(0,212,255,.6); }
        }

        @keyframes tipPulse{
            0%{ transform:translateX(-50%) scale(1); box-shadow:0 0 9px var(--accent); }
            50%{ transform:translateX(-50%) scale(1.3); box-shadow:0 0 12px var(--accent); }
            100%{ transform:translateX(-50%) scale(1); box-shadow:0 0 9px var(--accent); }
        }

        @keyframes dataFlow{
            0%{ width:0; opacity:0; }
            10%{ opacity:1; }
            90%{ opacity:1; }
            100%{ width:100%; opacity:0; }
        }

        @keyframes codeScroll{
            0%{ transform:translateY(0); }
            100%{ transform:translateY(-50%); }
        }

        @keyframes codingSweep{
            0%{ transform:translateX(-100%); }
            100%{ transform:translateX(100%); }
        }

        @keyframes browserGlow{
            0%{ box-shadow:0 0 12px rgba(124,92,255,.3); }
            100%{ box-shadow:0 0 18px rgba(124,92,255,.5), 0 0 25px rgba(0,212,255,.3); }
        }

        @keyframes webLineAnimate{
            0%{ width:0; opacity:0; }
            10%{ opacity:0.6; }
            90%{ opacity:0.6; }
            100%{ width:100%; opacity:0; }
        }

        @keyframes cursorBlink{
            0%,100%{ opacity:1; }
            50%{ opacity:0; }
        }

        @keyframes serverPulse{
            0%,100%{ opacity:0.5; transform:scale(1); }
            50%{ opacity:1; transform:scale(1.5); }
        }

        @keyframes deployPulse{
            0%,100%{ transform:translateY(0); opacity:0.5; }
            50%{ transform:translateY(-4px); opacity:1; }
        }

        @keyframes fadeUp{
            from{ opacity:0; transform:translateY(18px); }
            to{ opacity:1; transform:translateY(0); }
        }

        @keyframes cardIn{
            from{ opacity:0; transform:translateY(25px) scale(.98); }
            to{ opacity:1; transform:translateY(0) scale(1); }
        }

        @keyframes pulseBtn{
            0%,100%{ box-shadow:0 0 18px rgba(0,212,255,.22); }
            50%{ box-shadow:0 0 28px rgba(0,212,255,.38); }
        }

        @keyframes badgePulse{
            0%,100%{ transform:translateY(0) scale(1); }
            50%{ transform:translateY(-2px) scale(1.03); }
        }

        @keyframes glowText{
            0%,100%{ filter:drop-shadow(0 0 0 rgba(0,212,255,0)); transform:scale(1); }
            50%{ filter:drop-shadow(0 0 18px rgba(0,212,255,.3)); transform:scale(1.015); }
        }

        @keyframes textShift{
            0%{ background-position:0% 50%; }
            100%{ background-position:100% 50%; }
        }

        @keyframes floatBadge{
            0%,100%{ transform:translateY(0); }
            50%{ transform:translateY(-4px); }
        }

        @keyframes pulseRay{
            0%,100%{ box-shadow:0 0 18px rgba(0,212,255,.22), inset 0 0 18px rgba(255,255,255,.08); }
            50%{ box-shadow:0 0 30px rgba(124,92,255,.38), inset 0 0 24px rgba(255,255,255,.12); }
        }

        @keyframes glowMove{
            0%{ transform:translateX(-28%); }
            50%{ transform:translateX(28%); }
            100%{ transform:translateX(-28%); }
        }

        @keyframes shine{
            0%{ transform:translateX(-120%); opacity:0; }
            35%{ opacity:1; }
            100%{ transform:translateX(120%); opacity:0; }
        }

        @media (max-width: 600px){
            .container{ padding:34px 0; }
            .card{ padding:22px; }
            .top-name{ top:12px; left:12px; font-size:13px; }
            .hero{ padding:32px 12px 20px; }
            .ai-scene{ display:none; }
            .web-dev-scene{ display:none; }
        }
    </style>
</head>
<body>
    <div class="top-name">Fabian Gonzalez</div>

    <div class="intro-overlay" aria-hidden="true">
        <div class="intro-content">
            <div class="intro-glitch">INITIALIZING_SYSTEM</div>
            <div class="intro-line"></div>
            <div class="intro-subtitle">PORTAFOLIO WEB 11.0</div>
        </div>
        <div class="intro-particle" style="top:50%; left:30%; --px:-60px; --py:-80px;"></div>
        <div class="intro-particle" style="top:45%; left:60%; --px:70px; --py:-90px;"></div>
        <div class="intro-particle" style="top:55%; left:40%; --px:-80px; --py:70px;"></div>
        <div class="intro-particle" style="top:48%; left:55%; --px:90px; --py:60px;"></div>
        <div class="intro-particle" style="top:42%; left:45%; --px:-50px; --py:-50px;"></div>
        <div class="intro-particle" style="top:58%; left:50%; --px:60px; --py:-40px;"></div>
    </div>

    <main class="container">
        <header class="hero">
            <div class="hero-bg" aria-hidden="true">
                <div class="data-streams">
                    <div class="data-stream"></div>
                    <div class="data-stream"></div>
                    <div class="data-stream"></div>
                    <div class="data-stream"></div>
                    <div class="data-stream"></div>
                    <div class="data-stream"></div>
                </div>
                <div class="matrix-rain">
                    <div class="matrix-column" style="left:5%; height:30%;"></div>
                    <div class="matrix-column" style="left:15%; height:25%; animation-duration:2.5s;"></div>
                    <div class="matrix-column" style="left:30%; height:35%; animation-duration:3s;"></div>
                    <div class="matrix-column" style="left:45%; height:20%; animation-duration:2.8s;"></div>
                    <div class="matrix-column" style="left:60%; height:28%; animation-duration:3.2s;"></div>
                    <div class="matrix-column" style="left:75%; height:32%; animation-duration:2.6s;"></div>
                    <div class="matrix-column" style="left:90%; height:22%; animation-duration:3.5s;"></div>
                </div>
                <div class="circuit-lines">
                    <div class="circuit-line"></div>
                    <div class="circuit-line"></div>
                    <div class="circuit-line"></div>
                    <div class="circuit-line"></div>
                </div>
                <div class="data-dots">
                    <div class="data-dot"></div>
                    <div class="data-dot"></div>
                    <div class="data-dot"></div>
                    <div class="data-dot"></div>
                    <div class="data-dot"></div>
                    <div class="data-dot"></div>
                </div>
                <div class="hologram-effect"></div>
                <div class="scan-line"></div>
                
                <!-- Robot y laptop -->
                <div class="ai-scene">
                    <div class="ai-robot">
                        <div class="robot-head-container">
                            <div class="robot-antenna">
                                <div class="robot-antenna-tip"></div>
                            </div>
                            <div class="robot-head">
                                <div class="robot-eyes-container">
                                    <div class="robot-eye"></div>
                                    <div class="robot-eye"></div>
                                </div>
                            </div>
                        </div>
                        <div class="robot-body">
                            <div class="control-panel">
                                <div class="panel-display">
                                    <div class="data-line"></div>
                                    <div class="data-line"></div>
                                    <div class="data-line"></div>
                                    <div class="data-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="programmer-laptop">
                        <div class="laptop-screen">
                            <div class="code-display">
                                <div class="binary-code">
                                    01010111 01100101 01101100<br>
                                    01101111 01101101 01100101<br>
                                    01110100 01101111 00100000<br>
                                    01001001 01001110 01000110<br>
                                    01001111 01010100 01000101<br>
                                    01000011 01001000 00100000
                                </div>
                            </div>
                            <div class="coding-effect"></div>
                        </div>
                        <div class="laptop-base">
                            <div class="keyboard-keys"></div>
                        </div>
                    </div>
                </div>

                <!-- Desarrollo Web -->
                <div class="web-dev-scene">
                    <div class="web-browser">
                        <div class="browser-header">
                            <div class="browser-dot"></div>
                            <div class="browser-dot"></div>
                            <div class="browser-dot"></div>
                        </div>
                        <div class="web-content">
                            <div class="web-line"></div>
                            <div class="web-line"></div>
                            <div class="web-line"></div>
                            <div class="web-line"></div>
                            <div class="web-line"></div>
                            <div class="web-cursor"></div>
                        </div>
                    </div>
                    <div class="web-server">
                        <div class="server-lights">
                            <div class="server-light"></div>
                            <div class="server-light"></div>
                            <div class="server-light"></div>
                        </div>
                        <div class="deploy-arrow"></div>
                    </div>
                </div>
            </div>

            <div class="hero-badge">PORTAFOLIO WEB</div>
            <h1 class="title">VITRINA DE PROYECTOS</h1>
            <p class="subtitle">Explora una selección de proyectos desarrollados con creatividad, innovación y enfoque profesional.</p>
            <div class="status-indicator">● SISTEMA ONLINE</div>
        </header>

        <section>
            <h2 class="section-title">PÁGINAS WEB</h2>
            <div class="grid">
                <article class="card">
                    <div class="card-content">
                        <span class="tag">WEB</span>
                        <h3>INFOTECH</h3>
                        <p>Página web profesional para ofrecer servicios de desarrollo web, software a medida y automatización de procesos empresariales.</p>
                        <div class="project-meta">
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                            <span class="tag">JAVASCRIPT</span>
                        </div>
                        <div class="btn-group">
                            <a class="btn-glow" href="https://infotech.infotechsoftware02.workers.dev" target="_blank" rel="noopener noreferrer">VER PROYECTO</a>
                            <a class="btn-secondary" href="https://github.com/Infotechtecnologi/index.html.git" target="_blank" rel="noopener noreferrer">CÓDIGO</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section>
            <h2 class="section-title">SOFTWARES DESARROLLADOS</h2>
            <div class="grid">
                <article class="card">
                    <div class="card-content">
                        <span class="tag">SOFTWARE</span>
                        <h3>SISTEMA DE GESTIÓN</h3>
                        <p>Aplicación de escritorio o web para administrar procesos internos, usuarios y datos empresariales.</p>
                        <div class="project-meta">
                            <span class="tag">FULL STACK</span>
                            <span class="tag">BASE DE DATOS</span>
                        </div>
                        <div class="btn-group">
                            <a class="btn-glow" href="#" target="_blank" rel="noopener noreferrer">VER SOFTWARE</a>
                            <a class="btn-secondary" href="#" target="_blank" rel="noopener noreferrer">CÓDIGO</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section>
            <h2 class="section-title">SISTEMAS AUTOMATIZADOS</h2>
            <div class="grid">
                <article class="card">
                    <div class="card-content">
                        <span class="tag">AUTOMATIZACIÓN</span>
                        <h3>CONTROL DE PROCESOS</h3>
                        <p>Sistema automatizado para optimizar tareas repetitivas, reducir tiempos y mejorar la productividad.</p>
                        <div class="project-meta">
                            <span class="tag">IA</span>
                            <span class="tag">WORKFLOWS</span>
                        </div>
                        <div class="btn-group">
                            <a class="btn-glow" href="#" target="_blank" rel="noopener noreferrer">VER SISTEMA</a>
                            <a class="btn-secondary" href="#" target="_blank" rel="noopener noreferrer">CÓDIGO</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </main>

    <script>
        setTimeout(() => {
            const overlay = document.querySelector('.intro-overlay');
            if (overlay) {
                overlay.style.display = 'none';
            }
        }, 2600);
    </script>
</body>
</html>
