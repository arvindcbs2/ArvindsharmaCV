// Select all nav items and main view sections
const navItems = document.querySelectorAll('.nav-item');
const headerTitle = document.querySelector('h1');
const taskContainer = document.querySelector('.add-task-box');
const taskList = document.getElementById('taskList');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // 1. Remove 'active' class from all items and add to clicked one
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // 2. Change the Title based on the button clicked
        const viewName = item.innerText;
        headerTitle.innerText = `Business ${viewName}`;

        // 3. Simple Logic: Hide task input if we aren't on "Tasks"
        if (viewName !== "Tasks") {
            taskContainer.style.display = "none";
            taskList.innerHTML = `<p style="text-align:center; color:#888; margin-top:50px;">
                ${viewName} Dashboard is coming soon! <br> We will link the database here.
            </p>`;
        } else {
            taskContainer.style.display = "flex";
            taskList.innerHTML = ""; // This would normally reload your tasks
        }
    });
});
