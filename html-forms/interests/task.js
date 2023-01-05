const checkboxes = [...document.querySelectorAll('.interest__check')];

checkboxes.forEach(item => {
    item.addEventListener('change', () => {
        if (item.closest('.interests_active') === null) {
            //?????????????????
        }
    });
});

