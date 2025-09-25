+++
title = "Pico-Synth"
description= "Uma plataforma open-source para o desenvolvimento de processamento digital de sinal aplicado à música. O objetivo final é que funcione como um sintetizador/controlador MIDI portátil e de baixo custo." 

date = "2025-05-05" 
Destacado=false 
lang="en"

photo = "v0.1_Render_Front-min.png" 

status = "current"


teamPhotos = ["MiguelLameiras.jpg", "LopesBismuth.jpeg" , "JoaoGonçalves.jpg"] 
  
+++

# Pico-Synth

## Introduction

The Pico-Synth is an open-source platform for the development and learning of digital signal processing applied to music. The ultimate goal is for it to function as a portable, low-cost MIDI synthesizer/controller.

{{< github-card "HackerSchool/pico-synth" >}}

## Devlog

### 05/05/2025

The Pico-Synth Board v0.1 is the first version of the synthesizer. For audio output, it uses an I2S DAC (PCM5102), with a maximum resolution of 24 bits and a sample rate of up to 192 kHz. The synthesizer is controlled through a 4x4 button matrix with individual LEDs, four rotary encoders with push buttons, and an OLED display. This first iteration also includes an SD card slot, which can be used to store filter parameters, samples, and other data. Each rotary encoder has an RC filter to perform signal debouncing.

Due to the 300 mA limit of the Raspberry Pi Pico’s 3.3V voltage regulator, an additional voltage regulator (AMS1117-3.3) was added to power the LEDs and GPIO expanders (PCF8574). The OLED display is powered directly from the USB 5V line.

![Synth PCB Render Front](/images/projetos/v0.1_Render_Front-min.png)

<br><br>

![Synth PCB Render Back](/images/projetos/V0.1_Render_Back-min.png)
