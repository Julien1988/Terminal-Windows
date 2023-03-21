<template lang="html">
    <div class="timer__container">
        <h1 id="timer-string">{{ $data.timeFormat }}</h1>
        <button class="button" @click="setTime">{{ $data.running ? "stop" : "start" }}</button>
        <button class="button" id="resume-button" @click="resumeTime" :class="isPaused() ? '' : 'hidden'">resume</button>
    </div>
</template>
<style>
.timer__container {
    background-color: #313244;
    border-radius: 12px;
    color: #cdd6f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 50px;
}

.hidden {
    display: none;
}

.button {
    background-color: #89b4fa;
    color: #1e1e2e;
    font-size: 3em;
    text-transform: uppercase;
    border: none;
    border-radius: 12px;
    padding: 10px;
    transition: all 0.3s;
}

.button:hover {
    background-color: #1e1e2e;
    color: #89b4fa;
    cursor: pointer;
}

.button:active {
    transform: scale(0.9);
}

#resume-button {
    background-color: #f38ba8;
}

#resume-button:hover {
    color: #f38ba8;
    background-color: #1e1e2e;
}

#timer-string {
    font-size: 4em;
}
</style>
<script lang="ts">

import { setInterval, clearInterval } from 'timers';

const TIME_DEFAULT = 25 * 60;

export default {
    data() {
        return {
            time: TIME_DEFAULT,
            timeFormat: "00:00",
            running: false,
            interval: setInterval(() => { })
        }
    },

    methods: {
        formatTime() {
            const minutes = Math.floor(this.time / 60);
            const seconds = this.time - minutes * 60;
            this.timeFormat = `${minutes >= 10 ? minutes : "0" + minutes}:${seconds >= 10 ? seconds : "0" + seconds}`;
        },
        setTime() {
            if (this.running) {
                clearInterval(this.interval);
                this.running = false;
            } else {
                if (this.isPaused())
                    this.resetTime()
                this.startTime();
            }
        },
        resumeTime() {
            this.startTime();
        },
        startTime() {
            this.running = true;
            this.interval = setInterval(() => {
                if (this.time <= 0) {
                    return this.setTime()
                }
                this.time--;
                this.formatTime()
            }, 1000);
        },
        resetTime() {
            this.time = TIME_DEFAULT;
            this.formatTime()
        },
        isPaused() {
            return this.time != TIME_DEFAULT && !this.running
        }
    },
    mounted() {
        this.formatTime();
    }
}

</script>