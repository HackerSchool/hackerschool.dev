+++
title = "Pico-Synth"
description= "Uma plataforma open-source para o desenvolvimento de processamento digital de sinal aplicado à música. O objetivo final é que funcione como um sintetizador/controlador MIDI portátil e de baixo custo." 

date = "2025-05-05" 
Destacado=false 
lang="pt"

photo = "v0.1_Render_Front-min.png" 

status = "current"


teamPhotos = ["MiguelLameiras.jpg", "LopesBismuth.jpeg" , "JoaoGonçalves.jpg"] 
+++

# Pico-Synth

## Introdução

O Pico-Synth é uma plataforma _open-source_ para o desenvolvimento/aprendizagem de processamento digital de sinal aplicado à música. O objetivo final é que funcione como um sintetizador/controlador MIDI portátil e de baixo custo.

{{< github-card "HackerSchool/pico-synth" >}}

## Devlog

### 05/05/2025

A Pico-Synth Board v0.1 é a primeira versão do sintetizador. Para a saída de áudio, utiliza um DAC I2S (PCM5102), com resolução máxima de 24 bits e _sample-rate_ de até 192 kHz. O controlo do sintetizador é feito através de uma matriz de botões 4x4 com LEDs individuais, quatro encoders rotativos com botões e e um ecrã OLED. Esta primeira iteração conta ainda com um slot para cartão SD, que pode ser usado para armazenar parâmetros de filtros, samples e outros dados. Cada encoder rotativo possui um filtro RC para realizar _debouncing_ do sinal.

Devido ao limite de 300mA do regulador de tensão 3.3V do Raspberry Pi Pico, foi adicionado um regulador de tensão extra (AMS1117-3.3) para alimentação dos LEDs e dos expansores de GPIO (PCF8574). O Ecrã OLED é alimentado diretamento pelos 5V do USB.

![Synth PCB Render Front](/images/projetos/v0.1_Render_Front-min.png)

<br><br>

![Synth PCB Render Back](/images/projetos/V0.1_Render_Back-min.png)
