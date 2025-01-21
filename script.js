document.querySelectorAll('.glow-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.content-section').forEach(section => section.classList.add('hidden'));
        document.querySelectorAll('.glow-button').forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
        const sectionId = button.id.replace('-btn', '-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});
