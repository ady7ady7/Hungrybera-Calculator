document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('ramen-slider');
    const valueDisplay1 = document.getElementById('value-1');
    const valueDisplay2 = document.getElementById('value-2');
    const valueDisplay3 = document.getElementById('value-3');

    slider.addEventListener('input', function () {
        const sliderValue = parseInt(slider.value, 10);

        // Calculate Hungrybera price (Value 1)
        const hungryberaPrice = 400 + (sliderValue - 1) * 50;
        valueDisplay1.textContent = `$${hungryberaPrice}`;

        // Calculate equivalent Ramen value (Value 2)
        const ramenValue = hungryberaPrice / 2133;
        valueDisplay2.textContent = `$${ramenValue.toFixed(2)}`;

        // Calculate market cap in millions (Value 3)
        const marketCap = (31_000_000 * ramenValue) / 1_000_000;
        valueDisplay3.textContent = `${marketCap.toFixed(1)}M`;
    });
});
