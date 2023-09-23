<template>
    <div class="card-container">
        <div class="country-name">
            <h1>Name: {{ countryName }}</h1>
        </div>
        <div class="sustainable-stat">
            <p>Placeholder</p>
        </div>
        <div class="recommended-activity">
            <h2>Recommended Activities</h2>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
        </div>
    </div>
</template>

<script>


export default {
    components: {},
    name: 'CountryInfo',
    props: ['countryName'],
    mounted() {
        console.log('Received props:', this.countryName);
    }
};

</script>