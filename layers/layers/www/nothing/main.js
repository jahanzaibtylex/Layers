 document.getElementById('next').onclick = function () {
            const widthItem = document.querySelector('.item').offsetWidth;
            document.getElementById('formList').scrollLeft += widthItem;
        }
        document.getElementById('prev').onclick = function () {
            const widthItem = document.querySelector('.item').offsetWidth;
            document.getElementById('formList').scrollLeft -= widthItem;
        }
        document.getElementById('pichy').onclick = function () {
            const widthItem = document.querySelector('.itemsundae').offsetWidth;
            document.getElementById('formListsundae').scrollLeft += widthItem;
        }
        document.getElementById('agya').onclick = function () {
            const widthItem = document.querySelector('.itemsundae').offsetWidth;
            document.getElementById('formListsundae').scrollLeft -= widthItem;
        }
        document.getElementById('frw').onclick = function () {
            const widthItem = document.querySelector('.itemcupcake').offsetWidth;
            document.getElementById('formListcupcake').scrollLeft += widthItem;
        }
        document.getElementById('bck').onclick = function () {
            const widthItem = document.querySelector('.itemcupcake').offsetWidth;
            document.getElementById('formListcupcake').scrollLeft -= widthItem;
        }
        document.getElementById('cakeagay').onclick = function () {
            const widthItem = document.querySelector('.itemcake').offsetWidth;
            document.getElementById('formListcake').scrollLeft += widthItem;
        }
        document.getElementById('cakepichy').onclick = function () {
            const widthItem = document.querySelector('.itemcake').offsetWidth;
            document.getElementById('formListcake').scrollLeft -= widthItem;
        }
        document.getElementById('frnt').onclick = function () {
            const widthItem = document.querySelector('.itemdeserts').offsetWidth;
            document.getElementById('formListdeserts').scrollLeft += widthItem;
        }
        document.getElementById('back').onclick = function () {
            const widthItem = document.querySelector('.itemdeserts').offsetWidth;
            document.getElementById('formListdeserts').scrollLeft -= widthItem;
        }
        const countDisplay = document.getElementById("count");
        const plusButton = document.getElementById("plusBtn");
        const minusButton = document.getElementById("minusBtn");

        let count = 0; // Initialize the count

        // Function to update the count display
        function updateCount() {
            countDisplay.textContent = count;
        }

        // Event listener for the plus button
        plusButton.addEventListener("click", () => {
            count++;
            updateCount();
        });

        // Event listener for the minus button
        minusButton.addEventListener("click", () => {
            if (count > 0) {
                count--;
                updateCount();
            }
        });

        // Initial count display
        updateCount();
