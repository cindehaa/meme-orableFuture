<template>
    <div class="legend">
        <div class="bar"></div>
    </div>
</template>

<style>
.legend {
    width: 100%;
    height: 25px;

    /* change to background colour TBD*/
    background-color: #000;

    display: flex;
    justify-content: center;
    position: relative;
}

.bar {
    width: 50%;
    height: 25%;
    background-image: linear-gradient(to right, #FF7A00, #02FFFF);
    position: relative;
    border-radius: 75px;
    opacity: 0.5;
}

.percentage-fill {
    width: 0%;
    height: 10%;
    background-color: #fff;
    /* Color of the filled percentage */
}
</style>