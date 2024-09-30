document.addEventListener("DOMContentLoaded", function() {

    // Determine the basePath based on the current path
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes("/pages/") ? "../" : "";

    const navbarHTML = `
	<nav id="topNav">
		<ul>
			<li><a href="${basePath}index.html">Home</a></li>
			<li><a href="#">Assignments <i class="fa-solid fa-caret-down"></i></a>
				<ul id="dropdown">
					<li><a href="#">To-Do</a></li>
					<li><a href="#">Completed</a></li>
				</ul>
			</li>
			<li>
				<a href="#">Dispatch Central <i class="fa-solid fa-caret-down"></i></a>
				<ul id="dropdown">
					<li><a href="${basePath}pages/loadBoard.html">Load Board</a></li>
					<li><a href="#">Order Entry/Quote</a></li>
					<li><a href="#">Order Search</a></li>
					
					<li><a href="#">Available Loads</a></li>
					<li><a href="#">Dispatched Loads</a></li>
					
					<li><a href="#">Unit Search</a></li>
					<li><a href="#">Unit Info</a></li>
				</ul>
			</li>
			<li><a href="#">File Upload <i class="fa-solid fa-caret-down"></i></a>
				<ul id="dropdown">
					<li><a href="#">Upload File</a></li>
					<li><a href="#">Manage Uploads</a></li>
				</ul>
			</li>
			<li>
				<a href="#">MercerTrac <i class="fa-solid fa-caret-down"></i></a>
				<ul id="dropdown">
					<li><a href="#">Track Dispatched Orders</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="fa-solid fa-question"></i> Help</a></li>
			<li><a href="#"><i class="fa-regular fa-envelope"></i> Report an Issue</a></li>
		</ul>
		
		<ul>
			<li><a href="#">Log in</a></li>
		</ul>
	</nav>


<!-- Modal Structure for Sidebar -->
<div id="modalSideNav" class="modal">
    <div class="modal-content"> 
    <span class="close-button" id="closeModal">&times;</span>

        <h2>Truck Load Board</h2>
        <ul>
            <li><a href="${basePath}index.html">Home</a></li>
        </ul>

        <h2>Assignments</h2>
        <ul>
            <li><a href="#">To-Do</a></li>
            <li><a href="#">Completed</a></li>
        </ul>

        <h2>Dispatch Central</h2>
        <ul>
            <li><a href="${basePath}pages/loadBoard.html">Load Board</a></li>
            <li><a href="#">Order Entry/Quote</a></li>
            <li><a href="#">Order Search</a></li>
            <li><a href="#">Available Loads</a></li>
            <li><a href="#">Dispatched Loads</a></li>
            <li><a href="#">Unit Search</a></li>
            <li><a href="#">Unit Info</a></li>
        </ul>

        <h2>File Upload</h2>
        <ul>
            <li><a href="#">Upload File</a></li>
            <li><a href="#">Manage Uploads</a></li>
        </ul>

        <h2>MercerTrac</h2>
        <ul>
            <li><a href="#">Track Dispatched Orders</a></li>
        </ul>

        <ul>
            <li><a href="#">Log in</a></li>
        </ul>

        
    </div>
</div>


    <nav id="breadcrumbNav">
	 <ul id="breadcrumbList">
        <li><a href="${basePath}index.html"><i class="fa fa-home" aria-hidden="true"></i></a></li>
    </ul>

    <ul>
        <li><a href="#" id="menuToggle"><i class="fa-solid fa-bars"></i></a></li>
    </ul>
	
</nav>
    `


   // Insert the navbar into the document
   document.body.insertAdjacentHTML('afterbegin', navbarHTML);

   const menuToggle = document.getElementById('menuToggle');
   const modalSideNav = document.getElementById('modalSideNav');
   const closeModal = document.getElementById('closeModal');

   // Toggle modal on button click
   menuToggle.addEventListener('click', function(e) {
       e.preventDefault();
       modalSideNav.style.display = 'block'; // Show the modal
   });

   // Close the modal when the close button is clicked
   closeModal.addEventListener('click', function() {
       modalSideNav.style.display = 'none'; // Hide the modal
   });

   // Close the modal when clicking outside of the modal content
   window.addEventListener('click', function(event) {
       if (event.target === modalSideNav) {
           modalSideNav.style.display = 'none'; // Hide the modal
       }
   });


   // Dropdown toggle functionality
   const dropdowns = document.querySelectorAll('.dropdown');

   dropdowns.forEach(dropdown => {
       const parentLink = dropdown.parentElement.querySelector('a');
       parentLink.addEventListener('click', function(e) {
           e.preventDefault(); // Prevent default link behavior
           dropdown.classList.toggle('active'); // Show/hide dropdown
       });
   });

   // Breadcrumb logic
   const breadcrumbList = document.getElementById('breadcrumbList');
   const urlParts = currentPath.split('/').filter(Boolean); // Split the URL into parts

   // Add the current page (third item in breadcrumb)
   if (urlParts.length > 1) {
       const currentPage = urlParts[urlParts.length - 1];
       const pageName = currentPage.substring(0, currentPage.lastIndexOf('.')).replace('-', ' ').toUpperCase(); // Remove extension
       breadcrumbList.insertAdjacentHTML('beforeend', `
           <li><i class="fa-solid fa-caret-right"></i></li>
           <li><a href="${currentPath}">${pageName}</a></li>
       `);
   }
});