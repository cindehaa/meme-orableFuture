<template>
    <div class="legend">
        <div class="bar"></div>
    </div>
</template>

<style>
.legend {
    width: 100%;
    height: 30px;

    /* change to background colour TBD*/
    background-color: #fff;

    position: relative;
}

.bar {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, red , yellow);
    position: relative;
    border-radius: 10px;
}

.percentage-fill {
    width: 0%;
    height: 100%;
    background-color: #000;
    /* Color of the filled percentage */
}
</style>