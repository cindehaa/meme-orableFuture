<template>
    <div class="legend">
        <div class="bar">
            <div class="tick" style="left: 25%;">25%</div>
            <div class="tick" style="left: 50%;">50%</div>
            <div class="tick" style="left: 75%;">75%</div>
            <div class="tick" style="right: 0%;">0%</div>
            <div class="percentage-fill"></div>
        </div>
    </div>
</template>

<style>
.legend {
    width: 200px;
    /* Adjust the width as needed */
    height: 30px;
    /* Adjust the height as needed */
    background-color: #fff;
    /* Background color of the legend container */
    border: 1px solid #ccc;
    position: relative;
}

.bar {
    width: 100%;
    height: 100%;
    background-color: #000;
    /* Color of the filled percentage */
    position: relative;
}

.tick {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    /* Adjust the font size as needed */
    color: #000;
    /* Tick label color */
}

.tick::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 10px;
    /* Adjust the tick height as needed */
    background-color: #fff;
    /* Tick color */
    top: 50%;
    transform: translateY(-50%);
}

.tick:nth-child(1) {
    left: 25%;
}

.tick:nth-child(2) {
    left: 50%;
    transform: translateX(-50%);
}

.tick:nth-child(3) {
    left: 75%;
}

.tick:nth-child(4) {
    right: 0;
    transform: translateX(0);
}

.percentage-fill {
    width: 0%;
    height: 100%;
    background-color: #000;
    /* Color of the filled percentage */
}</style>